import React from "react";

import SimpleCard from "../../../../cards/simpleCard/SimpleCard";

function OurWork({ data }) {
  return (
    <section className="bg-white container   py-12 pb-16 lg:py-24 p-4 lg:pb-32">
      <h2 className="text-lg lg:text-2xl pb-8 lg:pb-14  lg:font-semiblod text-darkblue ">
        Some of our Featured works
      </h2>
      <div className="grid md:grid-cols-2  grid-cols-1 align-center justify-center lg:gap-8 gap-5 lg:gap-y-10 gap-y-5 lg:px-2">
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
