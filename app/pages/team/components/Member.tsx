'use client';

import Image from "next/image";
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

interface MemberProps {
    name: string;
    position: string;
    image: string;
    quote: string;
    description: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    email?: string;
}

const Member: React.FC<MemberProps> = ({
    name,
    position,
    image,
    quote,
    description,
    linkedin,
    instagram,
    facebook,
    email
}) => {
    return ( 
        <div className="w-[800px] p-[30px] rounded-md bg-gray-100 shadow-lg hover:shadow-2xl transition duration-200 flex flex-col justify-center items-center gap-[20px]">
            <div>
                <Image alt="user" src={image} height={150} width={150} className="rounded-xl"/>
            </div>
            <div className="flex flex-col gap-[5px]">
                <span className="text-xl font-bold font-serif">{name}</span>
                <span className="text-md font-serif ml-5 font-bold text-green-600 hover:underline">{position}</span>
            </div>
            <div className="font-serif text-lg text-center">
                "{quote}"
            </div>
            <div className="font-serif text-lg text-center">
                "{description}"
            </div>
            <div className="flex flex-wrap gap-[10px] justify-center items-center mt-3">
                {
                    linkedin && (
                        <AiFillLinkedin 
                            className="text-[30px] cursor-pointer hover:text-blue-500 transition duration-200"
                            onClick={() => window.open(linkedin, "_blank")}
                        />
                    )
                }
                {
                    instagram && (
                        <AiFillInstagram 
                            className="text-[30px] cursor-pointer hover:text-pink-500 transition duration-200"
                            onClick={() => window.open(instagram, "_blank")}
                        />
                    )
                }
                {
                    facebook && (
                        <AiFillFacebook 
                            className="text-[30px] cursor-pointer hover:text-blue-500 transition duration-200"
                            onClick={() => window.open(facebook, "_blank")}
                        />
                    )
                }
                {
                    email && (
                        <MdEmail 
                            className="text-[30px] cursor-pointer hover:text-red-500 transition duration-200"
                            onClick={() => window.open(email, "_blank")}
                        />
                    )
                }
            </div>
        </div>
     );
}
 
export default Member;