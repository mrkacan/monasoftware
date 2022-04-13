import Image from "next/image";
import Link from "next/link";
import React from "react";
import useScrollPosition from "../../../../hooks/useScrollPosition";
import LogoSvg from "../../../../svgUI/LogoSvg";
import LogoSvgMona from "../../../../svgUI/LogoSvgMona";
function Logo() {
  const { inVeiw } = useScrollPosition();
  return (
    <Link href="/" passHref>
      <div>
        <a className="cursor-pointer hover:opacity-75 ">
          {inVeiw ? <LogoSvgMona /> : <LogoSvg />}
        </a>
      </div>
    </Link>
  );
}

export default Logo;
