import React from "react";
import OpenInNew from "../../styled-component/icons/OpenInNew";
import styled from "styled-components";
import Image from "next/image";
export const CardStyled = styled.article`
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-15px);
  }
  transition: 0.7s cubic-bezier(0.175, 0.885, 0.32, 1);

  &:hover .img,
  &:hover .img div,
  &:hover .img span {
    transform: rotate(1deg) scale(1.05);
  }

  .img,
  .img div,
  .img span {
    display: inline-block;
    transform-origin: center;

    transition: 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

function SimpleCard({
  srcImg = "/images/random/random1.jpeg",
  title = "     Betterhalf Web site",
  subTitle = `We design and build difital products.
            And we help shapw the teams`,
}) {
  return (
    <CardStyled
      className="w-full lg:h-[340px] h-[200px] rounded-xl shadow-lg  hover:shadow-gray-500  hover:shadow-xl cursor-pointer  relative"
      // srcImg={srcImg}
    >
      <div className=" absolute top-0 left-0  w-full h-full  overflow-hidden  img">
        <Image
          src={srcImg}
          alt={"images post " + title}
          width="340"
          height="270"
          priority
        />
      </div>
      <a className="cursor-pointer hover:opacity-75 ">
        <div className="absolute md:bottom-8 bottom-4 md:left-8 left-4 ">
          <div className="flex  items-center py-2">
            <h4 className="pr-2 md:text-lg text-base  capitalize font-semibold tracking-wide text-white">
              {title}
            </h4>
            <OpenInNew />
          </div>
          <p className="pr-2 text-xsm md:sm font-light text-white lg:w-[60%] w-[90%]">
            {subTitle}
          </p>
        </div>
      </a>
    </CardStyled>
  );
}

export default SimpleCard;
