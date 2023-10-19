import { useMemo } from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const useTeam = () => {
    const team = useMemo(() => [
        {
            name: "Chacha Chaudharu",
            position: "Trek Leader",
            image: "/images/team/chacha.jpg",
            quote: "It's not the mountain we conquer, but ourselves.",
            description: "A Trek Leader is the compass of adventure, guiding and inspiring groups through the wilderness. They prioritize safety, bring nature to life with knowledge, and foster camaraderie. These passionate leaders handle logistics, adapt to challenges, and champion environmental responsibility, making every trek an unforgettable experience.",
            linkedin: "https://www.linkedin.com/in/naina-sharma-938195262/",
            instagram: "https://www.instagram.com/sharma_nikhilns/",
            facebook: "https://www.facebook.com/",
            email: "mailto:jaldihatoyahase@gmail.com"
        },
        
    ], [])

    return team;
}

export default useTeam;