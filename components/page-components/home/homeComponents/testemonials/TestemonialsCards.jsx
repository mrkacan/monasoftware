import React from "react";
import { testemonials } from "../../../../../languages/en";
import DesktopTestemonials from "./DesktopTestemonials";
// flex flex-col md:inline-block
import CardTestemonial from "../../../../cards/testemonialCard/TestemonialCard";
function TestemonialsCards() {
  return (
    <div className="overflow-x-auto mb-8 md:mb-0 items-center flex flex-row">
        {testemonials.map((testemonial) => (
          <CardTestemonial key={testemonial.id} {...testemonial} />
        ))}
    </div>
  );
}

// React.createElement(CardTestmonials,{...testtemonial})==
// React.createElement(CardTesatmonials,{name:'',specialite:'',img:''})

export default TestemonialsCards;
