import React, { useEffect, useState } from "react";

function useScrollPosition(init = 400) {
  const [inVeiw, setInVeiw] = useState(true);
  useEffect(() => {
    function sroll() {
      if (window.scrollY > init) {
        setInVeiw(false);
      } else {
        setInVeiw(true);
      }
    }
    window.addEventListener("scroll", sroll);
    () => {
      window.removeEventListener("scroll", sroll);
    };
  }, [init]);

  return { inVeiw };
}

export default useScrollPosition;
