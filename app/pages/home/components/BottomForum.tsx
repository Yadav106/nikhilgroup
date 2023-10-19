'use client'

import Image from "next/image";

const BottomForum = () => {
    return ( 
        <div className="relative font-serif">
            <Image alt="forum" src="/images/forum.jpeg" height={0} width={0} layout="responsive"/>
            <div className="absolute top-[140px] right-[30px] max-w-[800px] font-bold text-6xl text-white text-center">
                Join the HikeHaven Community Forum
            </div>
            <div className="absolute top-[290px] right-[70px] font-bold text-xl text-white text-center max-w-[700px]">
                Your platform to Pose Queries, Seek Councel & Express your Perspectives.
            </div>
            <div className="absolute top-[390px] right-[240px]">
                <button className="text-black font-semibold bg-[#ffd11a] p-[10px] rounded-[6px] hover:bg-gray-300 hover:text-black transition"
                    onClick={() => {
                        window.open('https://t.me/+Pj_lJgHGm5djMDI1', '_blank')
                    }}
                >
                    Join the HikeHaven Community Forum
                </button>
            </div>
            <div className="h-[5px] bg-primary" />
        </div>
     );
}
 
export default BottomForum;