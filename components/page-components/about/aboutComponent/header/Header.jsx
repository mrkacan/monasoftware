import { motion } from "framer-motion";
import AboutIcon from "../../../../../svgUI/AboutIcon";

function Header() {
  return (
    <motion.header className=" pt-[80px] p-4  py-12  text-center bg-darkblue text-white lg:min-h-[800px] h-full shadow-lg">
      <div className="md:flex md:items-center container items-center gap-4  m-auto md:mt-24 mt-10">
        <div className="md:order-1 m-auto -mt-8 md:-mt-0">
          <AboutIcon className="  md:pt-14   w-full md:w-[338px] m-auto" />
        </div>
        <div className="text-center lg:mt-16    lg:text-left">
          <h1 className="text-xl lg:text-2xl  first-line:  lg:px-2 px-0 lg:py-6 py-10   font-semibold">
            {"We're"} a digital agency with a <br />
            taste for
            <span className="text-lightblue lg:whitespace-nowrap">
              {" "}
              outstanding products
            </span>
          </h1>
          <h2 className="text-sm font-light opacity-70 lg:px-2 lg:text-meduim  sm:max-w-[80%] max-w-[94%] m-auto lg:ml-0">
            {` We has been delivering top notch digital solutions for over a
            decade. We work with amazing companies, ranging from small startups
            to heavy weight enterprises. We know we've done our jobs when
            someones day is a bit better just by using our products.`}
          </h2>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
