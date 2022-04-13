import React from "react";
import CardTestemonial from "../../../../cards/testemonialCard/TestemonialCard";
function DesktopTestemonials() {
  return (
    <div className="  hidden lg:flex w-full  flex-wrap   md:flex-row    mb-8 md:mb-0   items-center">
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
          id: "1",
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
    </div>
  );
}

export default DesktopTestemonials;
