import styled from "styled-components";
import Dashed from "../styled-component/icons/Dashed";
export const GridCol = styled.article`
  display: grid;

  position: relative;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;

  @media (min-width: 700px) {
    place-content: center;
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
function CircleTitleList({ title = "Plaining", steps }) {
  return (
    <GridCol className="  lg:gap-2">
      <div className="relative bg-red-400/0 w-[150px] h-[150px] lg:mb-3">
        <Dashed />

        <p className="abs-center text-base font-semibold capitalize">{title}</p>
        <div className="  bg-white/10 border-gray-100/50 w-[160px] h-[160px] xl:w-[240px] xl:h-[240px] rounded-full abs-center" />
      </div>

      <div className=" lg:py-6 py-4 lg:pt-9 flex justify-center bg-red-400/0   ">
        <ul className=" space-y-1 pt-4 px-4 ">
          {steps.map((step) => (
            <li
              className="text-xsm font-extralight opacity-70  capitalize w-36 sm:w-auto"
              key={step.id}
            >
              {step.title}
            </li>
          ))}
        </ul>
      </div>
    </GridCol>
  );
}

export default CircleTitleList;
