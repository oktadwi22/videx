import React from "react";
import TechImg from "./TechImg";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { Tech, TechIcon } from "@/common/constant/Tech";

export default function SliderTechLeader() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 items-center w-full overflow-hidden  py-2 px-5 ">
      {TechIcon.map((item, index) => (
        <div className="w-[150px]" key={index}>
        <Image
          className="w-full h-auto object-cover bg-gray-300 rounded-lg p-2"
          src={item.uni}
          alt="aa"
          width={400}
          height={400}
          priority
          />
      </div>
          ))}
    </div>
  );
}

