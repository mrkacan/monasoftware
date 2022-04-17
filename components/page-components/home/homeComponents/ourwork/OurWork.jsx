import React from "react";

import SimpleCard from "../../../../cards/simpleCard/SimpleCard";

function OurWork({ data }) {
  return (
    <section className="bg-white container   py-12 pb-16 lg:py-24 p-4 lg:pb-32">
      <h2 className="text-lg lg:text-2xl pb-8 lg:pb-14  lg:font-semiblod text-darkblue ">
        Some of our Featured works
      </h2>
      <div className="flex flex-row align-center justify-start overflow-x-auto">
        {data.map((work) => (
          <SimpleCard
            key={work.id}
            title={work.title}
            subTitle={work.description}
            srcImg={work.thumbnial}
          />
        ))}
      </div>
    </section>
  );
}

export default OurWork;
