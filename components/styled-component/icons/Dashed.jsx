import React from "react";

function Dashed() {
  return (
    <div className="bg-red-400/0 absolute abs-center   items-center justify-center lg:top-28 md:top-36 lg:left-[121%] md:left-[100%] md:rotate-0 rotate-90 top-[100%] left-40  hidden lg:flex">
      <svg
        width="2"
        height="390"
        viewBox="0 0 2 362"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          d="M1 1V361"
          stroke="#4EB5DB"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

export default Dashed;
