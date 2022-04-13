import React from "react";
import NavMobile from "./navMobile/NavMobile";
import NavDesktop from "./navDesktop/NavDesktop";
import { useContactContext } from "../../../context/ContactProvider";
function Nav() {
  const [, setOpen] = useContactContext();
  return (
    <nav className="top-0 left-0 z-[200]  fixed  text-white   w-full overflow-hidden">
      <div className=" bg-darkblue/80 backdrop-blur-sm backdrop-filter      py-16 blurry -mt-8  absolute w-[120%] z-[200]   h-[200px]   "></div>
      <div className="max-w-6xl w-full m-auto px-4 relative  z-[200] ">
        <NavMobile />
        <NavDesktop />
      </div>
    </nav>
  );
}

export default Nav;
