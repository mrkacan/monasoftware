import { motion } from "framer-motion";
import HeaderIcon from "../../../../styled-component/icons/HeaderIcon";

function Header() {
  return (
    <motion.header className=" pt-[80px] p-4  py-12  text-center bg-darkblue text-white lg:min-h-[800px] h-full shadow-lg">
      <div className="md:flex md:items-center container items-center gap-4 m-auto -mt-12 md:-mt-4">
        <HeaderIcon className="  pt-14 lg:order-1  w-[290px] lg:w-[1510px] m-auto   " />

        <div className="text-center lg:mt-16    lg:text-left">
          <h1 className="text-xl lg:text-2xl   lg:px-2 lg:py-6 py-10   font-semibold">
            We make unique applications that{" "}
            <span className="text-lightblue">evolve</span> with your business
          </h1>
          <h2 className="text-sm font-light opacity-70 lg:px-2 lg:text-meduim  sm:max-w-[80%] max-w-[94%] m-auto lg:ml-0">
            We are addressing all sectors that need good quality software
            development outsourced resources, the company brings its projects to
            the best standards.
          </h2>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
