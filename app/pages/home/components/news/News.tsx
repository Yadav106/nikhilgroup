'use client';
import NewsBody from "./NewsBody";
import NewsList from "./NewsList";

const News = () => {
    return (
        <main className="flex flex-col">
            <h1 className="text-[60px] font-semibold ml-7 font-serif">Current Trek News</h1>
            <div className="w-[98vw] px-7">
                <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
            </div>
            <NewsList />
        </main>
    );
}
 
export default News;