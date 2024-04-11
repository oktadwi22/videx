"use client";

import H1 from "@/common/component/element/H1";
import React from "react";
import Link from "next/link";
import ButtonViewAll from "@/common/component/element/ButtonViewAll";
import AppSlideCard from "./AppSlideCard";

// function VideoSrc() {
//   return (
//     <div className="w-full rounded-2xl">
//       <video width="100%" height="100%" controls preload="auto" autoPlay>
//         <source src="/app/privago_app.mp4" type="video/mp4" />
//         <track
//           src="/app/privago_app.mp4"
//           kind="subtitles"
//           srcLang="en"
//           label="English"
//         />
//       </video>
//     </div>
//   );
// }

export default function AppScreen() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mb-20 w-full overflow-hidden">
      <div className="w-full flex gap-5 flex-col py-5 justify-center items-center pt-32">
        <H1
          title="Privago VPN"
          className="md:!text-5xl !text-xl lg:w-[50%] w-full font-medium !justify-center text-center"
        />

        <h1 className="text-sm text-center lg:w-[60%] text-[#64686a]">
          Privago VPN, a Virtual Private Network (VPN) service built on a
          decentralized architecture that supports digital assets such as
          cryptocurrencies, non-fungible tokens (NFTs), and decentralized
          finance (DeFi) assets. Whether you are an advanced crypto trader or a
          beginner exploring Web3, using a VPN for crypto transactions adds a
          crucial layer of security.
        </h1>
      </div>

      <div className="w-full py-5">
        <AppSlideCard />
      </div>

      <div className="w-full py-5 flex justify-center items-center flex-row flex-wrap gap-5">
          <Link
            href={
              "/PRIVAGOV2.1.1.apk"
            }
          >
            <ButtonViewAll
              title="Download Beta App"
              className="!bg-[#EEEEEE] !text-[#3D3B40] transition-colors duration-200 overflow-hidden  outline outline-1 outline-[#EEEEEE]  w-auto py-2"
            />
          </Link>
      </div>
    </div>
  );
}
