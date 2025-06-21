"use client";

import Image from "next/image";
import LocaleLoading from "./loading";
import { useArtificialLoading } from "@/hooks/useArtificialLoading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { MapPin } from "lucide-react";
import RippleButton from "@/components/utils/Button";
import GapLayer from "@/components/utils/GapLayer";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

const Container = () => {
  const { isLoading, loadingElementRef } = useArtificialLoading();
  useGSAP(() => {
    new SplitType('.aboutText', { types: "words" })
    new SplitType('.titleText', { types: "words,chars" })
    setTimeout(() => {
      if (!isLoading) {
        const barAnimation: GSAPTweenVars = {
          height: 0,
          duration: 1,
          ease: "power4.inOut",
        };

        gsap
          .timeline()
          // hiding loading element
          .to(".loading", { opacity: 0, duration: 0.8 })
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
              }
            },
            "<20%",
          )
          .fromTo(
            ".char",
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              stagger: 0.02
            },
            "<20%",
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
              stagger: 0.03
            },
            "<20%",
          )
      }
    }, 500);
  }, [isLoading]);

  gsap.registerPlugin(ScrollTrigger);
  // gsap.fromTo()

  const AboutSection = () => {
    return (
      <section className="h-svh">
      <main className="header w-full flex justify-center p-8">
        <h1 className="relative title-page font-black antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125]">
          a
        </h1>
        <h1 className="relative title-page font-black antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125]">
          b
        </h1>
        <h1 className="relative title-page font-black antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125]">
          o
        </h1>
        <h1 className="relative title-page font-black antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125]">
          u
        </h1>
        <h1 className="relative title-page font-black antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125]">
          t
        </h1>
        <h1 className="relative title-page font-black antialiased md:subpixel-antialiased uppercase text-6xl md:text-9xl leading-[1.125]">
          .
        </h1>
      </main>
      <main className="relative grid grid-cols-2 md:grid-cols-4">
        <Image
          className="hero w-full aspect-[3/1] md:aspect-[4/1] col-span-2 md:col-span-4 object-cover"
          src="/images/photography-fianity/img(1).jpg"
          alt="photo-profile"
          width={800}
          height={800}
        />
        <article className="px-0 md:px-4 mt-4 md:mt-0 col-span-2 md:col-span-4 text-center">
          <h1 className="text-3xl titleText md:text-5xl font-bold mt-2 md:mt-4 uppercase">
            Mochamad Allifian Ar&#39;Rasyid
          </h1>
          <p className="mt-2 font-medium opacity-75 flex justify-center items-center text-xs md:text-sm gap-2 titleText">
            <MapPin className="w-3 h-3 md:w-5 md:h-5 hero text-foreground inline-block" />{" "}
            Surabaya, East Java
          </p>
          <br />
          <p className="aboutText text-justify md:text-center text-sm md:text-lg mt-8 md:mt-4 ">Lulusan Rekayasa Perangkat Lunak dengan berfokus ada design dikehidupan sehari-hari maupun profesional. Saya memiliki pengalaman sebagai cash processing center dengan catatan bekerja yang baik. Saya memiliki karakteristik kemandirian, pemecah masalah, dan komunikator yang jujur.</p>
          <Link href="/contact">
          <RippleButton className="text-sm border-1 w-1/2 px-4 py-3 md:px-6 md:py-4 hero uppercase mt-4 md:mt-6 font-medium">
            Let&#39;s Talk
          </RippleButton>
          </Link>
        </article>
      </main>
    </section>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <LocaleLoading loadingElementRef={loadingElementRef} loadingState={isLoading} />
      <AboutSection />
      <GapLayer />
      <h1>Hello World!</h1>
      <GapLayer />
      <GapLayer />
      <GapLayer />
      <GapLayer />
    </div>
  );
};

export default Container;

// const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [counter, setCounter] = useState<number>(0);
//     const pathname = usePathname();

//   useEffect(() => {
//     const startLoader = () => {
//       let currentValue = 0;
//       function updateCounter() {
//         if (currentValue === 100) {
//           return;
//         }

//         currentValue += Math.floor(Math.random() * 10) + 1;

//         if (currentValue > 100) {
//           currentValue = 100;
//         }

//         setCounter(currentValue);

//         let delay = Math.floor(Math.random() * 200) + 50;
//         setTimeout(updateCounter, delay);
//       }
//       updateCounter();
//     }
//     startLoader();

//     gsap.to(".counter", {
//       duration: 0.25,
//       delay: 3.5,
//       opacity: 0,
//     });
//     gsap.to(".bar", {
//       duration: 1.5,
//       delay: 3.5,
//       height: 0,
//       stagger: {
//         amount: 0.5,
//       },
//       ease: "power4.inOut",
//     });
//     gsap.from(".title-page", {
//       duration: 1.5,
//       delay: 4,
//       y: 700,
//       stagger: {
//         amount: 0.5,
//       },
//       ease: "power4.inOut",
//     });

//     gsap.from(".hero", {
//       duration: 2,
//       delay: 4.5,
//       y: 400,
//       ease: "power4.inOut"
//     })

//   }, [pathname]);

//   useEffect(() => {
//     if (counter === 100) {
//       const timer = setTimeout(() => {
//         setIsLoading(false);
//       }, 100);

//       return () => clearTimeout(timer);
//     }
//     console.log(isLoading, counter)
//   }, [counter])
