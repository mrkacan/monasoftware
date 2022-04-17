import React from "react";
import OpenInNew from "../../styled-component/icons/OpenInNew";
import styled from "styled-components";
import Image from "next/image";

const IMAGE_HEIGHT = 200

export const CardStyled = styled.article`
  width: ${(IMAGE_HEIGHT * 1.5 * 1.79 + 'px')};
  min-width: ${(IMAGE_HEIGHT * 1.5 * 1.79 + 'px')};
  max-width: ${(IMAGE_HEIGHT * 1.5 * 1.79 + 'px')};
  min-height: ${IMAGE_HEIGHT * 1.5 + 'px'};
  margin-right: 24px;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    width: ${(IMAGE_HEIGHT * 1.79 + 'px')};
    min-width: ${(IMAGE_HEIGHT * 1.79 + 'px')};
    max-width: ${(IMAGE_HEIGHT * 1.79 + 'px')};
    min-height: ${IMAGE_HEIGHT + 'px'};
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
            className="rounded-xl shadow-lg  hover:shadow-gray-400  hover:shadow-xl cursor-pointer relative overflow-hidden "
        >
            <Image
                src={srcImg}
                className="absolute top-0 left-0"
                alt={"images post " + title}
                quality={100}
                layout={"fill"}
            />
            <a className="cursor-pointer hover:opacity-75 ">
                <div className="absolute md:bottom-8 bottom-4 md:left-8 left-4 ">
                    <div className="flex  items-center py-2">
                        <h4 className="pr-2 md:text-lg text-base  capitalize font-semibold tracking-wide text-white">
                            {title}
                        </h4>
                        <OpenInNew/>
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
