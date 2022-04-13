import React from "react";
import WhatWeDo from "./homeComponents/whatwedo/WhatWeDo";
import HowWeDo from "./homeComponents/howwedo/HowWeDo";
import Technologies from "./homeComponents/technologie/Technologies";
import Testemonials from "./homeComponents/testemonials/Testemonials";
import OurWork from "./homeComponents/ourwork/OurWork";
import { ourwork } from "../../../languages/en";

function Home() {
  return (
    <>
      <WhatWeDo />
      <HowWeDo />
      <OurWork data={ourwork} />
      <Technologies />
      <Testemonials />
    </>
  );
}

export default Home;
