"use client";
import { ArrowUpRight, Sparkle } from "lucide-react";
import RippleButton from "./utils/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import { motion} from "framer-motion";

const AboutMe = () => {
  const t = useTranslations('aboutSection');
  const aboutRef = useRef<HTMLElement | null>(null);
  // const isInView = useInView(aboutRef, {
  //   amount: "all",
  // });

  return (
    <motion.section ref={aboutRef} className="w-full h-svh relative overflow-hidden py-20">
      <article className="w-full grid grid-cols-1 md:grid-cols-4">
        <aside className="font-medium uppercase text-xs flex items-start gap-2">
          <Sparkle className="w-4 h-4" /> {t('title')}
        </aside>
        <main className="col-span-3 mt-4 md:mt-0 about-text">
          {t('businessDescription')?.length > 0 ? t('businessDescription').split('\n').map((paragraph, index) => (
            <p key={index} className={`uppercase font-light text-xl md:text-3xl ${index > 1 ? "mt-5" : ""}`}>
            {paragraph}
            </p>
          )) : null}
          <Link href="/about">
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
            {t('button')} <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
          </Link>
        </main>
      </article>
    </motion.section>
  );
};

export default AboutMe;
