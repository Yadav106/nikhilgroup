import getCurrentUser from "@/app/actions/getCurrentUser";
import Image from "next/image";
import ChangeUserName from "./components/ChangeUserName";
import PastHikes from "./components/PastHikes";

const MyProfile = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <div className="mt-[200px] flex flex-col items-center">
            <h1 className="text-[60px] font-semibold ml-7 font-serif">Edit User Profile</h1>
                <div className="w-[98vw] px-7">
                    <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
                </div>
            <div className="bg-gray-100/50 flex flex-col items-center p-[30px] rounded-lg shadow-2xl mb-[30px]">
                <Image alt="Avatar" className=" rounded-full" src={currentUser?.image || '/images/placeholder.jpg'} height={100} width={100}/>
                <div className="text-2xl font-semibold mt-5">{currentUser?.name}</div>
                <div className="text-xl font-semibold mt-5">{currentUser?.email}</div>
                <div className="text-xl font-semibold mt-5">{currentUser?.phone}</div>
                <ChangeUserName user={currentUser}/>
            </div>
            <PastHikes user={currentUser}/>
        </div>
     );
}
 
export default MyProfile;