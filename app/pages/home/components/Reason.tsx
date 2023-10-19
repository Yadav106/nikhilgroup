'use client';

import { IconType } from "react-icons";

interface ReasonProps {
    logo: IconType;
    title: string;
    description: string;
}

const Reason: React.FC<ReasonProps> = ({
    logo:Logo,
    title,
    description
}) => {
    return ( 
        <div className="w-[300px] min-h-[370px] shadow-lg flex flex-col gap-[15px]">
            <div className="flex justify-center items-center mt-[40px]">
                <Logo className="text-[60px]"/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-[25px] font-semibold text-center">{title}</div>
                <div className="text-gray-600 text-sm font-semibold text-center px-[20px] mt-[15px] font-serif">{description}</div>
            </div>
        </div>
     );
}
 
export default Reason;