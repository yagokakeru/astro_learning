// Dependencies
import useSWR from 'swr';

// Functions
import { getBlogs } from '../../../library/microcms';

import NewsList from '../../ui/NewsList';

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
        <NewsList newsList={data} notArticle="検索結果はありません" />
    );
}