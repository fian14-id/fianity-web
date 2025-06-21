import RippleButton from "@/components/utils/Button"
import Image from "next/image"
import Link from "next/link"
import React from "react";

interface LandingProps {
    title: string;
    description: string;
    url: string;
    image: string;
}

const LandingView: React.FC<LandingProps> = ({title, description, url, image}: LandingProps) => {
  return (
    <main className="w-full h-[75svh] grid grid-cols-1 md:grid-cols-4">
          <article className="col-span-2">
          <h1 className="text-3xl md:text-5xl font-black">{title}</h1>
          <p className="mt-5 text-sm">{description}</p>
          <Link href={url} target="_blank">
            <RippleButton className="py-3 px-8 mt-4 border-1 text-xs md:text-sm">See Project</RippleButton>
          </Link>
          </article>
          {/* <span className="col-span-2"></span>
          <span className="col-span-1"></span> */}
          <div className="col-span-2 flex flex-col justify-end items-center">
            <code className="bg-foreground/10 px-2 py-0.5 w-fit rounded mb-2">preview</code>
            <Image src={image} alt="barcode image" width={1600} height={900} className="w-full object-cover aspect-[16/9] object-center" loading="lazy" />
          </div>
        </main>
  )
}

export default LandingView