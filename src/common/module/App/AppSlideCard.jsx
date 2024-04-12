"use client";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "@/common/component/element/Image";

export const AppSlideItems = [
  {
    pict: "/app/4.png",
    shortDesc: "Privago X AIgentX",
    desc: (
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-sm">
        Privago VPN provides Open Connect server that operates privately, delivering seamless speeds of up to 2 megabytes per second.
        </h1>
      </div>
    ),
  },
  {
    pict: "/app/6.png",
    shortDesc: "Privago X 0xscan",
    desc: (
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-sm">
        Anonymity Exchanger offers a reliable and secure option for users who value their privacy and need to transact privately without leaving any digital footprints.
        </h1>
      </div>
    ),
  },
  {
    pict: "/app/5.png",
    shortDesc: "Introduction",
    desc: (
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-sm">
        Provigo Internet Sharing Protocol will enable users to safely share their internet connection while and earning passive income.
        </h1>
      </div>
    ),
  },
];

export default function AppSlideCard() {
  return (
    <div className="w-full flex justify-center items-center px-5 py-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="z-[99] !px-5 lg:!px-20 relative w-full  flex gap-5 max-md:flex-col md:overflow-x-scroll md:overflow-y-hidden no-scrollbar py-10"
      >
        {AppSlideItems.map((item, index) => (
          <SwiperSlide key={index} className="pb-10 lg:pb-20 overflow-hidden ">
            <ComponentTransition
              delay={index * 0.1}
              className="w-full h-auto gap-3 group flex  bg-gradient-to-b from-[#0e0e0e] from-50% to-transparent  relative group z-[9]  overflow-hidden rounded-3xl flex-col items-start justify-start text-start p-6"
            >
              <Image
                className="w-full h-auto object-cover"
                src={item.pict}
                alt="aa"
                width={400}
                height={400}
                loading="lazy"
              />

              {item.desc}
            </ComponentTransition>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
