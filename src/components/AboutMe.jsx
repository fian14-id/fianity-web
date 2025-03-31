import { ArrowUpRight, Sparkle } from "lucide-react";
import RippleButton from "./utils/Button";

const AboutMe = () => {
  return (
    <section className="w-full h-svh relative overflow-hidden py-20">
      <article className="w-full grid grid-cols-1 md:grid-cols-4">
        <h1 className="font-medium uppercase text-xs flex shrink items-start gap-2">
          <Sparkle className="w-4 h-4" /> About Me
        </h1>
        <main className="col-span-3">
          <p className="uppercase font-light text-xl md:text-3xl">
            Lulusan Rekayasa Perangkat Lunak dengan fokus pada{" "}
            <strong className="estetika">frontend development</strong> dan{" "}
            <strong className="estetika">graphic design</strong>.
          </p>{" "}
          <p className="uppercase font-light text-xl md:text-3xl mt-5">
            Mengintegrasikan <strong className="estetika">estetika</strong> dan{" "}
            <strong className="estetika">strategi</strong> untuk menciptakan
            branding yang berkesan dan bertahan lama.
          </p>{" "}
          <p className="uppercase font-light text-xl md:text-3xl mt-5">
            Aktif membuat blog, mendesain grafis, dan mengembangkan teknologi
            berbasis IoT.
          </p>
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
            More About Me <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
        </main>
      </article>
    </section>
  );
};

export default AboutMe;
