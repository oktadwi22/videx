import { AiOutlineCloudServer } from "react-icons/ai";
import { BsGpuCard } from "react-icons/bs";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";



export const ProductItem = [
    {
      title: 'Download Privago VPN',
      desc: "Download Privago VPN to enjoy its exceptional speed and performance. With Privago VPN, you can access the internet with lightning-fast speed and secure your online activities with top-grade encryption. Experience the peace of mind that comes with knowing that your private information is safe from prying eyes.",
      img: '/Aset/PP1.png',
    link: 'https://docs.flexgpu.app/product/rent-gpu',
    },
    {
      title: 'Connect to a VPN Server',
      desc: "To ensure the security of your online activities, it is advisable to connect to a Virtual Private Network (VPN) server. This will create an encrypted tunnel between your device and the VPN server, providing a secure and private connection that protects your internet traffic from prying eyes. By encrypting your data, a VPN helps to prevent unauthorized access, protect your sensitive information, and maintain your online privacy.",
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
      ),
        linkLabel: 'Launch Bot',
      img: '/Aset/PP2.png',
        link: 'https://t.me/videxai_bot',
        import { BsGpuCard } from "react-icons/bs";
    },
    {
      title: 'Keep your crypto transaction private and secure',
      desc: "In order to ensure the privacy and security of your crypto transactions, it is recommended that you choose an exchange platform that offers robust security features such as end-to-end encryption, multi-factor authentication, and cold storage of funds. By doing so, you can prevent unauthorized access to your crypto assets, and keep your transactions private and secure from potential attackers.",
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
      img: '/Aset/PP3.png',
        link : '/',
        icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
    },
   

   
  
  ];
