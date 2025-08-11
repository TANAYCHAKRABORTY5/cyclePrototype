"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { floating } from "./floating";
import AnimatedHeading from "./AnimatedHeading";
import Ribbion from "./Ribbion";
import VideoComponent from "./VideoSection";
import Circle from "./circles";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center ">
      <Ribbion />
      <div className="mt-[140px] z-1000">
        <AnimatedHeading />
        <div className=" flex items-center justify-center gap-4 mt-16">
          <button className="bg-white  text-gray-900 px-4 py-2 rounded-lg text-[15px] border-[1.2px] border-gray-200 hover:bg-gray-50 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
            Watch video
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-[15px]">
            Book a demo
          </button>
        </div>
      </div>

      <Circle />
      <VideoComponent
        poster="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/684bb6c01209fda7efc5ae91_pink-cap-poster-min.png"
        src1="https://asset.product.cycle.app/video/upload/v1753376429/website/pink-cap_kxct19.mp4#t=1"
        src2="https://asset.product.cycle.app/video/upload/v1753376412/website/red-cap-3_qumt3p.webm#t=1"
        topval="200px"
        rightval="140px"
        widthval="12.5vw"
        heightval="12.5vw"
      />
      <VideoComponent
        poster="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/684bb42305d94da4db545cfd_09e7c970fd10f7c999bd7537573f5820_blue-cap-poster-min.png"
        src1="https://asset.product.cycle.app/video/upload/v1753376430/website/blue-cap_hsmwau.mp4"
        src2="https://asset.product.cycle.app/video/upload/v1753376417/website/helicopter-v2_cysf6z.webm"
        topval="130px"
        leftval="140px"
        widthval="12.5vw"
        heightval="12.5vw"
      />
      <VideoComponent
        poster="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/684bb6c043b27d7ad752f1e3_orange-beanie-poster-removebg-preview.png"
        src1="https://asset.product.cycle.app/video/upload/v1753376425/website/bucket-orange_j2d6rw.mp4"
        src2="https://asset.product.cycle.app/video/upload/v1753376423/website/orange-bucket-hat-v2_bmgcuf.webm"
        bottomVal="185px"
        leftval="80px"
        widthval="9vw"
        heightval="9vw"
      />
      <VideoComponent
        poster="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/684bb6c0603d001f907c07fe_green-beanie-min.png"
        src1="https://asset.product.cycle.app/video/upload/v1753376421/website/green-hat_glhubh.mp4"
        src2="https://asset.product.cycle.app/video/upload/v1753376420/website/green-beanie-v2_sxyqvy.webm"
        topval="155px"
        rightval="30px"
        widthval="9vw"
        heightval="9vw"
      />
      {/* <VideoComponent /> */}
      <div className="mt-4 grid grid-cols-5 gap-y-0  gap-x-0 w-full max-w-[550px] mx-auto items-center justify-items-center grayscale opacity-60">
        <img className="h-8 object-contain" src="./Brex Logo.png" alt="Brex" />
        <img className="h-10 object-contain" src="./Alan Logo.png" alt="Alan" />
        <img
          className="h-14 object-contain"
          src="./Quonto Logo.png"
          alt="Qonto"
        />
        <img
          className="h-20 object-contain"
          src="./Customer Logo.png"
          alt="Customer.io"
        />
        <img
          className="h-20 object-contain"
          src="./Gorgias Logo.png"
          alt="Gorgias"
        />

        <img
          className="-mt-[30px] h-18 object-contain"
          src="./Akeneo Logo.png"
          alt="Akeneo"
        />
        <img
          className="-mt-[30px] h-[20px] object-contain"
          src="./Alma Logo.png"
          alt="Alma"
        />
        <img
          className="-mt-[30px] h-20 object-contain"
          src="./Shortcut Logo.png"
          alt="Shortcut"
        />
        <img
          className="-mt-[30px] h-14 object-contain"
          src="./Swan Logo.png"
          alt="Swan"
        />
        <img
          className="-mt-[30px] h-[20px] object-contain"
          src="./Strapi Logo.png"
          alt="Strapi"
        />
      </div>
    </section>
  );
}
