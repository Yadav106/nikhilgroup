'use client';

import useRoutes from '@/app/hooks/useRoutes';
import Image from 'next/image';
import DesktopItem from './DesktopItem';
import { signOut } from "next-auth/react";
import {usePathname, useRouter} from 'next/navigation';
import useWhiteRoutes from '@/app/hooks/useWhiteRoutes';
import { FaSearch } from 'react-icons/fa';
import CurrentUser from './CurrentUser';
import { FaCircleUser } from 'react-icons/fa6';
import { useState } from 'react';

interface DesktopNavbarProps {
    user: any
}


const DesktopNavbar:React.FC<DesktopNavbarProps> = ({
    user
}) => {
    const pathname = usePathname();
    const routes = useRoutes()
    const whiteRoutes = useWhiteRoutes()
    const router = useRouter()
    const handleClick = () => {
        router.push("/pages/home")
    }
    const handleSignOut = () => {
        signOut();
    }

    const [searchText, setSearchText] = useState("");
    
    return ( 
        <div className='w-full lg:flex lg:flex-col lg:fixed lg:z-40'>
            <div className='w-full lg:flex hidden lg:left-0 lg:z-40 lg:bg-white lg:border-r-[1px] lg:pb-2 justify-between items-center px-6 pt-1'>
                <Image alt='logo' src='/images/logo.png' height={85} width={85} onClick={handleClick} className='cursor-pointer'/>
                {
                    whiteRoutes.map(item => (
                        <DesktopItem 
                            label={item.label}
                            key={item.label}
                            href={item.href}
                            active={item.active}
                            logo={item.logo}
                            user={user}
                        />
                    ))
                }
                {
                    user?.email ? (
                        <CurrentUser user={user}/>
                    ) : (
                        <DesktopItem label="My Profile" href='/pages/myprofile' active={pathname === "/pages/myprofile"} logo={FaCircleUser} user={user}/>
                    )
                }
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[300px] focus:w-[400px] transition px-4 py-2 pr-10 leading-tight text-gray-700 border rounded-md shadow-sm focus:border-gray-900"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if(searchText === "") return;
                                router.push(
                                    `/pages/upcoming/${searchText}`,
                                );
                            }
                        }}
                    />
                    <button className="absolute right-2 top-2 text-gray-600" onClick={() => {
                            if(searchText === "") return;
                            router.push(
                                `/pages/upcoming?search=${searchText}`,
                            )
                        }}>
                        <FaSearch /> {/* Use the search icon */}
                    </button>
                </div>
            </div>

            <div className='w-[full] lg:flex hidden lg:left-0 lg:z-40 lg:bg-primary lg:border-r-[1px] justify-between items-center px-20'>
                {
                    routes.map(item => (
                        <DesktopItem 
                            label={item.label}
                            key={item.label}
                            href={item.href}
                            active={item.active}
                            options={item.options}
                            user={user}
                        />
                    ))
                }
                <div className='rounded-md p-3 text-sm leading-6 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition cursor-pointer' onClick={handleSignOut}>
                    <span>Sign Out</span>
                </div>
            </div>
        </div>
     );
}
 
export default DesktopNavbar;