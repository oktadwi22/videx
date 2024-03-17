import H1 from "@/common/component/element/H1";
import React from "react";
import ProjectSlideCard from "./components/ProjectSlideCard";
import { FeatureItem } from "@/common/constant/FeatureItem";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import CustomerServicevideos from "./components/CustomerServiceVideos";
import FaqAccordian from "@/common/component/element/FaqAccordian";

export default function Project() {
  return (
    <div className="h-auto max-w-[1500px] py-10 px-5 lg:px-10  overflow-hidden flex-col flex justify-center  w-full ">
      <div className="w-full flex gap-5 flex-col py-5 justify-center items-center">
        <H1
          title="Project News"
          className="md:!text-5xl !text-xl lg:w-[50%] w-full font-medium !justify-center text-center"
        />
        <h1 className="text-sm text-center lg:w-[60%] text-[#64686a]">
          On the news page, you can see the latest news in a project in reverse
          chronological order. News communicate general topics to all team
          members.
        </h1>
      </div>
    </div>
  );
}
