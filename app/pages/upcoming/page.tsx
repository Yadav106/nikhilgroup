'use client';

import useHikes from "@/app/hooks/useHikes";
import axios from "axios";
import clsx from "clsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation"
import Button from "@/app/components/Button";
import BottomForum from "../home/components/BottomForum";

const Upcoming = () => {
    // const hikes = useHikes();
    const router = useRouter();

    const [selectedHikes, setSelectedHikes] = useState<any>([]);
    const [localHikes, setLocalHikes] = useState<any>([]);
    const [internationalHikes, setInternationalHikes] = useState<any>([]);
    const [hikes, setHikes] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('/api/hike')
        .then(res => {
            console.log('/api/hike res', res.data);
            if(!hikes) return;
            setSelectedHikes(hikes.filter((hike:any) => {
                if(res.data.hikeIds.includes(hike.id)) {
                    hike.date = res.data.hikeDates[res.data.hikeIds.indexOf(hike.id)]
                    return true;
                }
                return false;
            }))
            setLoading(false)
            //console.log('/api/hike called');
        })
        .catch(err => {
            console.log(err);
        })
    }, [hikes])

    useEffect(() => {
        axios.get('/api/hikes')
        .then(res => {
            console.log(res.data);
            setHikes(res.data)
            //console.log('/api/hikes called');
        })
    }, [])

    useEffect(() => {
        console.log('selectedHikes', selectedHikes);
    }, [selectedHikes])

    useEffect(() => {
        console.log('hikes', hikes);
    }, [hikes])

    useEffect(() => {
        if(hikes) {
            const local = hikes.filter((hike:any) => hike.tags === 'local')
            const international = hikes.filter((hike:any) => hike.tags === 'international')
            setLocalHikes(local)
            setInternationalHikes(international)
        }
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

    const onShowMoreClick = (id:String) => {
        router.push(`/pages/hike/${id}`)
    }

    const redirectToWishlist = () => {
        router.push('/pages/wishlist')
    }


    return ( 
        <div className="mt-[200px] flex flex-col gap-[100px]">
            <div>
                <div className="flex justify-between pr-[70px] items-center">
                    <h1 className="text-[60px] font-semibold ml-7 font-serif">Local Treks</h1>
                    <button onClick={redirectToWishlist} className="text-black font-semibold bg-[#ffd11a] p-[15px] rounded-[6px] hover:bg-gray-300 hover:text-black transition">
                                Proceed To Wishlist {`>>`}
                    </button>
                </div>
                <div className="w-[98vw] px-7">
                    <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
                </div>
                <div className="flex flex-wrap gap-[100px] justify-center">
                    {
                        loading && (
                            <div className="flex justify-center items-center">
                                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                            </div>
                        )
                    }
                    {
                        localHikes.map((hike: any) => (
                            <div key={hike.id} className="flex justify-center">
                                <div className="flex flex-col items-center justify-center w-[300px] pb-[37px] rounded-[10px] shadow-xl">
                                    <div className="w-[300px] h-[200px] rounded-t-[10px]">
                                        <Image alt="hike" className="rounded-t-[10px]" src={hike.image} height={0} width={0} layout="responsive"/>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-[300px]">
                                        <div className="text-[25px] font-semibold">{hike.name}</div>
                                        <div className="text-[15px] font-semibold">{hike.location}</div>
                                        <div className="text-[15px] font-semibold">Rs {hike.price} /-</div>
                                        <div className={clsx(
                                            'text-[13px] ml-[7px]',
                                            hike.difficulty === 'easy' ? 'text-green-500' : '',
                                            hike.difficulty === 'moderate' ? 'text-yellow-500' : '',
                                            hike.difficulty === 'difficult' ? 'text-red-500' : ''
                                        )}>
                                            {hike.difficulty.charAt(0).toUpperCase() + hike.difficulty.slice(1)}
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
                                                <div className="text-[15px] font-semibold text-gray-500 mt-[10px] mb-[20px]">Click on date to select Trek</div>
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
            </div>
            

            <div>
                <h1 className="text-[60px] font-semibold ml-7 font-serif">Domestic Treks</h1>
                <div className="w-[98vw] px-7">
                    <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
                </div>
                <div className="flex flex-wrap gap-[100px] justify-center">        
                    {
                        loading && (
                            <div className="flex justify-center items-center">
                                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                            </div>
                        )
                    }        
                    {
                        internationalHikes.map((hike: any) => (
                            <div key={hike.id} className="flex justify-center mb-[30px]">
                                <div className="flex flex-col items-center justify-center w-[300px] pb-[37px] rounded-[10px] shadow-xl">
                                    <div className="w-[300px] h-[200px] rounded-t-[10px]">
                                        <Image alt="hike" className="rounded-t-[10px]" src={hike.image} height={0} width={0} layout="responsive"/>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-[300px]">
                                        <div className="text-[25px] font-semibold text-center">{hike.name}</div>
                                        <div className="text-[15px] font-semibold text-center">{hike.location}</div>
                                        <div className="text-[15px] font-semibold text-center">Rs {hike.price} /-</div>
                                        <div className={clsx(
                                            'text-[13px] ml-[7px]',
                                            hike.difficulty === 'easy' ? 'text-green-500' : '',
                                            hike.difficulty === 'moderate' ? 'text-yellow-500' : '',
                                            hike.difficulty === 'difficult' ? 'text-red-500' : ''
                                        )}>
                                            {hike.difficulty.charAt(0).toUpperCase() + hike.difficulty.slice(1)}
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
                                                <div className="text-[15px] font-semibold text-gray-500 mt-[10px] mb-[20px]">Click on date to select Trek</div>
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
            </div>
            <BottomForum />
        </div>
     );
}
 
export default Upcoming;