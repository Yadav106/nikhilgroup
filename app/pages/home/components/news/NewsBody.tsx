'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

interface NewsBodyProps {
    id: number;
    title: string;
    img: string;
    body: string;
    date: string;
    showBtn: boolean;
    btnText?: string;
}

const NewsBody: React.FC<NewsBodyProps> = ({
    id,
    title,
    img,
    body,
    date,
    showBtn,
    btnText
}) => {
    const router = useRouter();
    const handleBtnClick = () => {
        if(btnText === "Apply Now") {
            window.open('https://forms.gle/Rc4besn8cYJqJnse8')
        }
        if(btnText === "View Gallery") {
            router.push('/pages/gallery');
        }
    }

    return ( 
        <div className="w-fit">
            <div className="flex justify-center">
                <Image src={img} alt="image" width={600} height={500}/>
            </div>
            <br />
            <div className="font-bold text-[25px]">
                {title}
            </div>
            <div>{date}</div>
            <br />
            {body} <br />
            {
                showBtn && (
                    <button className="bg-primary font-serif px-[7px] py-[10px] mt-[20px] mb-[30px] rounded-md hover:bg-gray-300 hover:shadow-xl transition duration-200" onClick={handleBtnClick}>
                        {btnText}
                    </button>
                )
            }
        </div>
     );
}
 
export default NewsBody;