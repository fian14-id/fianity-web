import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed flex justify-between text-white items-center text-xs md:text-sm top-0 z-20 px-6 py-4 md:px-8 md:py-6">
      <div className="relative w-[70px] h-[25px] md:w-[100px] md:h-[50px]">
        <Link href="/">
        <Image className="" src="./logo-page.svg" alt="logo-page" layout="fill" />
        </Link>
      </div>
      <div className="flex gap-2 md:gap-4"> 
        <button className="font-semibold brightness-50 hover:brightness-100">IN</button>
        <button className="font-semibold brightness-100">EN</button>
      </div>
      <h2 className="font-medium uppercase hover:cursor-pointer">menu</h2>
    </nav>
  );
};

export default Navbar;
