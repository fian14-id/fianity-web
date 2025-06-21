"use client";
import { ArrowDown } from "lucide-react";
import { useMouseInteraction } from "@/app/hook/useMouseInteractions";
import RippleButton from "@/components/utils/Button";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Spinner } from "./utils/Spinner";
import LocaleLoading from "@/app/[locale]/about/loading";
import { useArtificialLoading } from "@/hooks/useArtificialLoading";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const ModelViewer = dynamic(() => import("@/components/utils/ModelViewer"), {
  ssr: false, // Disable server-side rendering for Three.js components
  loading: () => (
    <div className="flex items-center justify-center h-full rounded-lg">
      <div className="text-center">
        <Spinner />
        <p className="mt-2 text-sm text-gray-500">Loading 3D viewer...</p>
      </div>
    </div>
  ),
});

const HeroSection = () => {
  const t = useTranslations("homeSection");

  const { mouseProps } = useMouseInteraction();
  const { isLoading, loadingElementRef } = useArtificialLoading();
  useGSAP(() => {
    new SplitType(".textScroll", { types: "chars" });
    new SplitType(".splitText", { types: "words" });
    setTimeout(() => {
      if (!isLoading) {
        const barAnimation: GSAPTweenVars = {
          height: 0,
          duration: 1,
          ease: "power4.inOut",
        };
        gsap.registerPlugin(ScrollTrigger);
        gsap
          .timeline()
          // hiding loading element
          .to(".loading", { opacity: 0, duration: 0.8, ease: "power2.inOut" })
          // animate bar elements
          .to(".bar-1", barAnimation, "<40%")
          .to(".bar-2", barAnimation, "<10%")
          .to(".bar-3", barAnimation, "<10%")
          .to(".bar-4", barAnimation, "<10%")
          .to(".bar-5", barAnimation, "<10%")
          .to(".bar-6", barAnimation, "<10%")
          .to(".bar-7", barAnimation, "<10%")
          .to(".bar-8", barAnimation, "<10%")
          .to(".bar-9", barAnimation, "<10%")
          .to(".bar-10", barAnimation, "<10%")
          // animate title elements
          .fromTo(
            ".title-page",
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              ease: "power2.out",
              stagger: {
                amount: 0.6,
              },
            },
            "<20%"
          )
          .fromTo(
            ".hero",
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              ease: "power2.out",
              stagger: {
                amount: 0.6,
              },
            },
            "<20%"
          )
          .fromTo(
            ".word",
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              stagger: 0.03,
            },
            "<20%"
          );
      }
    }, 500);
  }, [isLoading]);

  return (
    <section className="w-full h-svh pt-2 pb-24 md:pb-32 relative overflow-hidden">
      <LocaleLoading
        loadingElementRef={loadingElementRef}
        loadingState={isLoading}
      />

      <article
        {...mouseProps}
        className="w-full flex flex-col justify-between h-full"
      >
        {/* <h1 className="text-6xl md:text-9xl text-wrap new-font uppercase">Let Me Introduce my self</h1> */}
        <main className="header w-full flex justify-between p-8">
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            A
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            L
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            L
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            I
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            F
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            I
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            A
          </h1>
          <h1 className="relative title-page antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125] new-font">
            N
          </h1>
        </main>
        <main className="grid grid-cols-1 gap-2 md:grid-cols-2 z-1">
          <div className="uppercase font-medium text-xs w-8/12">
            <p className="splitText">{t("description")}</p>
          </div>
          <div className="z-1">
            <RippleButton className="flex gap-2 items-center border-1 px-20 py-4 text-xs md:text-sm hero">
              {t("button")} <ArrowDown className="w-4 h-4" />
            </RippleButton>
          </div>
        </main>
      </article>
      <div className="absolute top-0 left-0 w-full h-screen z-0 hero">
        <ModelViewer autoRotate={true} rotationSpeed={0.005} scale={0.15} />
      </div>
    </section>
  );
};

export default HeroSection;
