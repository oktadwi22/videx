
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
    pict: '/slide/1.png',
    shortDesc: 'Introduction',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Privago is a cutting-edge VPN (Virtual Private Network) service that is built on a decentralized architecture. Its unique approach to VPNs provides users with enhanced security and privacy by decentralizing the network and encrypting all traffic sent through it.</h1>
      </div>
    ),
    icon : <IoIosCloudOutline className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    pict: '/slide/2.png',
    shortDesc: 'How a Decentralized VPN Works',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">A decentralized Virtual Private Network (VPN) is a type of VPN technology that operates without a central authority controlling its servers. Unlike traditional VPNs, which have a single provider responsible for supplying and maintaining servers, dVPN's servers are hosted by independent users. These hosts can use dedicated server machines or install dVPN software on their personal computers, providing a distributed network of servers that can be accessed by anyone using the dVPN app.</h1>
      </div>
    ),
    icon : <AiOutlineRobot className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    pict: '/slide/3.png',
    shortDesc: 'Privago Secure Your Transaction',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Privago VPN encrypt all traffic sent through their networks, it becomes much more difficult for malicious actors to hack into a crypto wallet and steal the assets inside.</h1>
      </div>
    ),
    icon : <TbCloudComputing className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    pict: '/slide/4.png',
    shortDesc: 'Privago VPN Beta Release',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Privago VPN has just been launched in beta, offering access to four servers for trial usage. Protect your online activities and keep your cryptocurrency transactions secure and anonymous with Privago VPN. You can now download the Privago VPN app from privago.ai to experience enhanced online privacy and security.</h1>
      </div>
    ),
    icon : <MdAnimation  className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
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
    desc: 'Our AI voiceover generator can help you create engaging and professional videos in no time.',
  },
  {
    icon: <MdPrivacyTip size={40} />,
    title: '',
    desc: 'Privago VPN is a top-tier VPN service that offers excellent security and privacy features for online transactions involving Bitcoin and other cryptocurrencies.',
  },
]
