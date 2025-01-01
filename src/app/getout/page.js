"use client";
import Image from "next/image"
const page = () => {

  return (
    <main className="flex w-full bg-[#242424] h-screen px-6 py-4 md:px-8 md:py-6">
      <section className="flex flex-col w-full justify-center bg-transparent items-center z-10">
        <div className="relative w-full h-1/2">
          <Image src="./getout.svg" alt="get-out" layout="fill" />
        </div>
        <h2 className="font-bold text-4xl mt-10">GET OUT 🗣🔥</h2>
      </section>
    </main>
  );
};

export default page;
