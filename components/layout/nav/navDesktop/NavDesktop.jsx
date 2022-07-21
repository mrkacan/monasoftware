import SideBarLinks from "../navMobile/SideBarLinks";
import Logo from "./Logo";

import { desktopNavData } from "../../../../languages/en";
function NavDesktop() {
  return (
    <article className=" relative z-50 hidden lg:flex lg:justify-between lg:items-center">
      <Logo />

      <ul className="hidden  lg:flex lg:justify-between lg:items-center h-full">
        <SideBarLinks desktop={true} data={desktopNavData} />
      </ul>
    </article>
  );
}

export default NavDesktop;
