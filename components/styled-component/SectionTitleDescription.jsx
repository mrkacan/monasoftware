import React from "react";

function SectionTitleDescription({
  children,
  title = " Technologies that we work with",
  description = " We work with some of the top cutting edge technologies in the industryto shape the futuristic product with you.",
  className = "",
}) {
  return (
    <section
      className={`pt-12 lg:py-[130px] lg:pb-12 bg-darkblue text-white p-4 ${className}`}
    >
      <div className="container flex flex-col justify-center ">
        <h2 className="text-white text-lg lg:text-2xl pb-8 lg:pb-6 lg:font-semibold">
          {title}
        </h2>
        <h3 className="text-sm text-white lg:text-lg w-[90%] pb-14 lg:font-light lg:max-w-[60%]">
          {description}
        </h3>
        {children}
      </div>
    </section>
  );
}

export default SectionTitleDescription;
