// Hooks
import { useState } from 'preact/hooks';

// Types
import type { JSXInternal } from 'preact/src/jsx';


export default function SearchButton() {
    const [value, setValue] = useState(
        typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('q') ?? '' : ''
    );

    function handleChange(event: JSXInternal.GenericEventHandler<HTMLInputElement>) {
        setValue((event.target as HTMLInputElement).value);
    }

    function handleSubmit(event: JSXInternal.GenericEventHandler<HTMLFormElement>) {
        event.preventDefault();
        window.location.href = `/search?q=${value}`;
    }

    return (
        <form class="flex items-center justify-center flex-wrap py-24" role="search" onSubmit={handleSubmit}>
            <label class="text-lg font-bold text-center w-full" for="blog_search">記事を検索</label>
            <input class="border border-solid border-gray-500 rounded-l-3xl mt-6 px-3.5 py-2" type="search" id="blog_search" value={value} onChange={handleChange} />
            <button class="border-t border-b border-r border-solid border-gray-500 rounded-r-3xl mt-6 px-3.5 py-2">検索</button>
        </form>
    );
}