import { useMemo } from "react";
import { FaWalkieTalkie } from "react-icons/fa6";
import { GiMountains, GiEcology } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaHiking } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi";

const useReasons = () => {
    const reasons = useMemo(() => [
        {
            id: 1,
            logo: FaWalkieTalkie,
            title: "Expert Guides",
            description: "HikeHaven is led by a team of experienced and certified trekking guides who are passionate about the outdoors. They have an in-depth knowledge of the trails, safety protocols, and the local environment, ensuring a safe and enriching experience for all."
        },
        {
            id: 2,
            logo: GiMountains,
            title: "Variety of Trails",
            description: "HikeHaven offers a wide range of trails to suit all levels of experience and fitness. Whether you are a beginner or an experienced hiker, we have something for everyone. Our trails are carefully selected to ensure that you get the best experience possible."
        },
        {
            id: 3,
            logo: MdHealthAndSafety,
            title: "Safety First",
            description: "Your safety is our top priority. HikeHaven follows strict safety standards, provides essential equipment, and conducts thorough briefings to ensure a secure trekking experience."
        },
        {
            id: 4,
            logo: GiEcology,
            title: "Environmental Stewardship",
            description: "HikeHaven is committed to responsible trekking. We adhere to Leave No Trace principles, minimizing our impact on the environment and contributing to the preservation of the natural beauty of the areas we explore."
        },
        {
            id: 5,
            logo: BiSolidBinoculars,
            title: "Quality Equipment",
            description: "We provide high-quality trekking gear and equipment to ensure your comfort and safety throughout the journey."
        },
        {
            id: 6,
            logo: FaHiking,
            title: "Community of Adventurers",
            description: "When you join HikeHaven, you become part of a vibrant community of like-minded adventurers. Share your experiences, learn from others, and build lasting connections."
        },
        {
            id: 7,
            logo: BsGlobe2,
            title: "Ease of Booking",
            description: "Our user-friendly website makes it easy to browse and book your treks. We're also available to answer any questions and provide assistance throughout the booking process."
        },
        {
            id: 8,
            logo: HiCurrencyRupee,
            title: "Affordable Pricing",
            description: "We believe that adventure should be accessible to everyone. HikeHaven offers competitive pricing without compromising on the quality of our services."
        }
    ], [])

    return reasons;
}

export default useReasons;