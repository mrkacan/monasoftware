import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { useContactContext } from "../../../context/ContactProvider";
import { Bracket, H2 } from "../../styled-component/styledComponent";
export const H6 = styled.h6`
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;

  line-height: 140%;
  /* or 62px */

  color: #ffffff;

  @media (max-width: 600px) {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 33.6px;
    /* identical to box height, or 34px */
  }
`;

function CalltoAction() {
  const { pathname } = useRouter();
  const [open, setOpen] = useContactContext();

  return (
    <section
      className={`z-2 relative  py-2  lg:py-16 bg-darkblue ${
        pathname !== "/" && "lg:pt-40 pt-24"
      }   text-white p-4`}
    >
      <div className="container relative min-h-[200px]  ">
        <H6 className="text-lg lg:text-2xl lg:w-[845px]">
          We are a{" "}
          <span className="text-[#2BB5FE]  font-semibold">
            {" "}
            digital design agency
          </span>{" "}
          dedicated to getting your business online and in front
        </H6>
        <Bracket
          customStyles="top:-18%; right:10%;"
          className="hidden md:block"
        />
      </div>
      <div className="container relative md:min-h-[560px] pb-16 lg:pb-2  flex flex-col justify-end      ">
        <div className="    h-full">
          <H6 className="text-xl lg:text-2xl lg:w-[845px] py-4">
            It’s now time to meet you
          </H6>
          <p className="lg:text-base text-xsm font-normal">
            Let’s build a beautiful website that can evolve with your busines
          </p>
          <button
            type="button"
            className="py-2 px-4 mt-8 bg-white hover:bg-lightblue focus:ring-darkblue/hover:bg-lightblue focus:ring-offset-darkblue   text-lightblue hover:text-white md:w-[280px]  w-[180px]  lg:h-[64px] h-[48px]  transition ease-in duration-200 text-center   font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:rounded-3xl rounded-xl   text-base p-4 inline-block  lg:text-lg"
            onClick={() => {
              setOpen(true);
            }}
          >
            Say Hello
          </button>
        </div>
      </div>
    </section>
  );
}

export default CalltoAction;
