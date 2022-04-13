import React from "react";
import { AutoFitGrid as TechnologieGrid } from "../../../../styled-component/styledComponent";
import SectionTitleDescription from "../../../../styled-component/SectionTitleDescription";

import IconTitle from "../../../../cards/IconTitle";
import { technologies } from "../../../../../languages/en";
function Technologies() {
  return (
    <SectionTitleDescription>
      <TechnologieGrid
        className="gap-4  items-between  justify-between place-content-center "
        minCol="2"
      >
        {technologies.map((technologie) => (
          <IconTitle key={technologie.id} title={technologie.title}>
            <technologie.Icon className="lg:block hidden" />
            <technologie.Icon className="lg:hidden block" w="55" h="55" />
          </IconTitle>
        ))}
      </TechnologieGrid>
    </SectionTitleDescription>
  );
}

export default Technologies;
