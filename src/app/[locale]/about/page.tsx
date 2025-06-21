import TableTexture from "@/components/utils/TableTexture"
import Container from "./LocaleComponent"
import { personal as me } from "@/libs/personal-info";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(me.url),
    title: me.about.title,
    description: me.about.description,
    keywords: me.keyword + ", " + me.about.projects.map((project) => project.title).join(", ") + ", " + me.about.skills.map((skill) => skill.title).join(", ") + ", " + me.about.education.map((education) => education.title).join(", ") + ", " + me.about.experience.map((experience) => experience.title).join(", "),
    openGraph: {
      title: me.about.title,
      description: me.about.description,
      url: me.about.url, // Sesuaikan dengan URL
      siteName: me.about.siteName,
      images: [
        {
          url: me.about.imageUrl,
          width: 1200,
          height: 630,
          alt: me.about.siteName,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: me.about.title,
      description: me.about.description,
      images: [me.about.imageUrl],
    },
  };

const Page = () => {
    return (
        <div className="relative overflow-x-hidden border-1 border-foreground/10">
        <TableTexture />
        <Container />
        </div>
    )
}

export default Page