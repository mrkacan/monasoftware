import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import CardTestemonial from "../../../../cards/testemonialCard/TestemonialCard";
export const TestemonialsGrid = styled(motion.section)`
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100vw;
`;

function DesktopTestemonials() {
  const constraint = useRef(null);

  return (
    <TestemonialsGrid ref={constraint}>
      <motion.div
        initial={{ y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            type: "spring",
            bounce: 0.6,
          },
        }}
        dragElastic={0.4}
        dragTransition={{ bounceDamping: 16 }}
        // dragSnapToOrigin={true}
        margin="400px"
        drag="x"
        whileDrag={{ scale: 0.98 }}
        dragConstraints={constraint}
        className=" w-[160%] hidden lg:flex opacity-0 cursor-grab active:cursor-grabbing overflow-hidden    md:flex-row     mb-8 md:mb-0   items-center"
      >
        {[
          {
            id: "0",
            name: "YOAV ZINGHER",
            specilaity: " CEO, Launchpad",
            profileImg: "/images/person1.png",
            title:
              "The team went above and beyond to help us execute on our vision",
            description:
              "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always ensured that we were 100% satisfied with the outcome",
          },
          {
            id: "10",
            name: "YOAV ZINGHER",
            specilaity: " CEO, Launchpad",
            profileImg: "/images/person1.png",
            title:
              "The team went above and beyond to help us execute on our vision",
            description:
              "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always ensured that we were 100% satisfied with the outcome",
          },
          {
            id: "02",
            name: "YOAV ZINGHER",
            specilaity: " CEO, Launchpad",
            profileImg: "/images/person1.png",
            title:
              "The team went above and beyond to help us execute on our vision",
            description:
              "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always ensured that we were 100% satisfied with the outcome",
          },
          {
            id: "41",
            name: "YOAV ZINGHER",
            specilaity: " CEO, Launchpad",
            profileImg: "/images/person1.png",
            title:
              " The team went above and beyond to help us execute on our vision",
            description:
              "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always ensured that we were 100% satisfied with the outcome",
          },
        ].map((testemonial) => (
          <CardTestemonial key={testemonial.id} {...testemonial} />
        ))}
      </motion.div>
    </TestemonialsGrid>
  );
}

export default DesktopTestemonials;
