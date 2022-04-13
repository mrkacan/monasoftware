import React from "react";
import AboutIcon from "../../../../../svgUI/AboutIcon";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header className=" pt-[80px] p-4  py-12  text-center bg-darkblue text-white lg:min-h-[800px] h-full shadow-lg">
      <div className="md:flex md:items-center container items-center gap-4 mt-24">
        <div className="md:order-1">
          <AboutIcon className="  pt-14   w-full md:w-[338px] " />
        </div>
        <div className="text-center lg:mt-16    lg:text-left">
          <h1 className="text-xl lg:text-2xl  first-line:  lg:px-2 lg:py-6 py-10   font-semibold">
            Amazing digital products, full stop.
          </h1>
          <h2 className="text-sm font-light opacity-70 lg:px-2 lg:text-meduim  sm:max-w-[80%] max-w-[94%] m-auto lg:ml-0">
            At Mona we mix the beautiful with the usable. In our proven process
            we crystallize {"what's"} most important and help users find their
            way in an appealing User Interface or web experience.
          </h2>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
