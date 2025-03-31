import type { Metadata } from "next";
import HeroSection from "@/components/HomeSection";
import AboutMe from "@/components/AboutMe";
import TableTexture from "@/components/utils/TableTexture";

export const metadata: Metadata = {
    title: "Mochamad Allifian Ar'Rasyid",
    description: "personal website from allifian as web developer.",
    keywords: "mochamad allifian arrasyid, allifian arrasyid, allifian, fianity, web developer, frontend developer",
  };
export default function Home() {
  return (
    <>
    
    <div className="relative overflow-hidden border-x-1 border-foreground/10">
      <TableTexture />
      <HeroSection />
      <AboutMe />
    </div>
    </>
  );
}
