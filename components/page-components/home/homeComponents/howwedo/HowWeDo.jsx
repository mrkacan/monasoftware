import React from "react";
import { AutoFitGrid as HowWeDoGrid } from "../../../../styled-component/styledComponent";
import CircleTitleList from "../../../../cards/CircleTitleList";

import { howwedoit } from "../../../../../languages/en";

function HowWeDo() {
  return (
    <section className="capitalize  py-16 pb-20   lg:py-[100px] lg:pb-[80px]  bg-darkblue text-white p-4 ">
      <div className="container flex flex-col justify-center  ">
        <h2 className="text-xl lg:text-2xl pb-8 lg:pb-36 lg:font-bold">
          How we do it !
        </h2>
        <HowWeDoGrid
          className=" lg:gap-14 justify-center    lg:align-baseline"
          trashHold="700px"
        >
          {howwedoit.map((item) => (
            <CircleTitleList key={item.id} {...item} />
          ))}
        </HowWeDoGrid>
      </div>
    </section>
  );
}

export default HowWeDo;
