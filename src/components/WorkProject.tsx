import { ArrowUpRight, Sparkle } from "lucide-react";
import RippleButton from "./utils/Button";
import Link from "next/link";

const WorkProject = () => {
  return (
    <section className="w-full h-svh relative overflow-hidden py-20">
      <article className="w-full grid grid-cols-1 md:grid-cols-4">
        <h1 className="font-medium uppercase text-xs flex shrink items-start gap-2">
          <Sparkle className="w-4 h-4" /> Portfolio
        </h1>
        <main className="col-span-3">
        <h2 className="uppercase font-medium text-sm">Barcode Realtime</h2>
          <p className="uppercase font-light text-lg md:text-xl mt-2">
          This application was designed to resolve the issue of barcodes becoming damaged or losing some of their lines, which prevents them from being scanned correctly. Barcodes play a crucial role in helping my team work more efficiently. With functional barcodes, we can input data much faster.
          </p>
          <Link href="https://barcode.fianity.com" target="_blank">
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
            Learn More <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
          </Link>
          <br />
        <h2 className="uppercase font-medium text-sm">Nexanime</h2>
          <p className="uppercase font-light text-lg md:text-xl mt-2">
          This is an anime information website similar to MyAnimeList, but built with Next.js to provide a modern and fast user experience.
          </p>
          <Link href="https://nexanime.fianity.com" target="_blank">
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
            Learn More <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
          </Link>
        </main>
      </article>
    </section>
  );
};

export default WorkProject;
