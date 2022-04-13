import React from "react";

function Prototype4({ w = "122", h = "101", className = "" }) {
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3054 19C25.3657 7.94159 39.8722 1 55.9999 1C72.1276 1 86.634 7.94159 96.6944 19M97.5823 92C87.4976 103.638 72.6084 111 55.9999 111C39.3913 111 24.5022 103.638 14.4175 92"
        stroke="#2273BA"
      />
      <path
        d="M66 32.3254V19H111V32.3254M66 32.3254V92H111V32.3254M66 32.3254H111"
        stroke="#2273BA"
        strokeLinecap="round"
      />
      <path
        d="M1 32.3254V19H46V32.3254M1 32.3254V92H46V32.3254M1 32.3254H46"
        stroke="#2273BA"
        strokeLinecap="round"
      />
      <path d="M73 74H104M73 84H104" stroke="#4EB5DB" strokeLinecap="round" />
      <path d="M8 74H39M8 84H39" stroke="#2273BA" strokeLinecap="round" />
      <circle cx="72" cy="26" r="2" stroke="#4EB5DB" />
      <circle cx="7" cy="26" r="2" stroke="#4EB5DB" />
      <circle cx="79" cy="26" r="2" stroke="#4EB5DB" />
      <circle cx="14" cy="26" r="2" stroke="#4EB5DB" />
      <path
        d="M8 39V67M8 39H39M8 39L39 67M8 67L39 39M8 67H39M39 39V67"
        stroke="#4EB5DB"
      />
      <path
        d="M73 39V67M73 39H104M73 39L104 67M73 67L104 39M73 67H104M104 39V67"
        stroke="#2273BA"
      />
    </svg>
  );
}

export default Prototype4;
