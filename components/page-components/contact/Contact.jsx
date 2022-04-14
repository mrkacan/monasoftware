import React, { useState } from "react";
import { useContactContext } from "../../../context/ContactProvider";
import ClientPortal from "../../../utils/ClientPortal";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Form from "./Form";
const initialLoad = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.4, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: 100 },
};
const overlay = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 1, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: 100 },
};
const item = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: 100 },
};

function Contact() {
  const [open, setOpen] = useContactContext();
  return (
    <ClientPortal selector="#portal-contact">
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.section
              layout
              variants={initialLoad}
              initial="initial"
              animate="animate"
              exit="exit"
              className=" h-screen flex items-center justify-center fixed top-0 left-0 w-full p-4 "
            >
              <motion.div
                variants={overlay}
                className="absolute -top-4 left-0 w-[120%] h-[120%] cursor-pointer bg-darkblue/50 blurry transition-all"
                onClick={() => {
                  setOpen(false);
                }}
              ></motion.div>
              <motion.div
                variants={item}
                layout
                className="  max-w-xl w-full bg-gray-100 rounded-xl relative z-[4000]"
              >
                <Form initialLoad={initialLoad} />
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </ClientPortal>
  );
}

export default Contact;
