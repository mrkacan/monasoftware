import styled from "styled-components";
export const AutoFitGrid = styled.div`
  height: auto;
  align-items: baseline;
  display: grid;
  position: relative;
  grid-template-columns: ${(p) =>
    p.trashHold
      ? ` repeat(auto-fit, minmax(1fr, max-content))`
      : ` repeat(auto-fit, minmax(135px, max-content))`};

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(125px, max-content));
  }

  ${(p) =>
    p.trashHold
      ? `@media (min-width: ${p.trashHold}) and (max-width:900px) {
    grid-template-columns: repeat(2, 1fr);
  }`
      : `@media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }`}
  @media (max-width: 450px) {
    ${(p) =>
      p.trashHold
        ? ` grid-template-columns: repeat(1, 1fr);`
        : ` grid-template-columns: repeat(2, 1fr);
  `}
  }
  @media (max-width: 370px) {
    ${(p) =>
      p.minCol
        ? `   grid-template-columns: repeat(${p.minCol}, 1fr);`
        : `   grid-template-columns: repeat(1, 1fr);
   `}
  }
`;

export const Bracket = styled.span`
  background: url("/images/{}.png") no-repeat center center/cover;

  position: absolute;
  width: 230px;
  height: 324px;
  right: 15%;
  z-index: 0;
  ${(p) => p?.customStyles}

  @media (max-width: 550px) {
    width: 160px;
    height: 224px;
  }
`;
export const H2 = styled.h2`
  @media (max-width: 600px) {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 33.6px;
    /* identical to box height, or 34px */
  }
`;
