import { AiFillBehanceCircle } from "react-icons/ai";
import { FaDribbble, FaGithub } from "react-icons/fa";


const size = 20
export const SocialItem = [
    {
        logo: <FaDribbble size={size} className="group-hover:rotate-180 transition-transform duration-500 relative"  />,
        title: 'Legal',
        href: 'https://privago.gitbook.io/privago/legal-considerations-and-compliance'
    },
    {
        logo: <FaDribbble size={size} className="group-hover:rotate-180 transition-transform duration-500 relative"  />,
        title: 'Brand Kit',
        href: 'https://www.privago.ai/brand_kit/logo_privago_ai.zip'
    },
    {
        logo: <FaGithub size={size} className="group-hover:rotate-180 transition-transform duration-500 relative" />,
        title: 'Privacy Policy ',
        href: 'https://privago.gitbook.io/privago/privacy-policy'
    },

]