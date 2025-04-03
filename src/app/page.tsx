import type { Metadata } from "next";
import HeroSection from "@/components/HomeSection";
import AboutMe from "@/components/AboutMe";
import TableTexture from "@/components/utils/TableTexture";
import WorkProject from "@/components/WorkProject";

const personalInformation = {
  title: "Mochamad Allifian Ar'Rasyid",
  description: "personal website from allifian as web developer.",
  keyword: "mochamad allifian arrasyid, allifian arrasyid, allifian, fianity, web developer, frontend developer",
  url: `https://fianity.com`,
  siteName: "Allifian",
  imageUrl: "/images/maa.png",
}

export const metadata: Metadata = {
    title: personalInformation.title,
    description: personalInformation.description,
    keywords: personalInformation.keyword,
    openGraph: {
      title: personalInformation.title,
      description: personalInformation.description,
      url: personalInformation.url, // Sesuaikan dengan URL
      siteName: personalInformation.siteName,
      images: [
        {
          url: personalInformation.imageUrl,
          width: 1200,
          height: 630,
          alt: personalInformation.siteName,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: personalInformation.title,
      description: personalInformation.description,
      images: [personalInformation.imageUrl],
    },
  };
export default function Home() {
  return (
    <>
    
    <div className="relative overflow-hidden border-x-1 border-foreground/10">
      <TableTexture />
      <HeroSection />
      <AboutMe />
      <WorkProject />
    </div>
    </>
  );
}
