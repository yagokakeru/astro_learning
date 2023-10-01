// Dependencies
import useSWR from 'swr';

// Function
import { getBlogDetail } from '../../../../library/microcms';
import { getDateFormat } from '../../../../library/dateformat';


export default function BlogPreview() {
    const params = new URLSearchParams(window.location.search);
	const contentID = params.get('contentId');
	const draftKey = params.get('draftKey');

    const { data, error, isLoading, isValidating } = useSWR(
        contentID === null || draftKey === null ? null : ['/news/preview', contentID, draftKey],
        ([, contentID, draftKey]) => getBlogDetail(contentID, {draftKey})
    );

    if(error) return <div>エラーが発生しました</div>;
    if(isLoading) return <div>読み込み中...</div>;

    return (
        <div class="w-4/5 max-w-5xl mx-auto py-40" id="js-preview_container">
            <h1 class="text-4xl font-bold">{data.title}</h1>
            <div class="flex items-center mt-6">
                <p class="text-gray-400 text-xs">公開日：{getDateFormat(data.publishedAt)}</p>
                <p class="text-gray-400 text-xs ml-3.5">最終更新日：{getDateFormat(data.updatedAt)}</p>
            </div>
            <div class="flex items-center mt-2.5">
                {
                    data.category.map((cate: any) => {
                        return <a class="rounded border border-gray-400 p-1 text-xs bg-gray-100 mr-2.5" href={`/category/${cate.id}`}>{cate.name}</a>;
                    })
                }
            </div>
            {(data.thumbnail) ?
            <img class="w-full mt-12" src={data.thumbnail.url} alt="サムネイル" width={data.thumbnail.width} height={data.thumbnail.height} />
            :
            <img class="w-full mt-12" src="/ogp.jpg" alt="サムネイル" width="1200" height="630" />}
            <div class="content mt-24 text-base leading-loose" dangerouslySetInnerHTML={{__html: data.content}}></div>

            {isValidating && <div>更新中...</div>}
        </div>
    )
}