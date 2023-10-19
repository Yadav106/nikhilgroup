"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TbTrekking } from "react-icons/tb";
import { BiSolidFirstAid } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Button from "@/app/components/Button";
import toast from "react-hot-toast";
import { RxTriangleUp } from "react-icons/rx";
import { RxTriangleDown } from "react-icons/rx";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="form-checkbox text-blue-500 h-5 w-5"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="text-[15px] text-black mt-[5px]">
        I Agree with all{" "}
        <a
          href="https://drive.google.com/file/d/1d7SK2X2b0S2jlsy3NXD2D6h7m-HOntP4/view"
          target="_blank" // Open the link in a new tab
          className="text-[15px] text-blue-600 cursor-pointer hover:underline"
        >
          *Terms & Conditions*
        </a>
      </span>
    </label>
  );
};

const Checkout = () => {
  const [hikes, setHikes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookedHikes, setBookedHikes] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const discountPrice = 100;
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/hikes").then((res) => {
      console.log(res.data);
      setHikes(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(hikes);
  }, [hikes]);

  useEffect(() => {
    axios
      .get("/api/hike")
      .then((res) => {
        setIsLoading(true);
        const hikeIds = res.data.hikeIds;
        const hikeDates = res.data.hikeDates;
        let price = 0;
        const tempHikes: any = [];
        hikes.forEach((hike: any) => {
          if (hikeIds.includes(hike.id)) {
            hike.selectedDate = hikeDates[hikeIds.indexOf(hike.id)];
            tempHikes.push(hike);
            console.log(hike);
            price += hike.price;
          }
        });
        setBookedHikes(tempHikes);
        setTotalPrice(price);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hikes]);

  const removeHike = (id: any) => {
    axios
      .post(`/api/delete/`, { id })
      .then((res) => {
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  interface PaymentData {
    amount: number;
    currency: string;
    id: string;
  }

  const onShowMoreClick = (id:String) => {
    router.push(`/pages/hike/${id}`)
}

  const initPayment = (data: PaymentData): void => {
    const options = {
      key: "rzp_test_3bv5dujiSIkqCG",
      amount: data.amount,
      currency: data.currency,
      name: "HikeHaven",
      description: "Test Transaction",
      image: "", // Assuming logo is an image URL
      order_id: data.id,
      handler: async (response: any): Promise<void> => {
        try {
          const verifyUrl = "https://hikehaven-backend-akyx.onrender.com/api/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          if(data.message === 'Payment verified successfully') {
            toast.success('Payment completed successfully');
            axios
            .post(`/api/limitation`)
            .then(res => console.log(res))
            .catch(err => console.log(err)
            )
          }
          router.push('/pages/home');
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = (window as any).Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (e: Event | undefined): Promise<void> => {
    e?.preventDefault();
    try {
      const orderUrl = "https://hikehaven-backend-akyx.onrender.com/api/payfortickets";
      console.log(totalPrice);
      const finalPrice = totalPrice - discountPrice;
      const { data } = await axios.post(orderUrl, { amount: finalPrice });
      console.log(data);
      if (data.data) {
        initPayment(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[150px] p-[30px] flex">
      <Helmet>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Helmet>
      <div className="w-[70%] bg-gray-100 p-[20px] flex flex-col gap-[20px] font-serif">
        <span className="text-[35px] font-serif font-semibold">
          Cart of Adventures<hr></hr>
        </span>
        {
          isLoading && (
            <div className="flex justify-center items-center h-[500px]">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )
        }
        {/* {bookedHikes.map((hike: any) => (
          <div className="flex justify-between gap-[20px] p-[10px] bg-white shadow-xl">
            <div className="flex gap-[20px]">
              <div className="w-[200px] h-[200px]">
                <img
                  src={hike.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[10px]">
                <div className="flex flex-col">
                  <span className="text-[30px]">{hike.name}</span>
                <span className="text-[17px]">({hike.quantity} seats remaining)</span>
                  <span className="text-[17px] text-gray-700">
                    {hike.selectedDate}
                  </span>
                </div>
                <span className="text-[25px]">Rs {hike.price} /-</span>
                <Button type="button" onClick={() => onShowMoreClick(hike.id)}>
                    Show More Details
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-between pb-[20px]">
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold">Quantity</span>
                <span className="flex gap-[4px]">
                  <span className="flex flex-col gap-[1px]">
                    <RxTriangleUp className="cursor-pointer"/>
                    <RxTriangleDown className="cursor-pointer"/>
                  </span>
                  <span className="text-[18px]">1 Person</span>
                </span>
              </div>
              <div
                  className="bg-red-500 text-white text-[18px] font-semibold rounded-[10px] px-[5px] py-[2px] cursor-pointer hover:bg-red-600 transition-all duration-100"
                  onClick={() => removeHike(hike.id)}
                  >
                    X Remove
                  </div>
            </div>
          </div>
        ))} */}

        {bookedHikes.map((hike: any) => (
          <Hike
            key={hike.id}
            hike={hike}
            onShowMoreClick={onShowMoreClick}
            removeHike={removeHike}
            increasePrice={() => setTotalPrice(totalPrice + hike.price)}
            decreasePrice={() => setTotalPrice(totalPrice - hike.price)}
          />
        ))}

      </div>
      <div className="w-[30%] bg-gray-300 flex flex-col p-[20px] gap-[30px] font-serif">
        <div className="bg-white w-full p-[30px] flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-[25px] font-bold">Subtotal</span>
            <span className="text-[20px] font-bold">Rs {totalPrice} /-</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[20px]">Discount</span>
            <span className="text-[20px]">Rs {discountPrice} /-</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[20px]">Tax</span>
            <span className="text-[20px]">Rs 0.00 /-</span>
          </div>
          <hr></hr>
          <div className="flex justify-between items-center font-semibold">
            <span className="text-[25px]">Total</span>
            <span className="text-[20px]">
              Rs {totalPrice - discountPrice} /-
            </span>
          </div>
          <br></br>
          <Checkbox />
          <div className="mt-[20px] z-[1]">
            <button
              onClick={(e: any) => handlePayment(e)}
              className="flex mr-2 text-black font-bold bg-yellow-400 border-0 py-3 px-[100px] focus:outline-none hover:bg-yellow-600 rounded text-sm"
            >
              Pay {totalPrice - discountPrice}/-
            </button>
          </div>
        </div>
        <div className="bg-white w-full p-[30px] flex flex-col">
          <span className="text-[25px] font-serif font-bold">Our Promise</span>
          <hr />
          <div className="flex gap-[10px] items-center">
            <TbTrekking className="text-[100px]" />
            <span className="text-[16px]">
              <span className="font-bold">Tailored Experiences</span> : Promise
              to offer customized hiking tours to cater to various skill levels
              and interests.
            </span>
          </div>
          <div className="flex gap-[10px] items-center">
            <BiSolidFirstAid className="text-[100px]" />
            <span className="text-[16px]">
              <span className="font-bold">Safety First</span> : Guarantee the
              safety of your customers by emphasizing rigorous safety standards
              and protocols.
            </span>
          </div>
          <div className="flex gap-[10px] items-center">
            <FaHeadphones className="text-[120px]" />
            <span className="text-[16px]">
              <span className="font-bold">Exceptional Customer Support</span> :
              Pledge to provide exceptional customer support from the moment
              your clients inquire about a tour until they return home.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

type HikeProps = {
  hike: any;
  onShowMoreClick: any;
  removeHike: any;
  increasePrice: any;
  decreasePrice: any;
};

const Hike: React.FC<HikeProps> = ({ hike, onShowMoreClick, removeHike, increasePrice, decreasePrice }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    increasePrice();
  }

  const decreaseQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1);
      decreasePrice();
    }
  }

  return (
    <div className="flex justify-between gap-[20px] p-[10px] bg-white shadow-xl">
      <div className="flex gap-[20px]">
        <div className="w-[200px] h-[200px]">
          <img
            src={hike.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-[10px]">
          <div className="flex flex-col">
            <span className="text-[30px]">{hike.name}</span>
            <span className="text-[17px]">
              ({hike.quantity} seats remaining)
            </span>
            <span className="text-[17px] text-gray-700">
              {hike.selectedDate}
            </span>
          </div>
          <span className="text-[25px]">Rs {hike.price} /-</span>
          <Button type="button" onClick={() => onShowMoreClick(hike.id)}>
            Show More Details
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-between pb-[20px]">
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold">Quantity</span>
          <span className="flex gap-[4px]">
            <span className="flex flex-col gap-[1px]">
              <RxTriangleUp className="cursor-pointer" onClick={() => increaseQuantity()}/>
              <RxTriangleDown className="cursor-pointer" onClick={() => decreaseQuantity()}/>
            </span>
            <span className="text-[18px]">{quantity} People</span>
          </span>
        </div>
        <div
          className="bg-red-500 text-white text-[18px] font-semibold rounded-[10px] px-[5px] py-[2px] cursor-pointer hover:bg-red-600 transition-all duration-100"
          onClick={() => removeHike(hike.id)}
        >
          X Remove
        </div>
      </div>
    </div>
  );
};

export default Checkout;
