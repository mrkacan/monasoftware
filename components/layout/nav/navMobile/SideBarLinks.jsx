import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

import { motion, AnimateSharedLayout } from "framer-motion";
import { useContactContext } from "../../../../context/ContactProvider";

function SideBarLinks({ desktop = false, data = [] }) {
  const [open, setContactOpen] = useContactContext();

  const { pathname } = useRouter();

  return (
    <>
      {data.map((link) => (
        <Link
          href={link.slug}
          key={link.name}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <a
            className={`relative block w-full font-thin uppercase text-white   items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r ${
              pathname == link.slug
                ? "from-white to-blue-100 lg:bg-none lg:text-white font-bold text-lightblue "
                : "border-r-4 lg:border-none"
            }  border-lightblue flex items-center  pl-8 lg:pl-0`}
          >
            <span className="text-left">
              {(!desktop && link.icon && <link.icon size={24} />) ||
                (!desktop && (
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                  </svg>
                ))}
            </span>
            <span
              className={`mx-4 text-sm whitespace-nowrap flex justify-center items-center  capitalize ${
                pathname == link.slug ? " font-medium  " : "font-thin "
              }  pl-4 lg:pl-0`}
              onClick={() => {
                if (link.name.toLowerCase() == "contact") {
                  setContactOpen(true);
                }
              }}
            >
              {link.name}
            </span>
            {pathname == link.slug ? (
              <motion.div
                className="absolute   lg:block hidden w-full left-0 -bottom-[2px] h-1 bg-lightblue "
                layoutId={link.name}
                key={link.name}
              ></motion.div>
            ) : null}
          </a>
        </Link>
      ))}
      <a
        onClick={() => {
          setContactOpen(true);
        }}
        className={`relative block w-full font-thin uppercase text-white   items-center p-4 cursor-pointer  transition-colors duration-200 justify-start bg-gradient-to-r ${
          pathname == "/contact"
            ? "from-white to-blue-100 lg:bg-none lg:text-white font-bold text-lightblue "
            : "border-r-4 lg:border-none"
        }  border-lightblue flex items-center  pl-8 lg:pl-0`}
      >
        <span className="text-left">
          {!desktop && <FaMapMarkerAlt size={24} />}
        </span>
        <span
          className={`mx-4 text-sm whitespace-nowrap flex justify-center items-center  capitalize ${
            pathname == "/contact" ? " font-medium  " : "font-thin "
          }  pl-4 lg:pl-0`}
        >
          contact
        </span>
        {pathname == "/contact" ? (
          <motion.div
            className="absolute   lg:block hidden w-full left-0 -bottom-[2px] h-1 bg-lightblue "
            layoutId={"contact"}
            key={"contact"}
          ></motion.div>
        ) : null}
      </a>
    </>
  );
}

export default SideBarLinks;
