import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import LogoSvgMona from "../../../../svgUI/LogoSvgMona";
import SideBarLinks from "./SideBarLinks";
import ClientPortal from "../../../../utils/ClientPortal";
import { mobileNavData } from "../../../../languages/en";
function SideBar({ setIsOpen, isOpen }) {
  const sideVariant = {
    exit: { x: "-100%", opacity: 0 },
    initial: { x: "-100%", opacity: 0 },
    show: { x: "0%", opacity: 1 },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <ClientPortal>
          <motion.nav
            variants={sideVariant}
            initial="initial"
            exit="exit"
            animate="show"
            className=" bg-red block z-[20000] lg:hidden   shadow-lg fixed inset-0 w-full cursor-none"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="  inline-block  absolute top-0 right-7 rounded-lg text-white text-xl z-[20001]  p-2  "
            >
              &times;
            </button>
            <div className="  relative min-h-screen w-full overflow-auto z-[20000] h-full    bg-darkblue">
              <div className="flex items-center justify-center pt-6">
                <LogoSvgMona setIsOpen={setIsOpen} />
              </div>
              <nav className="mt-6">
                <div>
                  <SideBarLinks data={mobileNavData} />
                </div>
              </nav>
            </div>
          </motion.nav>
        </ClientPortal>
      )}
    </AnimatePresence>
  );
}

export default SideBar;
