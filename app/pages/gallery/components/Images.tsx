'use client'

import Modal from "@/app/components/Modal";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import HikeImage from "./HikeImage";

interface ImagesProps {
    currentUser: any
}

const Images:React.FC<ImagesProps> = ({
    currentUser
}) => {
    const [bigImage, setBigImage] = useState('')
    const [id, setId] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState('')
    const [userImage, setUserImage] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    const handleImageClick = (image: any) => {
        setIsOpen(true)
        setId(image.id)
        setBigImage(image.url)
        setName(image.name)
        setUserImage(image.image)
    }

    const [images, setImages] = useState<any>([])

    useEffect(() => {
        axios.get('/api/upload')
        .then(res => {
            console.log(res.data);
            setImages(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
        })
    }, [toggle])

    return (
        <div>
            {
                loading && (
                    <div className="flex justify-center items-center h-[500px]">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                )
            }
            <div className="flex flex-wrap gap-[30px] justify-center mb-[30px]">
                    {
                        images.map((image: any) => (
                            <HikeImage image={image} handleImageClick={handleImageClick}/>
                        ))
                    }
            </div>
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        <Image alt="hike" src={bigImage} height={1500} width={1500} className="rounded-[10px] w-[3000px]"/>
                        <div className="flex gap-[7px] items-center font-bold">
                            <Image alt="hike" src={userImage} height={70} width={70} className="rounded-full"/>
                            {name}
                        </div>
                        {
                            currentUser?.id === id && (
                                <button className="bg-red-500 text-white rounded-[10px] px-[10px] py-[5px]" onClick={() => {
                                    axios.post(`/api/image/`, {
                                        bigImage
                                    })
                                    .then(res => {
                                        console.log(res.data);
                                        setToggle(!toggle)
                                        setIsOpen(false)
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                                }}>
                                    Delete
                                </button>
                            )
                        }
                    </div>
            </Modal>
        </div>
     );
}
 
export default Images;