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
      <div className="w-full py-5">
        <ProjectSlideCard Content={FeatureItem} />
      </div>
      <div className="w-full ">
        <div className="w-full grid lg:grid-cols-2 justify-start items-center">
          <div className="w-full flex flex-col gap-5">
            <H1
              title="Solving content creator's needs."
              className="md:!text-5xl !text-xl  w-full font-medium !justify-start text-start"
            />
            <h1 className="text-sm text-start  text-[#64686a]">
              Videx AI is a powerful platform that offers content creators a
              range of tools designed to help them create high-quality videos
              quickly and easily. With Videx AI, content creators can
              effortlessly generate engaging videos from text, create product
              demos, marketing videos, and instructional videos with just one
              click. The platform leverages advanced machine learning algorithms
              to extract key information from the text and automatically
              generate high-quality visuals that are perfectly synced with the
              audio. Videx AI is incredibly user-friendly and requires no
              technical expertise to use, making it an ideal solution for
              content creators of all skill levels.
            </h1>
            <div>
                <ButtonArrow href='/' title="Watch tutorial videos" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
