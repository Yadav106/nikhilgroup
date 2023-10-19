'use client';

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useReasons from "@/app/hooks/useReasons";
import Image from "next/image";
import Reason from "./Reason";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const CustomPrevArrow = (props:any) => (
    <div
    className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer text-xl text-gray-600 z-30 bg-gray-400 p-3 rounded-full hover:bg-primary hover:text-black transition-all duration-200"
    onClick={props.onClick}
    >
        <AiOutlineDoubleLeft />
    </div>
);

const CustomNextArrow = (props:any) => (
    <div
    className="absolute top-1/2 right-4 transform cursor-pointer text-xl text-gray-600 bg-gray-400 p-3 rounded-full hover:bg-primary hover:text-black transition-all duration-200"
    onClick={props.onClick}
    >
        <AiOutlineDoubleRight />
    </div>
);

const WhyChooseUs = () => {

    const reasons = useReasons();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="mt-[30px] mb-[40px]">
            <h1 className="text-[60px] font-semibold ml-7 font-serif">Why Choose HikeHaven</h1>
            <div className="w-[98vw] px-7">
                <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
            </div>
            <div className="flex justify-center">
                    <Slider {...settings} className="w-[90vw]">
                        {
                            reasons.map(reason => {
                                return <Reason key={reason.id} logo={reason.logo} title={reason.title} description={reason.description}/>
                            })
                        }
                    </Slider>
                </div>
        </div>
     );
}
 
export default WhyChooseUs;