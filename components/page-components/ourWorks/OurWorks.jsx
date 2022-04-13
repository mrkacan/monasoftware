import React from "react";
import OurWork from "../home/homeComponents/ourwork/OurWork";

import { ourwork } from "../../../languages/en";
function OurWorks() {
  return (
    <>
      <OurWork data={ourwork} />
    </>
  );
}

export default OurWorks;
