import type { Metadata } from "next";
import HeroSection from "@/components/HomeSection";
import AboutMe from "@/components/AboutMe";
import TableTexture from "@/components/utils/TableTexture";
import WorkProject from "@/components/WorkProject";
import { personal as personalInformation } from "@/libs/personal-info";

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
export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  return (
    <>
    
    <div className="relative overflow-hidden border-x-1 border-foreground/10">
      <TableTexture />
      <HeroSection />
      <AboutMe />
      <WorkProject params={locale} />
    </div>
    </>
  );
}
