import H1 from "@/common/component/element/H1";
import React from "react";
import MainTitle from "./component/MainTitle";
import ButtonViewAll from "@/common/component/element/ButtonViewAll";
import ImageGlow from "@/common/component/element/ImageGlow";
import SliderTechLeader from "./component/SliderTechLeader";
import ReactPlayer from "react-player";
import VideosHero from "./component/VideosHero";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mb-20 w-full overflow-hidden">
      <div className="w-full mt-[180px] relative z-[9] flex-col items-center flex justify-center ">
        <MainTitle />
        <H1
          className="mt-5 w-full lg:!w-[80%] !justify-center !text-xs sm:!text-sm lg:!text-base text-center "
          title="Introducing the Videx AI Telegram bot, an innovative platform that lets you effortlessly transform your words into captivating videos in just a matter of minutes. With this powerful tool at your disposal, you can now bring your message to life and take your content to new heights. Whether you’re looking to inspire, educate, or entertain, the Bideo AI Telegram bot provides you with the perfect platform to create dynamic and engaging videos that resonate with your audience. So why wait? Start using the Videx AI Telegram bot today and unleash the full potential of your content ideas!"
        />
        <div className="w-full py-5 flex justify-center items-center flex-row flex-wrap gap-5">
          <ButtonViewAll
            title="Create Your Videos"
            className="!bg-[#EEEEEE] !text-[#3D3B40] transition-colors duration-200 overflow-hidden  outline outline-1 outline-[#EEEEEE]  w-auto py-2"
          />
          <ButtonViewAll
            title="Join Community"
            className="hover:!bg-[#EEEEEE] hover:!text-[#3D3B40] transition-colors duration-200 overflow-hidden !bg-transparent outline outline-1 outline-[#EEEEEE] !text-[#EEEEEE] w-auto py-2"
          />
        </div>
        <div className="w-full">
          <VideosHero/>
        </div>
        <div className="w-full gap-5 flex justify-center items-center flex-col py-10">
          <h1 className="text-sm text-[#64686a]">TRUSTED BY OVER 1500 COMPANIES ACROSS THE WORLD</h1>
          <SliderTechLeader />
        </div>
      </div>
    </div>
  );
}
