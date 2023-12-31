// Dependencies
import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';

const client = createClient({
    serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY
});

// Type
export type Blog = {
    id: string,
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    newcontent: string;
    category: string[];
    thumbnail: {
        url: string;
        width: number;
        height: number;
    };
}

export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
}

export type Categories = {
    id: string,
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
}

export type CategoriesResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Categories[];
}

// API呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({endpoint: 'blogs', queries});
}

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    return await client.getListDetail<Blog>({
        endpoint: 'blogs',
        contentId,
        queries
    });
}

export const getCategories = async (queries?: MicroCMSQueries) => {
    return await client.get<CategoriesResponse>({endpoint: 'categories', queries});
}