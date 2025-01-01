import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full fixed flex justify-between text-white items-center text-xs md:text-sm top-0 z-20 px-6 py-4 md:px-8 md:py-6">
      <div className="relative w-[70px] h-[25px] md:w-[100px] md:h-[50px]">
      <Image className="" src="./logo-page.svg" alt="logo-page" layout="fill" />
      </div>
      <div className="flex gap-2 md:gap-4">
        <button className="font-semibold hover:cursor-not-allowed">IN</button>
        <button className="font-semibold hover:cursor-not-allowed">EN</button>
      </div>
      <h2 className="font-semibold hover:cursor-pointer">MENU</h2>
    </nav>
  );
};

export default Navbar;
