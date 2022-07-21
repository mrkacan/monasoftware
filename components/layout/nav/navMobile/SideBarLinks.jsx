import Link from "next/link";
import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";

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
            className={`relative block w-full font-thin uppercase text-white items-center p-4 duration-200 justify-start ${
              pathname == link.slug
                ? "from-white lg:bg-none lg:text-white font-bold text-lightblue"
                : ""
            }  lg:border-lightblue flex items-center  pl-8 lg:pl-0`}
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
              <div className="absolute   lg:block hidden w-full left-0 -bottom-[2px] h-1 bg-lightblue "></div>
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
            : "lg:border-none"
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
          <div className="absolute lg:block hidden w-full left-0 -bottom-[2px] h-1 bg-lightblue"></div>
        ) : null}
      </a>
    </>
  );
}

export default SideBarLinks;
