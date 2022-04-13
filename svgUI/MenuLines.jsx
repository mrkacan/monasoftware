import React from "react";

function MenuLines({ w = "24", h = "10", className = "" }) {
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="menu">
        <path
          id="line line-top"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1Z"
          fill="white"
        />
        <path
          id="line line-bottom"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55228 23.5523 10 23 10H1C0.447715 10 0 9.55228 0 9Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default MenuLines;
