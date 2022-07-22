import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import ContactProvider from "../../context/ContactProvider";
import { useIsMobileContext } from "../../context/IsMobileProvider";
import Contact from "../page-components/contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "./nav/Nav";
function Layout({ children, HeaderComponent }) {
  const flashanimation = useAnimationControls();
  const mainAnimation = useAnimationControls();
  React.useEffect(() => {
    flashanimation.start("animate").then(() =>
      mainAnimation.start({
        opacity: 1,
        y: 0,
        blur: 0,
        transition: { duration: 0.2 },
      }),
    );
  }, [mainAnimation, flashanimation]);
  return (
    <>
      <ContactProvider>
        <Nav />

        <FlashEffect animation={flashanimation} />
        <motion.main
          initial={{ opacity: 0, y: -20, blur: "3px" }}
          animate={mainAnimation}
          className="relative bg-gray-50"
        >
          <Header HeaderComponent={HeaderComponent} />
          {children}
        </motion.main>
        <Footer />
        <Contact />
      </ContactProvider>
    </>
  );
}

function FlashEffect({ animation }) {
  const isMobile = useIsMobileContext();
  console.log(isMobile);
  const variant = {
    animate: (custom) => {
      return {
        rotate: "10deg",
        scale: 3.5,
        x: isMobile ? "200rem" : "350rem",
        skew: "-60deg",
        width: "50vw",
        transition: { duration: 1, delay: custom * 0.1 },
      };
    },
  };

  return (
    <section className="fixed overflow-hidden   top-0 left-0 right-0 bottom-0">
      {["bg-[#58CCED]", "bg-[#1261A0]", "bg-[#072F5F]"].map((color, i) => (
        <motion.div
          key={i}
          variants={variant}
          animate={animation}
          custom={i}
          className={`absolute left-[-105vw] skew-x-[-50deg]   w-[100vw] h-full  ${color}`}
        ></motion.div>
      ))}
    </section>
  );
}

export default Layout;
