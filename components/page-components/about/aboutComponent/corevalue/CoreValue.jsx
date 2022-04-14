import React from "react";
import SectionTitleDescription from "../../../../styled-component/SectionTitleDescription";
import { coreValue } from "../../../../../languages/en";
function CoreValue() {
  return (
    <SectionTitleDescription
      className="bg-white text-gray-900 min-h-[800px]"
      title="Core values"
      description="who we are and what we aim to be are both deeply ingrained on our core values Together they are the north start that helps us move in the right direction"
    >
      <div className="grid md:grid-cols-4 gap-8  ">
        {coreValue.map(({ title, description, specilaity, id }) => (
          <div className="h-40 w-full space-y-3 " key={id}>
            <h2 className="text-lightblue uppercase font-semibold text-xl">
              {specilaity}
            </h2>
            <h3 className="text-base text-black font-semibold md:text-lg">{title}</h3>
            <p className="text-gray-400 md:text-base text-sm">{description}</p>
          </div>
        ))}
      </div>
    </SectionTitleDescription>
  );
}

export default CoreValue;
