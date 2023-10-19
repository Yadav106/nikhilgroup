'use client'

import useHikes from "@/app/hooks/useHikes";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Wishlist = () => {
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(true);
    const [hikeIds, setHikeIds] = useState<any>([]);
    const [hikeDates, setHikeDates] = useState<any>([]);
    const [wishlist, setWishlist] = useState<any>([]);

    const [hikes, setHikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        axios.get('/api/hike')
        .then(res => {
            setHikeIds(res.data.hikeIds)
            setHikeDates(res.data.hikeDates)
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [hikes])

    useEffect(() => {
        if(hikeIds && hikeIds.length > 0) {
            const data = hikes.filter((hike:any, index) => hikeIds.includes(hike.id))
            // also add dates based on index
            data.forEach((hike:any, index:number) => {
                hike.selectedDate = hikeDates[index]
            })
            setWishlist(data)
        }
    }, [hikeIds, hikeDates])

    useEffect(() => {
        console.log(wishlist);
    }, [wishlist])

    const removeHike = (id:any) => {
        setLoading(true)
        axios.post(`/api/delete/`, {id})
        .then(res => {
            setHikeIds(res.data.hikeIds)
            setHikeDates(res.data.hikeDates)
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const  redirectToUpcoming = () => {
        router.push('/pages/upcoming')
    }

    const redirectToCheckout = () => {
        router.push('/pages/checkout')
    }

    return ( 
        <div className="mt-[180px] mb-10">
            <div className="flex justify-between items-center pr-[50px]">
                <h1 className="text-[60px] font-semibold ml-7 font-serif">Your Wishlist</h1>
                {
                    wishlist.length > 0 && (
                        <button onClick={redirectToCheckout} className="text-black font-semibold bg-[#ffd11a] p-[15px] rounded-[6px] hover:bg-gray-300 hover:text-black transition">
                            Proceed To Checkout {`>>`}
                        </button>
                    )
                }
            </div>
            <div className="w-[98vw] px-7">
                <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
            </div>
            {
                loading ? (
                    <div className="flex justify-center items-center h-[500px]">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) :
                wishlist.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-[100px] mt-[50px]">
                        {
                            wishlist.map((hike:any) => (
                                <div key={hike.id} className="flex justify-center">
                                    <div className="flex flex-col items-center justify-center w-[300px] pb-[30px] bg-white rounded-[10px] shadow-lg">
                                        <div className="relative w-[300px] rounded-t-[10px]">
                                            <Image alt="hike" src={hike.image} height={0} width={0} layout="responsive" className="rounded-t-[10px]"/>
                                            {/* add a delete button */}
                                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[15px] font-semibold rounded-bl-[10px] px-[5px] py-[2px] cursor-pointer hover:bg-red-600 transition-all duration-100" onClick={() => removeHike(hike.id)}>
                                                Remove
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-[300px]">
                                            <div className="text-[25px] mt-[20px] font-semibold">{hike.name}</div>
                                            <div className="text-[15px] font-semibold">{hike.location}</div>
                                            <div className="text-[15px] font-semibold">Rs {hike.price} /-</div>
                                            <div className="text-[15px] font-semibold text-green-500 mt-[10px]">{hike.selectedDate}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center mt-[50px]">
                        <div className="text-[25px] font-semibold">Your wishlist is empty</div>
                        <div className="text-[15px] font-semibold text-gray-500 mt-[10px]">Add some treks to your wishlist</div>
                        <div className="mt-[10px]">
                            <button onClick={redirectToUpcoming} className="text-black font-semibold bg-[#ffd11a] p-[10px] rounded-[6px] hover:bg-gray-300 hover:text-black transition">
                                Go To Treks
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
     );
}
 
export default Wishlist;