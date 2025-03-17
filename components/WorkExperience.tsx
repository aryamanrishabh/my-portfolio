import React from "react";
import { Timeline } from "./ui/Timeline";
import { workExperiences } from "@/lib/metadata";

const WorkExperience = () => {
  return (
    <div>
      <Timeline data={workExperiences} />
    </div>
  );
};

export default WorkExperience;
