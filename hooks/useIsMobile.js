import { useEffect, useState } from "react";
const IS_MOBILE_BREAK_POINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handelResize() {
      if (window.innerWidth < IS_MOBILE_BREAK_POINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handelResize);
    handelResize();
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return { isMobile };
}

export default useIsMobile;
