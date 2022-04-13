import Logo from "./Logo";
import React from "react";
import Link from "next/link";
import SideBarLinks from "../navMobile/SideBarLinks";
import { AnimateSharedLayout } from "framer-motion";
import { desktopNavData } from "../../../../languages/en";
function NavDesktop() {
  return (
    <article className=" relative z-50 hidden lg:flex lg:justify-between lg:items-center">
      <Logo />
      <AnimateSharedLayout>
        <ul className="hidden  lg:flex lg:justify-between lg:items-center h-full">
          <SideBarLinks desktop={true} data={desktopNavData} />
        </ul>
      </AnimateSharedLayout>
    </article>
  );
}

export default NavDesktop;
