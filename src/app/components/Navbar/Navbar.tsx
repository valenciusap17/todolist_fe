import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: FC = () => {
  return (
    <>
      <div className="h-[72px] w-full flex justify-between items-center border-2 px-6">
        <div>
          <GiHamburgerMenu size={25} />
        </div>
        <div className="text-3xl">Team Board</div>
        <div className="relative pr-8 flex hover:cursor-pointer">
          <div className="w-[42px] h-[42px] rounded-full bg-white z-10">
            <div className=" w-10 h-10 bg-[url('/images/Ferry.jpeg')] bg-no-repeat rounded-full bg-cover "></div>
          </div>
          <div className=" w-10 h-10 bg-[url('/images/Valen.jpg')] bg-no-repeat rounded-full bg-cover absolute translate-x-8"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
