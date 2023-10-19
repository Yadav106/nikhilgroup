'use client';

import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHiking, GiMountaintop } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import BottomForum from "../../home/components/BottomForum";

const Hike = () => {
    const pathname = usePathname();
    const id = pathname.split('/')[3];

    const [selectedHikes, setSelectedHikes] = useState<any>([]);
    const [hikes, setHikes] = useState<any>([]);
    const [hike, setHike] = useState<any>(null);

    /*
        This is the schema of a single hike object:
        model Hike {
        id              String   @id @default(auto()) @map("_id") @db.ObjectId
        name            String
        description     String
        location        String
        distance        Int
        elevation       Int
        price           Int
        date            String
        availDates      String[]
        difficulty      String
        image           String
        tags            String
        quantity        Int
        title           String
        hikeDescription String
        }
    */

    useEffect(() => {
        axios.get('/api/hike')
        .then(res => {
            if(!hikes) return;
            setSelectedHikes(hikes.filter((hike:any) => {
                if(res.data.hikeIds.includes(hike.id)) {
                    hike.date = res.data.hikeDates[res.data.hikeIds.indexOf(hike.id)]
                    return true;
                }
                return false;
            }))
        })
        .catch(err => {
            console.log(err);
        })
    }, [hikes])

    useEffect(() => {
        console.log('hike', hike);
    }, [hike])
    

    useEffect(() => {
        axios.get('/api/hikes')
        .then(res => {
            console.log(res.data);
            setHikes(res.data)
            //console.log('/api/hikes called');
            // set hike based on id
            setHike(res.data.find((hike:any) => hike.id === id))
        })
    }, [])

    useEffect(() => {
        console.log('selectedHikes', selectedHikes);
    }, [selectedHikes])

    useEffect(() => {
        console.log('hikes', hikes);
    }, [hikes])

    const handleDateClick = (hike:any, date:any) => {
        if(selectedHikes.find((h:any) => h.id === hike.id)) {
            const foundDate = selectedHikes.find((h:any) => h.id === hike.id && h.date === date)
            let data = selectedHikes.filter((h:any) => !(h.id === hike.id))
            localStorage.setItem('hikes', JSON.stringify(data))
            if(foundDate?.date === date) {
                toast.error('Hike removed successfully')
                setSelectedHikes(data)
                axios.post('/api/delete', {id: hike.id})
                return;
            }
            data = [...data, {id: hike.id, date: date}]
            localStorage.setItem('hikes', JSON.stringify(data))
            toast.success('Date changed successfully')
            setSelectedHikes(data)
            return;
        }
        const data = {
            id: hike.id,
            date: date
        }
        axios.post('/api/hike', data)
        .catch(err => {
            console.log(err);
        })
        
        localStorage.setItem('hikes', JSON.stringify([...selectedHikes, data]))
        setSelectedHikes([...selectedHikes, data])
        toast.success('Hike added successfully. Proceed to wishlist')
    }

    function TextWithParagraphs({ text } : { text: string }) {
        // Split the text into paragraphs based on line breaks ("\n")
        const paragraphs = text.split("\n");
      
        return (
          <div className="prose font-serif">
            {paragraphs.map((paragraphText:any, index:any) => (
              <p key={index}>{paragraphText}<br/></p>
            ))}
          </div>
        );
      }

    return ( 
        <div className="font-serif">
            <div className="mt-[144px]">
            <div className="h-[5px] bg-primary" />
                {
                    hike ? (
                        <>
                            <div className="relative">
                                <Image alt="hero" src={hike.image} height={0} width={0} layout="responsive"/>
                                <div className="absolute top-[50px] left-[50px]">
                                    <div className="flex flex-col justify-center items-center bg-gray-600/50 p-[20px] rounded-lg">
                                        <div className="font-bold text-6xl text-white text-center">{hike.name}</div>
                                        <div className="font-bold text-2xl text-white text-center">{hike.description}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[20px] justify-center w-full px-[100px]">
                                <div className="flex justify-between w-full">
                                    {/* show hike difficulty */}
                                    <div className="flex gap-[7px] justify-center items-center">
                                        <GiHiking className="text-5xl"/>
                                        <div className="flex flex-col items-start">
                                            <div className="font-bold text-lg text-center">Trek Difficulty</div>
                                            <div className="text-md text-center">{hike.difficulty.charAt(0).toUpperCase() + hike.difficulty.slice(1)}</div>
                                        </div>
                                    </div>
                                    
                                    {/* show hike duration */}
                                    <div className="flex gap-[7px] justify-center items-center">
                                        <IoMdClock className="text-5xl"/>
                                        <div className="flex flex-col items-start">
                                            <div className="font-bold text-lg text-center">Trek Duration</div>
                                            <div className="text-md text-center">{hike.distance} km</div>
                                        </div>
                                    </div>
                                    {/* show hike altitude */}
                                    <div className="flex gap-[7px] justify-center items-center">
                                        <GiMountaintop className="text-5xl"/>
                                        <div className="flex flex-col items-start">
                                            <div className="font-bold text-lg text-center">Altitude</div>
                                            <div className="text-md text-center">{hike.elevation} m</div>
                                        </div>
                                    </div>
                                    {/* show hike location */}
                                    <div className="flex gap-[7px] justify-center items-center">
                                        <FaMapMarkerAlt className="text-5xl"/>
                                        <div className="flex flex-col items-start">
                                            <div className="font-bold text-lg text-center">Location</div>
                                            <div className="text-md text-center">{hike.location}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                {/* show title and hikedescription */}
                                <div className="flex flex-col justify-start items-start p-[100px] gap-[10px]">
                                    <div className="font-bold text-3xl text-gray-900 underline">{hike.title}</div>
                                    {/* <span className="font-bold text-xl text-gray-900">{hike.hikeDescription}</span> */}
                                    <TextWithParagraphs text={hike.hikeDescription} />
                                </div>
                            </div>
                            <BottomForum />
                        </>
                    ) : (
                        <div className="flex justify-center items-center h-[500px]">
                            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    )
                }
            </div>
        </div>
     );
}
 
export default Hike;