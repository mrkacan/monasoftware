import React from "react";
import {
  AutoFitGrid as WhatWeDoGrid,
  Bracket,
} from "../../../../styled-component/styledComponent";

import IconTitleText from "../../../../cards/IconTitleText";
import { whatwedo } from "../../../../../languages/en";
function WhatWeDo() {
  return (
    <section className="p-4  py-12 pb-16  lg:py-[100px]  lg:pt-24  container  ">
      <h2 className="text-xl lg:text-2xl pb-8 lg:pb-16 font-bold">
        What do we do !
      </h2>
      <WhatWeDoGrid className="gap-14 pt-3 p-3" minCol="2">
        <Bracket />
        {whatwedo.map((item) => (
          <IconTitleText
            title={item.title}
            descr={item.description}
            key={item.id}
          >
            <item.Icon className="lg:block hidden" />
            <item.Icon className="lg:hidden block" w="80" h="80" />
          </IconTitleText>
        ))}
      </WhatWeDoGrid>
    </section>
  );
}

export default WhatWeDo;
