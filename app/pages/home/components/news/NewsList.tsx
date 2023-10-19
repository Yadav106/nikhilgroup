import useNews from "@/app/hooks/useNews";
import { useEffect, useState } from "react";
import NewsBody from "./NewsBody";
import clsx from "clsx";
import { nanoid } from "nanoid";

const NewsList = () => {
    const news = useNews();
    const [currentNews, setCurrentNews] = useState(news[0]);

    return ( 
        <div className="flex gap-10 px-7">
            <div className="flex flex-col gap-5 bg-white p-[10px] rounded-md shadow-lg">
                {
                    news.map((newsItem) => (
                        <div className="flex flex-col gap-2 max-w-[450px] hover:underline cursor-pointer" key={nanoid()}>
                            <div className="flex gap-2">
                                {
                                    currentNews.id === newsItem.id && (
                                        <div className="h-[20px] w-[10px] bg-[#ffd11a]"></div>
                                    )
                                }
                                <div>
                                    <div className={clsx("text-sm", currentNews.id === newsItem.id && "font-bold")} onClick={() => setCurrentNews(newsItem)}>
                                            {newsItem.title}
                                    </div>
                                    <div className="text-[12px] mt-2">{newsItem.date}</div>
                                </div>
                            </div>
                    <div className="w-full h-[1.5px] bg-gray-300"></div>
                        </div>
                    ))
                }
            </div>
            <NewsBody id={currentNews.id} title={currentNews.title} body={currentNews.body} img={currentNews.img} date={currentNews.date} showBtn={currentNews.showBtn} btnText={currentNews.btnText}/>
        </div>
     );
}
 
export default NewsList;