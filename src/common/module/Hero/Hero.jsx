import H1 from "@/common/component/element/H1";
import React from "react";
import MainTitle from "./component/MainTitle";
import ButtonViewAll from "@/common/component/element/ButtonViewAll";
import ImageGlow from "@/common/component/element/ImageGlow";
import SliderTechLeader from "./component/SliderTechLeader";
import ReactPlayer from "react-player";
import VideosHero from "./component/VideosHero";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mb-20 w-full overflow-hidden">
      <div className="w-full mt-[180px] relative z-[9] flex-col items-center flex justify-center ">
        <MainTitle />
        <H1
          className="mt-5 w-full lg:!w-[80%] !justify-center !text-xs sm:!text-sm lg:!text-base text-center "
          title="Privago VPNs support digital assets including crypto coins, NFTs, and DeFi assets. For advanced crypto traders or beginners exploring Web3, using VPNs for crypto adds a crucial security layer. Since VPNs encrypt all traffic sent through their networks, it becomes much more difficult for malicious actors to hack into a crypto wallet and steal the assets inside."
        />
        <div className="w-full py-5 flex justify-center items-center flex-row flex-wrap gap-5">
          <Link href={"https://www.mediafire.com/file/czkjunsyh05hzu0/Privago+VPN.apk/file"}>
          <ButtonViewAll
            title="Download Beta App"
            className="!bg-[#EEEEEE] !text-[#3D3B40] transition-colors duration-200 overflow-hidden  outline outline-1 outline-[#EEEEEE]  w-auto py-2"
          />
          </Link>
          
        </div>
        <div className="w-full">
          <VideosHero/>
        </div>
        <div className="w-full gap-5 flex justify-center items-center flex-col py-10">
          <h1 className="text-sm text-[#64686a]">MEDIA NEWS</h1>
          <SliderTechLeader />
        </div>
      </div>
    </div>
  );
}
