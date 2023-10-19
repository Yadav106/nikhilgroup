import Modal from "@/app/components/Modal";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { HiPhotograph } from "react-icons/hi";
import CloudinarySupport from "./components/CloudinarySupport";
import Images from "./components/Images";
import getCurrentUser from "@/app/actions/getCurrentUser";

const Gallery = async () => {    
    const currentUser = await getCurrentUser();
    return ( 
        <div className="mt-[150px]">
            <div className="flex justify-between items-center pr-[100px]">
                <h1 className="text-[60px] font-semibold ml-7 font-serif">Photo Gallery</h1>
                <CloudinarySupport />
            </div>
            <div className="w-[98vw] px-7">
                <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
            </div>
            <Images currentUser={currentUser}/>
            
        </div>
     );
}
 
export default Gallery;