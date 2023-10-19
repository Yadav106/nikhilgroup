'use client';

import Button from "@/app/components/Button";
import useHikes from "@/app/hooks/useHikes";
import axios from "axios";
import clsx from "clsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Search = () => {
    const pathname = usePathname();
    const searchText = pathname.split("/")[3]
    const [hikes, setHikes] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter();


    useEffect(() => {
        axios.get('/api/hikes')
        .then(res => {
            console.log(res.data);
            setHikes(res.data)
        })
        .finally(() => {
            setIsLoading(false)
        })
      }, [])
    
      useEffect(() => {
        console.log(hikes);
      }, [hikes])

    const [selectedHikes, setSelectedHikes] = useState<any>([]);

    const filteredHikes = hikes.filter((hike:any) => hike.name.toLowerCase().includes(searchText.toLowerCase()))

    const handleDateClick = (hike:any, date:any) => {
        if(selectedHikes.find((h:any) => h.id === hike.id)) {
            const foundDate = selectedHikes.find((h:any) => h.id === hike.id && h.date === date)
            let data = selectedHikes.filter((h:any) => !(h.id === hike.id))
            localStorage.setItem('hikes', JSON.stringify(data))
            if(foundDate.date === date) {
                toast.error('Hike removed successfully')
                setSelectedHikes(data)
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
        toast.success('Hike added successfully')
    }

    const onShowMoreClick = (id:String) => {
        router.push(`/pages/hike/${id}`)
    }


    return ( 
        <div className="mt-[200px]">
            {
                isLoading ? (
                    <div className="flex justify-center items-center h-[500px]">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-[100px] justify-center mb-[20px]">
                    {
                        filteredHikes.map((hike: any) => (
                            <div key={hike.id} className="flex justify-center">
                                <div className="flex flex-col items-center justify-center w-[300px] pb-[100px] bg-white rounded-[10px] shadow-lg">
                                    <div className="w-[300px] h-[200px] rounded-t-[10px]">
                                        <Image alt="hike" src={hike.image} height={0} width={0} layout="responsive" className="rounded-t-[10px]"/>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-[300px] h-[200px]">
                                        <div className="text-[25px] mt-[65px] font-semibold">{hike.name}</div>
                                        <div className="text-[15px] font-semibold">{hike.location}</div>
                                        <div className="text-[15px] font-semibold">Rs {hike.price} /-</div>
                                        <div className={clsx(
                                            'text-[13px] ml-[7px]',
                                            hike.difficulty === 'easy' ? 'text-green-500' : '',
                                            hike.difficulty === 'moderate' ? 'text-yellow-500' : '',
                                            hike.difficulty === 'difficult' ? 'text-red-500' : ''
                                        )}>
                                            ({hike.difficulty.charAt(0).toUpperCase() + hike.difficulty.slice(1)})
                                        </div>
                                        <div className="flex flex-col gap-2 mt-[7px]">
                                        {
                                            hike.availDates.map((data: any) => (
                                                <div 
                                                    className={clsx(
                                                        "bg-gray-200 text-black p-[3px] w-[250px] text-md font-serif cursor-pointer shadow-md hover:shadow-lg transition-all duration-100 hover:bg-gray-300 px-[10px]",
                                                        selectedHikes.find((h:any) => h.id === hike.id && h.date === data) ? 'bg-green-500 text-white hover:bg-green-600' : ''
                                                    )}
                                                    onClick={() => handleDateClick(hike, data)}
                                                    key={nanoid()}
                                                >
                                                    {data}
                                                </div>
                                            ))
                                        }
                                        </div>
                                        {
                                            selectedHikes.find((h:any) => h.id === hike.id) ? (
                                                <div className="text-[15px] font-semibold text-green-500 mt-[10px] mb-[20px]">Trek Selected</div>
                                            ) : (
                                                <div className="text-[15px] font-semibold text-gray-500 mt-[10px] mb-[20px]">Click on date to select trek</div>
                                            )
                                        }
                                        <div>
                                            <Button type="button" onClick={() => onShowMoreClick(hike.id)}>
                                                Show More Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                )
            }            
        </div>
    );
}
 
export default Search;