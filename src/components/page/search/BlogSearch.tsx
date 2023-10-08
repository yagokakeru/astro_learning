// Dependencies
import useSWR from 'swr';

// Functions
import { getBlogs } from '../../../library/microcms';

export default function BlogSearch() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');

    const { data, error, isLoading } = useSWR(
        q === null ? null : ['/search', q],
        ([, q]) => getBlogs({fields: ['id', 'title'], q}),
    );

    if (error) return <div>エラーが発生しました</div>;
    if (isLoading) return <div>読み込み中...</div>;

    return (

        <section class="bg-gray-700 py-36">
            <ul class="mx-auto w-11/12">
                {
                    data?.contents.length !== 0 ? (
                        data?.contents.map((content: any, index: number) => {
                            return <a class={`border-t ${(data.totalCount - 1 === index) && 'border-b'} border-white border-solid block text-[2vw] py-8 text-white`} href={`/news/${content.id}`}><li>{content.title}</li></a>
                        })
                    ) : (
                        <div class="text-white">検索結果はありません</div>
                    )
                }
            </ul>
        </section>
    );
}