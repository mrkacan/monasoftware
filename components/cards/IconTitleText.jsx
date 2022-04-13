import React from "react";

function IconTitleText({
  children,
  title = "Web Development",
  descr = "We design and build digital products. And we help shape the teams",
}) {
  return (
    <article>
      <div>{children}</div>
      <h3 className="lg:text-[1.25rem] text-base font-bold leading-[25px] py-3 lg:pt-9 lg:pb-6  ">
        {title}
      </h3>
      <p className="lg:text-sm text-xsm font-light opacity/50 ">{descr}</p>
    </article>
  );
}

export default IconTitleText;
