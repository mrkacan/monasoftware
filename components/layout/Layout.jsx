import React from "react";
import ContactProvider from "../../context/ContactProvider";

import Contact from "../page-components/contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import { AnimatePresence, motion } from "framer-motion";

function Layout({ children, HeaderComponent }) {
  return (
    <>
      {" "}
      <ContactProvider>
        <Nav />

        <Header HeaderComponent={HeaderComponent} />

        <main>{children}</main>

        <Footer />

        <Contact />
      </ContactProvider>
    </>
  );
}

export default Layout;
