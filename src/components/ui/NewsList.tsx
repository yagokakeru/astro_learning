export default function NewsList({newsList, notArticle}){
    const contents = (newsList.contents) ? newsList.contents : newsList;

    return (
        <section class="bg-gray-700 py-36">
            <ul class="mx-auto w-11/12">
                {
                    contents.length !== 0 ? (
                        contents.map((content: any, index: number) => {
                            return <a class={`border-t ${(contents.length - 1 === index) && 'border-b'} border-white border-solid block text-[2vw] py-8 text-white`} href={`/news/${content.id}`}><li>{content.title}</li></a>
                        })
                    ) : (
                        <div class="text-white">{notArticle}</div>
                    )
                }
            </ul>
        </section>
    )
}