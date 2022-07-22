import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
export const CardStyled = styled(motion.article)`
  min-width: 90%;
  margin-right: 24px;
  position: relative;
  overflow: hidden;
  transition: 0.7s cubic-bezier(0.175, 0.885, 0.32, 1);

  &:hover {
    transform: translateY(-12px);
  }

  &:hover::after {
    transform: scale(1.1) rotateZ(3deg);
  }

  @media (min-width: 700px) {
    min-width: 400px;
  }
`;

function CardTestemonial({
  id = "0",
  name = "YOAV ZINGHER",
  specilaity = " CEO, Launchpad",
  profileImg = "/images/person1.png",
  title = "The team went above and beyond to help us execute on our vision",
  description = "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always ensured that we were 100% satisfied with the outcome",
}) {
  return (
    <CardStyled
      whileTap={{ scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="max-w-[480px] w-full cursor-grab active:cursor-grabbing shadow-lg mx-auto lg:rounded-3xl rounded-xl p-6 lg:p-9 m-6 lg:m-4 bg-darkblue"
    >
      <h6 className=" text-white text-base font-semibold mb-3 ">{title}</h6>
      <p className=" text-white/90 text-xsm font-extralight  ">{description}</p>
      <div className="flex items-center mt-4">
        <a href="#" className="block relative">
          <Image
            alt="profil"
            src={profileImg}
            width={50}
            height={50}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
        <div className="flex flex-col ml-2 justify-between">
          <span className="text-white text-xsm font-semibold uppercase">
            {name}
          </span>
          <span className="text-white/40 text-xsm font-thin capitalize">
            {specilaity}
          </span>
        </div>
      </div>
    </CardStyled>
  );
}

export default CardTestemonial;
