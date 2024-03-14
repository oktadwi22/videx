import Accordian from '@/common/component/element/Accordian'
import { Faqitem } from '@/common/constant/Faq'
import React from 'react'

export default function Faq() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
    <div className="flex w-full  relative justify-center items-center">
      <div className="w-full flex gap-5 justify-center items-center">
        <div className="w-auto ">
            <Accordian Content={Faqitem} />
        </div>
      </div>
    </div>
  </div>
  )
}
