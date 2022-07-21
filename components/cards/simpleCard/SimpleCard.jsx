import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import OpenIcon from "../../styled-component/icons/OpenInNew";
const IMAGE_HEIGHT = 200;
export const CardStyled = styled(motion.article)`
  width: ${IMAGE_HEIGHT * 1.5 * 1.79 + "px"};
  min-width: ${IMAGE_HEIGHT * 1.5 * 1.79 + "px"};
  max-width: ${IMAGE_HEIGHT * 1.5 * 1.79 + "px"};
  min-height: ${IMAGE_HEIGHT * 1.5 + "px"};
  margin-right: 24px;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    width: ${IMAGE_HEIGHT * 1.79 + "px"};
    min-width: ${IMAGE_HEIGHT * 1.79 + "px"};
    max-width: ${IMAGE_HEIGHT * 1.79 + "px"};
    min-height: ${IMAGE_HEIGHT + "px"};
  }
`;

function SimpleCard({ srcImg, title, subTitle }) {
  return (
    <CardStyled
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.96, y: -5 }}
      className="rounded-xl shadow-lg  hover:shadow-gray-400  hover:shadow-xl cursor-pointer relative overflow-hidden "
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
    <div className="translate-z-10 absolute md:bottom-8 bottom-4 md:left-8 left-4 hover:opacity-75 ">
      <div className="flex items-center py-2">
        <h4 className="pr-2 md:text-lg text-base  capitalize font-semibold tracking-wide text-white">
          {title}
        </h4>
        <OpenIcon />
      </div>
      <p className="pr-2 text-xsm md:sm font-light text-white lg:w-[60%] w-[90%]">
        {subTitle}
      </p>
    </div>
  );
}

export default SimpleCard;
