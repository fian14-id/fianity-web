"use client";
import { useMouseInteraction } from "@/app/hook/useMouseInteractions";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CloseSection = () => {
  const pathname = usePathname();
  const { mouseProps } = useMouseInteraction();
  
  return (
    <section className="w-full h-svh bg-foreground text-background">
      <article className="w-full mx-auto max-w-[90rem] px-6 pt-14 md:pt-20 pb-4 md:pb-16 h-full flex flex-col justify-end md:grid grid-cols-2">
        <h1 className="text-6xl md:text-9xl text-wrap new-font uppercase">"</h1>
        <main className="flex items-end justify-end h-full">
          <Link
          href={pathname === "/contact" ? "/" : "/contact"}
            className="w-fit group h-fit py-4 flex gap-4 items-center text-6xl md:text-9xl text-end uppercase font-semibold"
            {...mouseProps}
          >
            {pathname === "/contact" ? "Back to Home" : "Let's Talk to Me"}
            <ArrowRight className="w-10 h-10 transition-transform translate-x-0 group-hover:translate-x-3 md:group-hover:translate-x-5" />
          </Link>
        </main>
      </article>
    </section>
  );
};

export default CloseSection;
