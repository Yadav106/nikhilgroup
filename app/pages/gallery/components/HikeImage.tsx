import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface HikeImageProps {
    image: any;
    handleImageClick: (image: any) => void;
}

const HikeImage:React.FC<HikeImageProps> = ({
    image,
    handleImageClick
}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className="relative">
            <Image 
                alt="hike" 
                src={image.url} 
                height={hovered ? 210 : 200} 
                width={hovered? 410 : 400} 
                className="rounded-[10px] cursor-pointer transition-all duration-300 hover:shadow-2xl" 
                onClick={() => handleImageClick(image)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <span className={clsx(
                "absolute top-[7px] left-[7px] bg-gray-300 rounded-md p-[2px] transition-all duration-300 font-bold font-serif",
                hovered ? 'opacity-100' : 'opacity-0'
            )}>
                {image.name}
            </span>
        </div>
     );
}
 
export default HikeImage;