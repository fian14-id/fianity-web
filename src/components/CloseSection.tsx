"use client";
import { useMouseInteraction } from "@/app/hook/useMouseInteractions";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const CloseSection = ({params}: {params: string} ) => {
  const pathname = usePathname();
  const closeRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(closeRef, {
    amount: "all",
  });
  // const { locale } = use(params;
  const { mouseProps } = useMouseInteraction();
  const t = useTranslations("homeSection");

  useEffect(() => {
    const logoClass = document.getElementById('logo')
    const menuClass = document.getElementById('menu')
    if (isInView) {
      logoClass?.classList?.add('text-background')
      logoClass?.classList?.remove('text-foreground')
      menuClass?.classList?.add('border-background')
      menuClass?.classList?.add('text-background')
    } else {
      logoClass?.classList?.remove('text-background')
      logoClass?.classList?.add('text-foreground')
      menuClass?.classList?.remove('border-background')
      menuClass?.classList?.remove('text-background')
    }
  }, [isInView])

  return (
    <section className="w-full h-screen bg-foreground text-background" ref={closeRef}>
      <article className="w-full mx-auto max-w-[90rem] px-6 pt-14 md:pt-20 pb-4 md:pb-16 h-full flex flex-col justify-end md:grid grid-cols-2">
        <h1 className="text-6xl md:text-9xl text-wrap new-font uppercase">&quot;</h1>
        <main className="flex items-end justify-end h-full">
          <Link
          href={pathname === `/${params}/contact` ? `/${params}` : `/${params}/contact`}
            className="w-fit group h-fit py-4 flex gap-4 items-center text-end font-semibold"
            {...mouseProps}
          >
            <h3 className="text-5xl md:text-9xl uppercase">{pathname === `/${params}/contact` ? t('endGreetingToHome') : t('endGreeting')}</h3>
            <ArrowRight className="w-10 h-10 transition-transform translate-x-0 group-hover:translate-x-3 md:group-hover:translate-x-5" />
          </Link>
        </main>
      </article>
    </section>
  );
};

export default CloseSection;
