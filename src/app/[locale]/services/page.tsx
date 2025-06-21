import TableTexture from "@/components/utils/TableTexture";
import PriceList from "./PriceList";
import { ArrowDown } from "lucide-react";

const Page = () => {
  return (
    <div className="relative overflow-hidden border-x-1 border-foreground/10">
      <TableTexture />
      <section className="py-20 w-full h-svh grid grid-cols-2 md:grid-cols-4 ">
        <main className="col-span-2">
          <h1 className="font-black uppercase text-6xl md:text-9xl">
            Fianity service&#39;s
          </h1>
          <p className="text-sm md:text-lg mt-7">
            Sebuah jasa yang kami tawarkan untuk membantu anda dalam membuat
            sebuah website dan aplikasi untuk kebutuhan anda. Kami juga
            menawarkan jasa lainnya.
          </p>
        </main>
        <span className="col-span-2"></span>
        <span className="col-span-2"></span>
        <main className="col-span-2">
          <button className="w-full uppercase font-medium flex justify-center gap-4 items-center px-8 py-4 text-xs md:text-sm mt-5">
            Scroll Down <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </main>
      </section>
      <PriceList />
    </div>
  );
};

export default Page;
