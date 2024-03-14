import { AiOutlineCloudServer } from "react-icons/ai";
import { BsGpuCard } from "react-icons/bs";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";



export const ProductItem = [
    {
      title: 'VIDEX Token',
      desc: "VIDEX Token is a cryptocurrency that is unique to the Videx AI project. It is built on the Ethereum blockchain and adheres to the ERC-20 standard. The token serves as the currency for the Videx AI service tiers.",
      key: (
        <div className="w-full flex flex-col gap-2">
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Ownership is renounced.
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Ownership is renounced.
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Ownership is renounced.
        </h1>
        </div>
        </div>
      )
      ,
      linkLabel: 'Read Tokenomics',
      img: '/Aset/p1.png',
      link: 'https://docs.flexgpu.app/product/rent-gpu',
      icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
    },
    {
      title: 'Videx AI Telegram Bot',
      desc: "Videx Al Telegram Bot is a tool that you can use to automate your video creation process, saving you time and effort. With this tool, you can create high-quality videos that meet your specific needs and requirements. Whether you want to create product demos, marketing videos, instructional videos, or any other type of video content, the Al video generator can help you achieve your goals with ease.",
      key: (
        <div className="w-full flex flex-col gap-2">
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Effectively control all channels
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Provide real-time support
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Empower customers to self-serve
        </h1>
        </div>
        </div>
      )
      ,
      linkLabel: 'Launch Bot',
      img: '/Aset/p2.png',
      link: 'https://t.me/videxai_bot',
      icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
    },
    {
      title: 'Staking, Revenue-Sharing, and Governance',
      desc: "Holders of VIDEX tokens are eligible for multiple revenue streams, which include:",
      key: (
        <div className="w-full flex flex-col gap-2">
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Earning 1% of all VIDEX trading volume
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Premium features subscription
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Receiving 5% referral rewards
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Participating in partner project airdrops
        </h1>
        </div>
        </div>
      )
      ,
      linkLabel: 'Start Free Trial',
      img: '/Aset/p3.png',
      link: '/',
      icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
    },
   

   
  
  ];