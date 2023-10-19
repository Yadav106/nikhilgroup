'use client';

import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BsStrava } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="min-h-[15rem] bg-gray-800 flex justify-around p-[10px] font-serif">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-primary text-xl">
                        Follow Us
                    </h3>
                    <div className="flex gap-2">
                        <BsInstagram className="text-white cursor-pointer text-[22px] hover:text-[#dd2a7b] transition duration-300 first-letter:first-line:"
                        onClick={() => {
                            window.open("https://instagram.com/hikehaven.13?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D")
                        }}/>

                        <BiLogoFacebook className="text-white cursor-pointer text-[22px] hover:text-[#4267b3] transition duration-300"
                        onClick={() => {
                            window.open("https://www.facebook.com/HikeHaven13?mibextid=D4KYlr")
                        }}/>

                        <BsStrava className="text-white cursor-pointer text-[22px] hover:text-[#fc4c02] transition duration-300"
                        onClick={() => {
                            window.open("https://strava.app.link/KyRc5ELfICb")
                        }}/>

                        <FaTwitter className="text-white cursor-pointer text-[22px] hover:text-[#00acee] transition duration-300"
                        onClick={() => {
                            window.open("https://twitter.com/HikeHaven13")
                        }}/>
                    </div>
                </div>
                <div className="flex max-h-[7rem] text-white gap-[25px]">
                    <div className="flex flex-col">
                        <Link href="/pages/faq" className="hover:text-gray-400 hover:underline">FAQs</Link>
                        <Link href="/pages/aboutus" className="hover:text-gray-400 hover:underline">About Us</Link>
                        <Link href="/pages/contactus" className="hover:text-gray-400 hover:underline">Contact Us</Link>
                        <Link href="/pages/aboutus" className="hover:text-gray-400 hover:underline"
                        onClick={() => {
                            window.open("https://forms.gle/dfWvd3EtVrJq8gux7")
                        }}>Work with us</Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="hover:text-gray-400 cursor-pointer hover:underline"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/1tW8S3zyie1tRCpjIPR5_tQdGHGaUKKhc/view?usp=sharing")
                        }}>Cancellation Policy</p>
                        <p className="hover:text-gray-400 cursor-pointer hover:underline"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/1d7SK2X2b0S2jlsy3NXD2D6h7m-HOntP4/view?usp=sharing")
                        }}>Terms and Conditions</p>
                        <p className="hover:text-gray-400 cursor-pointer hover:underline"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/1CFzalJAs9FQqL7bWR5MI48txMgNKbCB4/view?usp=drive_link")
                        }}>Privacy Policy</p>
                        <p className="hover:text-gray-400 cursor-pointer hover:underline"
                            onClick={() => {
                                window.open("https://drive.google.com/file/d/1j1aHMKQgrRVMPE2liH46oPacnNfMe8v0/view?usp=drive_link")
                            }}
                        >Disclaimer</p>
                    </div>
                </div>
                <div className="text-[14px] text-gray-200"><br/><br/>
                © 2023 hikehaven.netlify.com <br />All images are copyrighted by their respective authors.
                </div>
            </div>
            <div className="flex flex-col justify-between">
            <div>
                    <h3 className="text-primary text-xl">
                        Contact Us
                    </h3>
                    <a href="mailto:hikehaven13@gmail.com" className="text-white text-sm hover:text-gray-400 cursor-pointer hover:underline">hikehaven13@gmail.com</a>
                    <p className="text-white text-sm">Mon to Sat - 9.30 AM to 7.30 PM</p>
                    <p className="text-white text-sm">Sun - 9.30 AM to 6.30 PM</p>
                    <Image alt='logo' src='/images/FooterLogo.png' height={280} width={280} className="mt-[5px] -ml-[14px]"/>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;