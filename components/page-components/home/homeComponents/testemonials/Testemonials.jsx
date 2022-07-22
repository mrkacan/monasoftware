import { H2 } from "../../../../styled-component/styledComponent";
import TestemonialsCards from "./TestemonialsCards";

function Testemonials() {
  return (
    <section className="overflow-hidden   py-12 pt-4 lg:pb-24  bg-darkblue   text-white md:p-0 p-4  ">
      <div className="container flex flex-col justify-center">
        <H2 className="text-base  font-semibold   lg:text-2xl py-6 pb-14 lg:font-semibold ">
          What Others tell about us
        </H2>
      </div>
      <div className="w-full   min-h-[270px] relative ">
        <TestemonialsCards />
      </div>
    </section>
  );
}

export default Testemonials;
