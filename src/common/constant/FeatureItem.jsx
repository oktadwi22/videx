


import { IoIosCloudOutline } from "react-icons/io";
import {FaPiedPiper, FaRobot } from "react-icons/fa";
import { MdMiscellaneousServices , MdAnimation,MdOutlineSecurity,MdLan  } from "react-icons/md"
import { AiOutlineRobot } from "react-icons/ai";
import { TbCloudComputing } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { MdKeyboardVoice } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";

export const FeatureItem = [
  {
    title: 'Slide 1',
    shortDesc: 'Introduction',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Unleash your creativity with Videx AI - the ultimate tool that transforms your words into a stunning video, complete with captivating voiceovers and avatars. Let your ideas come to life and inspire the world with Videx AI.</h1>
      </div>
    ),
    icon : <IoIosCloudOutline className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    title: 'Slide 2',
    shortDesc: 'Transform Your Text into a Video Using a Telegram Bot',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Unlock the power of your words and bring them to life through video. With the help of a Telegram bot, you can transform your text into a visual masterpiece. Learn how to use Videx AI bot by checking out the project document and watching the video guide.</h1>
      </div>
    ),
    icon : <AiOutlineRobot className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    title: 'Slide 3',
    shortDesc: 'VIDEX Token Launch',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Unlock the full potential of the Videx AI project with VIDEX - the native token that grants access to its powerful features. Purchase your VIDEX tokens on Uniswap and begin trading them from February 21st, 2024. Let VIDEX be the key that unlocks a new world of possibilities with Videx AI.</h1>
      </div>
    ),
    icon : <TbCloudComputing className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    title: 'Slide 4',
    shortDesc: 'Revenue Sharing',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Videx AI foundation distribute revenue from trading fees, premium subscription and service fees. Holders have to stake their VIDEX token in our staking platform to start&nbsp;earning&nbsp;VIDEX.</h1>
      </div>
    ),
    icon : <MdAnimation  className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },


];

export const FeatureMenuItem = [
  {
    icon: <FaRobot size={40} />,
    title: 'AI-Powered Scripts',
    desc: 'With Invideo’s AI-powered tools, video creation has never been easier. Say goodbye to time-consuming scriptwriting and expensive voice artists.',
  },
  {
    icon: <MdKeyboardVoice size={40} />,
    title: 'Affordable Voice Artist',
    desc: 'Our AI voiceover generator can help you create engaging and professional videos in no time.',
  },
  {
    icon: <BsFilePerson size={40} />,
    title: 'Set yourself',
    desc: 'And by publishing videos frequently, you can increase your exposure, awareness, and engagement. With Bideo’s AI, you can set yourself up for success and take your video content to the next level.',
  },
]