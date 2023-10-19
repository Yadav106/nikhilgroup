import getCurrentUser from "@/app/actions/getCurrentUser";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CurrentUserProps {
    user: any;
}

const CurrentUser: React.FC<CurrentUserProps> = ({
    user
}) => {
    const router = useRouter();
    return ( 
        <div className="flex gap-[7px] justify-center items-center cursor-pointer hover:bg-gray-800 hover:text-white transition p-[10px] rounded-md" onClick={() => router.push('/pages/myprofile')}>
            <Image src={user?.image || "/images/placeholder.jpg"} alt="user" height={30} width={30} className="rounded-full"/>
            <div className="text-sm font-semibold">{user?.name}</div>
        </div>
     );
}
 
export default CurrentUser;