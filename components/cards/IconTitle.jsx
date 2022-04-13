import React from "react";

function IconTitle({ children, title = "HTML" }) {
  return (
    <article className="s-h-effect items-center  flex flex-col justify-center   ">
      <>{children}</>
      <h5 className="lg:text-[1.3rem]    text-[1.1rem] py-4 lg:pb-14 font-semibold  ">
        {title}
      </h5>
    </article>
  );
}

export default IconTitle;
