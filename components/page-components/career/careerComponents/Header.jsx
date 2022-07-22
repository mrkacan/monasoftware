import { motion } from "framer-motion";
import AboutIcon from "../../../../svgUI/AboutIcon";

function Header() {
  return (
    <motion.header className=" pt-[80px] p-4  py-12  text-center bg-darkblue text-white lg:min-h-[800px] h-full shadow-lg">
      <div className="md:flex md:items-center container items-center gap-4 md:mt-24 mt-10 m-auto">
        <div className="md:order-1 m-auto  -mt-8 md:-mt-0">
          <AboutIcon className="  md:pt-14   w-full md:w-[338px] m-auto" />
        </div>
        <div className="text-center lg:mt-16    lg:text-left">
          <h1 className="text-xl lg:text-2xl  first-line:  lg:px-2 px-0 lg:py-6 py-10   font-semibold">
            Digital solutions to help our clients take
            <span className="text-lightblue lg:whitespace-nowrap">
              {" "}
              their businesses
            </span>
          </h1>
          <h2 className="text-sm font-light opacity-70 lg:px-2 lg:text-meduim  sm:max-w-[80%] max-w-[94%] m-auto lg:ml-0">
            if you love being a part of the web, we have excellent opportunities
            for you in digital solutions to help our clients take their
            businesses to uncharted heights. Nothing can stop you from achieving
            your goals when you join Frontend Army.
          </h2>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
