"use client";
import { ArrowUpRight, Sparkle } from "lucide-react";
import RippleButton from "./utils/Button";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations('aboutSection');

  return (
    <section className="w-full h-svh relative overflow-hidden py-20">
      <article className="w-full grid grid-cols-1 md:grid-cols-4">
        <aside className="font-medium uppercase text-xs flex items-start gap-2">
          <Sparkle className="w-4 h-4" /> {t('title')}
        </aside>
        <main className="col-span-3">
          {t('description')?.length > 0 ? t('description').split('\n').map((paragraph, index) => (
            <p key={index} className={`uppercase font-light text-xl md:text-3xl ${index > 1 ? "mt-5" : ""}`}>
            {paragraph}
            </p>
          )) : null}
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
            {t('button')} <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
        </main>
      </article>
    </section>
  );
};

export default AboutMe;
