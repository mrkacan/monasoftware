import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import OpenIcon from "../../styled-component/icons/OpenInNew";
const IMAGE_HEIGHT = 200;
export const CardStyled = styled(motion.article)`
  position: relative;
  overflow: hidden;
  .img,
  .img div,
  .img span {
    display: inline-block;
    transform-origin: center;

    transition: 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  // width: ${IMAGE_HEIGHT * 1.5 * 1.79 + "px"};
  // min-width: ${IMAGE_HEIGHT * 1.5 * 1.79 + "px"};
  // max-width: ${IMAGE_HEIGHT * 1.5 * 1.79 + "px"};
  // min-height: ${IMAGE_HEIGHT * 1.5 + "px"};
  // margin-right: 24px;
  // position: relative;
  // overflow: hidden;

  //this lead to fixed size and bigger card when the max width below 600px
  // @media (max-width: 600px) {
  //   width: ${IMAGE_HEIGHT * 1.79 + "px"};
  //   min-width: ${IMAGE_HEIGHT * 1.79 + "px"};
  //   max-width: ${IMAGE_HEIGHT * 1.79 + "px"};
  //   min-height: ${IMAGE_HEIGHT + "px"};
  // }

  height: 330px;
  @media (max-width: 780px) {
    height: 290px;
  }
  @media (max-width: 600px) {
    height: 280px;
  }

  @media (max-width: 380px) {
    height: 250px;
  }

  @media (max-width: 320px) {
    height: 210px;
  }
`;

function SimpleCard({ srcImg, title, subTitle }) {
  return (
    <CardStyled
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.96, y: -5 }}
      className="w-full  rounded-xl shadow-lg  hover:shadow-lightblue/50 cursor-pointer  relative group  "
    >
      <Image
        src={srcImg}
        priority
        className="absolute top-0 left-0"
        alt={"images post " + title}
        layout={"fill"}
      />
      <InfoCard srcImg={srcImg} title={title} subTitle={subTitle} />
    </CardStyled>
  );
}

function InfoCard({ title, subTitle }) {
  return (
    <div className="translate-z-10 absolute md:bottom-8 bottom-4 md:left-8 left-4   ">
      <div className="flex items-center py-2">
        <h4 className="pr-2 md:text-lg text-base  capitalize font-semibold tracking-wide text-white group-hover:text-darkblue">
          {title}
        </h4>
        <OpenIcon />
      </div>
      <p className="pr-2 text-xsm md:sm md:leading-5 leading-4 font-light text-white lg:w-[60%] w-[70%] tracking-wide group-hover:text-darkblue group-hover:font-bold">
        {subTitle}
      </p>
    </div>
  );
}

export default SimpleCard;
