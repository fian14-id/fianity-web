import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex w-full bg-[#242424] px-6 py-4 text-white md:px-8 md:py-6">
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-9xl font-bold text-center capitalize">
          how can I tell you about me?
        </h2>
        <div className="flex gap-10 md:gap-48 mt-10 md:mt-24">
          <Link href="/about" className="font-medium text-sm md:text-lg duration-100 ease-in-out opacity-30 hover:opacity-100 uppercase">
            through a story
          </Link>
          <Link href="/summary" className="font-medium text-sm md:text-lg duration-100 ease-in-out opacity-30 hover:opacity-100 uppercase">
            Summary
          </Link>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
