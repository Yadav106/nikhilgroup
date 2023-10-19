import Image from "next/image";
import BottomForum from "../home/components/BottomForum";

const About = () => {
    return ( 
        <div>
        <div className="mt-[150px] bg-white flex flex-col items-center font-serif">
            <Image alt="about" src="/images/logo.png" height={150} width={150} className="my-[10px]"/>
            <div className="text-[30px] font-semibold">About Us</div>
            <div className="text-[15px] font-semibold text-gray-600 text-center w-[900px] mt-[10px] pb-[30px]">
                Welcome to HikeHaven, your ultimate destination for adventure and exploration! At HikeHaven, we're passionate about connecting outdoor enthusiasts with the beauty of nature and the thrill of hiking.
                <br /><br />
                <strong className="text-[20px] text-black">Our Mission</strong><br />
                Our mission is simple: to inspire and empower people to embark on unforgettable hiking journeys. We believe that the great outdoors has something magical to offer everyone, whether you're an experienced hiker or just starting out. HikeHaven is here to make your hiking dreams a reality.
                <br /><br />
                <strong className="text-[20px] text-black">Discover the Perfect Hike</strong><br />
                With a vast and ever-growing database of hiking trails from around the world, HikeHaven is your go-to resource for finding the perfect adventure. Whether you're seeking a challenging mountain trek, a serene nature walk, or a family-friendly outing, we've got a hike for you. Our expertly curated selection ensures that there's something for every hiker, no matter your skill level or location.
                <br /><br />
                <strong className="text-[20px] text-black">Personalized Recommendations</strong><br />
                We understand that every hiker is unique, and that's why we offer personalized hike recommendations tailored to your preferences. Our intelligent recommendation system takes into account your location, fitness level, and hiking interests to suggest hikes that are perfect for you.
                <br /><br />
                <strong className="text-[20px] text-black">Community and Connection</strong><br />
                HikeHaven is more than just a website; it's a community of like-minded outdoor enthusiasts. Join our thriving community to connect with fellow hikers, share your experiences, and discover hidden gems. Together, we can inspire and support each other on our hiking adventures.
                <br /><br />
                <strong className="text-[20px] text-black">Your Adventure Starts Here</strong><br />
                Whether you're an experienced hiker looking for your next challenge or a beginner eager to take your first steps on the trail, HikeHaven is here to guide you every step of the way. Your adventure starts here, and we can't wait to be a part of it.
                <br /><br />
                <span className="text-[25px] text-black">Thank you for choosing HikeHaven as your hiking companion. <br/> Let's explore the world, one trail at a time!</span>
            </div>
        </div>
        <BottomForum/>
    </div>
        
     );
}
 
export default About;