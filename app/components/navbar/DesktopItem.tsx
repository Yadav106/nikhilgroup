'use client';

import React, { useState } from "react";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";
import { BiSolidDownArrow } from "react-icons/bi";
import { User } from "@prisma/client";

interface DesktopItemProps{
    label:string;
    href:string;
    active:boolean;
    logo?:IconType;
    options?: any[];
    user?:User;
}

const DesktopItem:React.FC<DesktopItemProps> = ({
    label,href,active,logo:Logo,options,user
}) => {
    const [showOptions,setShowOptions] = useState(false)
    const [wishlistItems, setWishlistItems] = useState(user?.hikeIds?.length || 0)
    return ( 
        <div>
            {
                options 
                ?
                <div>
                    <div className="rounded-md p-3 text-sm leading-6 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition flex items-center gap-2 cursor-pointer" onClick={() => setShowOptions(option => !option)}>
                        {label}
                        <BiSolidDownArrow className={clsx(
                            showOptions && "transform rotate-180 transition duration-300"
                        )}/>
                    </div>
                    {
                        showOptions && (
                            <div className="flex flex-col gap-2 absolute bg-white px-[18px] py-[10px] rounded-md">
                                {
                                    options.map((option) => (
                                        <Link key={option.label} href={option.href} className="hover:bg-gray-800 hover:text-white transition duration-100 w-[100%] p-[7px] rounded-md">
                                            {option.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                :
                <Link href={href} 
                    className={clsx(`
                        rounded-md
                        p-3
                        text-sm
                        leading-6
                        font-semibold
                        text-gray-800
                        hover:bg-gray-800
                        hover:text-white
                        transition
                        flex
                        items-center
                        gap-2
                    `,
                    active && 'bg-gray-100 text-black'
                    )}
                    >
                        {
                            Logo ? <Logo /> : null
                        }
                        <div className="flex items-center">
                            {label}
                            {
                                label === "Wishlist" && (
                                    <div>
                                        ({wishlistItems})
                                    </div>
                                )
                            }
                        </div>
                    </Link>
            }
        </div>
     );
}
 
export default DesktopItem;