import React from "react";
import { testemonials } from "../../../../../languages/en";
import DesktopTestemonials from "./DesktopTestemonials";
// flex flex-col md:inline-block
import CardTestemonial from "../../../../cards/testemonialCard/TestemonialCard";
function TestemonialsCards() {
  return (
    <div className="w-full  flex flex-wrap   md:flex-row    mb-8 md:mb-0   items-center   ">
      <div className=" lg:hidden block  ">
        {testemonials.map((testemonial) => (
          <CardTestemonial key={testemonial.id} {...testemonial} />
        ))}
      </div>
      {
        // ///////////////
      }
      <DesktopTestemonials />
    </div>
  );
}

// React.createElement(CardTestmonials,{...testtemonial})==
// React.createElement(CardTesatmonials,{name:'',specialite:'',img:''})

export default TestemonialsCards;
