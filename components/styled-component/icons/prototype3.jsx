import React from "react";

function Prototype3({ w = "122", h = "101", className = "" }) {
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 111 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.9915 92.8449C83.6805 85.0622 88.0002 74.5065 88.0002 63.5C88.0002 52.4935 83.6805 41.9378 75.9915 34.1551M75.9915 34.1551C68.3025 26.3723 57.874 22 47.0002 22C36.1263 22 25.6978 26.3723 18.0088 34.1551M75.9915 34.1551L58.5 107.5L5 54L40.4958 44.0775L75.9915 34.1551Z"
        stroke="#2273BA"
      />
      <path
        d="M42.9588 0.958759V5.04124H47.0412V0.958759H42.9588ZM110.041 68.0412V63.9588H105.959V68.0412H110.041ZM44.6464 3.35355L107.646 66.3536L108.354 65.6464L45.3536 2.64645L44.6464 3.35355Z"
        fill="#4EB5DB"
      />
      <rect
        x="75.6572"
        y="29"
        width="8"
        height="8"
        transform="rotate(45 75.6572 29)"
        stroke="#2273BA"
      />
      <circle cx="58" cy="78" r="30" stroke="#4EB5DB" />
      <rect x="1" y="67" width="41" height="41" stroke="#2273BA" />
    </svg>
  );
}

export default Prototype3;
