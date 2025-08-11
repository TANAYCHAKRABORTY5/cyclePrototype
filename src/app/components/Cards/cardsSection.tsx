"use client";

import CardHoverExample from "./cards";

export default function CardSection() {
  return (
    <section className="relative flex flex-col items-center text-center ">
      <h1 className="text-[36px] md:text-[36px] font-bold max-w-3xl leading-tight tracking-tight  text-gray-900 mb-10">
        Meet your product agents – built to bring the voice-of-customer into
        every release.
      </h1>

      <CardHoverExample />
      <div className=" flex items-center justify-center gap-4 mt-16">
        <button className="bg-white  text-gray-900 px-4 py-2 rounded-lg text-[15px] border-[1.2px] border-gray-200 hover:bg-gray-50 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
          Watch video
        </button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-[15px]">
          Book a demo
        </button>
      </div>
    </section>
  );
}
