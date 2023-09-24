/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate } from '../astro_433effd9.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                          */
const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  return renderTemplate`<!-- <MySiteLayout title={blog.title} pagePath={\`/news/\${id}\`}> --><!-- <div class="w-4/5 max-w-5xl mx-auto py-40">
		<h1 class="text-4xl font-bold">{blog.title}</h1>
		<div class="flex items-center mt-6">
			<p class="text-gray-400 text-xs">公開日：{dateformat(blog.publishedAt)}</p>
			<p class="text-gray-400 text-xs ml-3.5">最終更新日：{dateformat(blog.updatedAt)}</p>
		</div>
		<div class="flex items-center mt-2.5">
			{
				blog.category.map(cate => {
					return <p class="rounded border border-gray-400 p-1 text-xs bg-gray-100 mr-2.5">{cate}</p>;
				})
			}
		</div>
		{(blog.thumbnail) && <Image class="w-full mt-12" src={blog.thumbnail.url} alt="サムネイル" width={blog.thumbnail.width} height={blog.thumbnail.height} />}
		<div class="content mt-24 text-base leading-loose" set:html={blog.content}></div>
	</div> --><!-- </MySiteLayout> -->`;
}, "/Users/kakeru/Desktop/astro_learning /src/pages/news/[id].astro", void 0);

const $$file = "/Users/kakeru/Desktop/astro_learning /src/pages/news/[id].astro";
const $$url = "/news/[id]";

export { $$id as default, $$file as file, $$url as url };
