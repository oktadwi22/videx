import { AiFillBehanceCircle } from "react-icons/ai";
import { FaDribbble, FaGithub } from "react-icons/fa";


const size = 20
export const SocialItem = [
    {
        logo: <FaDribbble size={size} className="group-hover:rotate-180 transition-transform duration-500 relative"  />,
        title: 'Telegram Bot',
        href: 'https://t.me/videxai_bot'
    },
    {
        logo: <FaGithub size={size} className="group-hover:rotate-180 transition-transform duration-500 relative" />,
        title: 'Features',
        href: '/'
    },

]