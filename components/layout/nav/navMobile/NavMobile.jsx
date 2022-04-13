import Image from "next/image";
import SideBar from "./SideBar";
import React, { useState } from "react";
import MenuLines from "../../../../svgUI/MenuLines";

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="block lg:hidden  py-2 cursor-none ">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="  p-4   "
      >
        <MenuLines />
      </button>

      <SideBar setIsOpen={setIsOpen} isOpen={isOpen} />
    </article>
  );
}

export default NavMobile;
