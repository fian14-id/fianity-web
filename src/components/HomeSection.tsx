"use client";
import { ArrowDown } from "lucide-react";
import { useMouseInteraction } from "@/app/hook/useMouseInteractions";
import RippleButton from "@/components/utils/Button";
import ModelViewer from "./utils/ModelViewer";

const HeroSection = () => {
      const {mouseProps} = useMouseInteraction();
    return (
      <section className="w-full h-svh pt-2 pb-24 md:pb-32 relative overflow-hidden">
        <article className="w-full flex flex-col justify-between h-full">
          {/* <h1 className="text-6xl md:text-9xl text-wrap new-font uppercase">Let Me Introduce my self</h1> */}
          <h1  {...mouseProps} className="text-[20vw] md:text-[15vw] z-1 text-center new-font uppercase unselectable">Allifian</h1>
          <main className="grid grid-cols-1 gap-2 md:grid-cols-2 z-1">
            <div className="uppercase font-medium text-xs w-8/12">
              <p>Halo, Saya Allifian — Seorang web developer yang menggabungkan kreativitas dan teknologi untuk menghasilkan solusi inovatif.</p>
            </div>
            <div className="z-1">
              <RippleButton className="flex gap-2 items-center border-1 px-20 py-4 text-xs md:text-sm">Explore <ArrowDown className="w-4 h-4" /></RippleButton>
            </div>
          </main>
        </article>
        <div className="absolute top-0 left-0 w-full h-screen z-0">
          <ModelViewer />
        </div>
      </section>
    );
  };

  export default HeroSection;