"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import RippleButton from "./Button";
import { useMouseInteraction } from "@/app/hook/useMouseInteractions";

const Navbar = () => {
  const container = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { mouseProps } = useMouseInteraction();

  const tl = useRef<gsap.core.Timeline | null>(null);

  // Inisialisasi GSAP Timeline
  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    const tlInstance = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });

    tl.current = tlInstance;

    return () => {
      tlInstance.kill(); // Cleanup
    };
  }, []);

  // Mengatur perubahan menu
  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sticky z-30 top-0 backdrop-blur-xs border-b-1 bg-transparent border-b-foreground/10" ref={container}>
      <nav className="mx-auto max-w-[90rem] px-6 flex items-center justify-between py-4">
        <Link href="/">
          <h1 {...mouseProps} className="text-foreground font-medium uppercase relative tracking-wide text-sm md:text-lg">
            Allifian
          </h1>
        </Link>
        <RippleButton
          title="open menu"
          className="px-2 py-0.5 md:px-3 md:py-1 border-1 text-xs md:text-sm"
          onClick={toggleMenu}
        >
          Menu
        </RippleButton>
      </nav>
      <section className="menu-overlay flex flex-col justify-between py-4 fixed left-0 top-0 w-full min-h-dvh bg-accent z-30 text-background">
        <div className="menu-overlay-bar flex w-full justify-between mx-auto max-w-[90rem] px-6 items-center">
          <div className="menu-logo">
            <Link href="/">
              <h1 {...mouseProps}  onClick={toggleMenu} className="text-background relative font-medium uppercase tracking-wide text-sm md:text-lg">
                Allifian
              </h1>
            </Link>
          </div>
          <div className="menu-close">
            <RippleButton
            title="close menu"
            className="px-2 py-0.5 border-background hover:border-foreground md:px-3 md:py-1 border-1 text-background text-xs md:text-sm"
              onClick={toggleMenu}
              borderDefault={false}
            >
              close
            </RippleButton>
          </div>
        </div>
        <main className="menu-copy flex flex-col items-end px-6 w-full mx-auto max-w-[90rem]">
          <div className="menu-link flex flex-col group items-end gap-4 md:gap-6">
              
                <ul className="menu-link-item">
                <li className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href="/work" className={`menu-link ${pathname === "/work" ? "opacity-25 cursor-not-allowed" : null} uppercase text-4xl md:text-7xl font-regular transition-all duration-300 underline-animation this-animation`} {...mouseProps}>
                    Work
                  </Link>
                </li>
              </ul>
              
              
                <ul className="menu-link-item">
                <li className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href="/services" className={`menu-link ${pathname === "/services" ? "opacity-25 cursor-not-allowed" : null} uppercase text-4xl md:text-7xl font-regular transition-all duration-300 underline-animation this-animation`} {...mouseProps}>
                    Services
                  </Link>
                </li>
              </ul>
              
              
                <ul className="menu-link-item">
                <li className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href="/blog" className={`menu-link ${pathname === "/blog" ? "opacity-25 cursor-not-allowed" : null} uppercase text-4xl md:text-7xl font-regular transition-all duration-300 underline-animation this-animation`} {...mouseProps}>
                    Blog
                  </Link>
                </li>
              </ul>
              
              
                <ul className="menu-link-item">
                <li className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href="/contact" className={`menu-link ${pathname === "/contact" ? "opacity-25 cursor-not-allowed" : null} uppercase text-4xl md:text-7xl font-regular transition-all duration-300 underline-animation this-animation`} {...mouseProps}>
                    Contact
                  </Link>
                </li>
              </ul>
              
          </div>
        </main>
        <main className="menu-info flex justify-between gap-4 md:gap-8 px-6 mx-auto w-full  max-w-[90rem]">
          <div className="menu-info-col flex flex-col md:flex-row gap-0 md:gap-6 items-start md:items-end">
            <Link target="_blank" href="https://www.linkedin.com/in/allifian/" className="flex items-center flex-wrap underline-animation this-animation" {...mouseProps}>
              <h3 className="uppercase font-medium flex items-center">Linkedin&nbsp;<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" /></h3>
            </Link>
            <Link target="_blank" href="https://github.com/fian14-id/" className="flex items-center flex-wrap underline-animation this-animation" {...mouseProps}>
              <h3 className="uppercase font-medium items-center flex">Github&nbsp;<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" /></h3>
            </Link>
            <Link target="_blank" href="https://instagram.com/alfn.arsyd_/" className="flex items-center flex-wrap underline-animation this-animation" {...mouseProps}>
              <h3 className="uppercase items-center font-medium flex">Instagram&nbsp;<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" /></h3>
            </Link>
          </div>
          <div className="menu-info-col flex flex-col justify-end md:justify-center items-end">
            <a href="mailto:dev@fianity.com" className="font-medium uppercase text-xs md:text-sm" {...mouseProps}>
              dev@fianity.com
            </a>
          </div>
        </main>
      </section>
    </header>
  );
};

export default Navbar;
