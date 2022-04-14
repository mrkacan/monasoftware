import React from "react";
import LogoSvgMona from "../../../svgUI/LogoSvgMona";
import CalltoAction from "./CalltoAction";

function Footer() {
    return (
        <>
            <CalltoAction/>

            <footer className="text-white body-font bg-darkblue ">
                <div
                    className="container   py-24 mx-auto flex md:items-center lg:items-start md:flex-row lg:flex-nowrap  flex-wrap flex-col   border-b-2">
                    <div
                        className="w-80 p-5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white ">
                            <div className="lg:-mt-8">
                                <LogoSvgMona/>
                            </div>
                        </a>
                        <p className="mt-2 text-sm text-lightblue ">
                            <a href="mailto:info@monasoftware.com">info@monasoftware.com</a>
                        </p>
                        <p className="mt-2 text-sm text-white ">
                            Semikler mh. 6310/1 sk. no:8 Turkey
                        </p>
                        <p className="mt-2 text-sm text-lightblue">
                            <a href="tel:+905077776163">+90 5077776163</a>
                        </p>
                    </div>
                    <div
                        className="md:grid md:justify-between w-full md:grid-cols-3 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="md:w-1/2  px-4">
                            <h2 className=" title-font font-semibold text-white  tracking-widest text-base mb-3">
                                Links
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="py-2 text-sm">
                                    <a className="text-white  hover:text-gray-300 cursor-pointer">
                                        About Us
                                    </a>
                                </li>
                                <li className="py-2 text-sm">
                                    <a className="text-white  hover:text-gray-300 cursor-pointer">
                                        Careers
                                    </a>
                                </li>
                                <li className="py-2 text-sm">
                                    <a className="text-white  hover:text-gray-300 cursor-pointer">
                                        Our Works
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div className=" md:w-1/2 ">
                            <h2 className=" title-font font-semibold text-white  tracking-widest text-base mb-3">
                                Socials
                            </h2>
                            <nav>
                <span
                    className="inline-flex w-44 sm:ml-auto sm:mt-4 mt-2 justify-center sm:justify-between">
                  <a
                      href="https://www.linkedin.com/company/monasoftware"
                      className="text-white cursor-pointer hover:opacity-40  "
                  >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                      <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                      href="https://www.linkedin.com/company/monasoftware"
                      className="ml-3 cursor-pointer hover:opacity-40 text-white "
                  >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                      <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                      href="https://www.linkedin.com/company/monasoftware"
                      className="ml-3 cursor-pointer hover:opacity-40 text-white "
                  >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                      <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a
                      href="https://www.linkedin.com/company/monasoftware"
                      className="ml-3 cursor-pointer hover:opacity-40 text-white "
                  >
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-darkblue">
                    <div
                        className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white  text-sm text-center sm:text-left">
                            © 2022 MonaSoftware Private Limited
                            <a
                                href="https://twitter.com/"
                                rel="noopener noreferrer"
                                className="text-white  ml-1"
                                target="_blank"
                            >
                                MonaSoftware
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
