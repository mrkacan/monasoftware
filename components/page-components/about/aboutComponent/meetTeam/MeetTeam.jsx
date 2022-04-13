import React from "react";
import SectionTitleDescription from "../../../../styled-component/SectionTitleDescription";
import { team } from "../../../../../languages/en";
import Image from "next/image";
function MeetTeam() {
  return (
    <SectionTitleDescription
      title="Meet the team"
      description="Our team is jam packed with creative, smart and bubbly people. We inspire each other to improve daily, and be the best and happiest we can be."
    >
      <div className="grid md:grid-cols-4 gap-16  ">
        {team.map(({ name, specilaity, id, profileImg }) => (
          <div key={id} className="min-h-40 w-full ">
            <div className="  mb-4    rounded-3xl">
              <div className=" block ">
                <Image src={profileImg} alt={name} width="200" height={200} />
              </div>
            </div>
            <div className="pl-1 pt-3">
              <h3 className="mb-2 font-bold text-lg ">{name} </h3>
              <h4 className="mb-2 font-thin ">{specilaity}</h4>
            </div>
          </div>
        ))}
      </div>
    </SectionTitleDescription>
  );
}

export default MeetTeam;
