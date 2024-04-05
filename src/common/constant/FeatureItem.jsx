
import { IoIosCloudOutline } from "react-icons/io";
import {FaPiedPiper, FaRobot } from "react-icons/fa";
import { MdMiscellaneousServices , MdAnimation,MdOutlineSecurity,MdLan  } from "react-icons/md"
import { AiOutlineRobot } from "react-icons/ai";
import { TbCloudComputing } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { MdKeyboardVoice } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";
import { TbSquareRoundedChevronsUpFilled } from "react-icons/tb";
import { MdVpnLock } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";

export const FeatureItem = [
  {
    pict: '/product/3.png',
    shortDesc: 'Privago X AIgentX',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Super thrilled about our collaboration with 0xAigentx! They are developing an advanced bot thats even smarter than the average people to assist $PVGO community.</h1>
      </div>
    ),
    link : "https://twitter.com/0xAigentx/status/1775879465869992042?t=nULE4-pIu0D769iBp-UClQ&s=19",
    icon : <TbCloudComputing className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    pict: '/product/4.png',
    shortDesc: 'Privago X 0xscan',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">$PVGO Smart contract has undergone an audit conducted by 0xscans, a project specializing in Intelligent and Streamlined Smart Contract Auditing, which harnesses the power of AI for comprehensive assessments.</h1>
      </div>
    ),
    link : "https://twitter.com/0xscans/status/1776040090847891739?t=3Qf0BW1s8iq0g5-ZoRK9Hg&s=19",
    icon : <MdAnimation  className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    pict: '/product/1.png',
    shortDesc: 'Introduction',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Privago is a cutting-edge VPN (Virtual Private Network) service that is built on a decentralized architecture. Its unique approach to VPNs provides users with enhanced security and privacy by decentralizing the network and encrypting all traffic sent through it.</h1>
      </div>
    ),
    link : "/",
    icon : <IoIosCloudOutline className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    pict: '/product/2.png',
    shortDesc: 'How a Decentralized VPN Works',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">A decentralized Virtual Private Network (VPN) is a type of VPN technology that operates without a central authority controlling its servers. Unlike traditional VPNs, which have a single provider responsible for supplying and maintaining servers, dVPNs servers are hosted by independent users.</h1>
      </div>
    ),
    link : "/",
    icon : <AiOutlineRobot className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
];

export const FeatureMenuItem = [
  {
    icon: <TbSquareRoundedChevronsUpFilled size={40} />,
    title: 'Access Worldwide With No Restrictions.',
    desc: 'PrivagoVPN bypasses content restrictions and censorship to give you secure and immediate access to all the content you love, regardless of your location.',
  },
  {
    icon: <MdVpnLock size={40} />,
    title: 'Enjoy Unrestricted Streaming And Browsing.',
    desc: 'Get lightning-fast and reliable VPN connections for streaming video, music, social media, and more from anywhere in the world.',
  },
  {
    icon: <MdPrivacyTip size={40} />,
    title: 'Top Tier VPN For Blockchain ',
    desc: 'Privago VPN is a top-tier VPN service that offers excellent security and privacy features for online transactions involving Bitcoin and other cryptocurrencies.',
  },
]
