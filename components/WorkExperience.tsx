"use client";

import React from "react";
import { Timeline } from "./ui/Timeline";
import { workExperiences } from "@/lib/metadata";

const WorkExperience = () => {
  return (
    <section id="experience">
      <Timeline data={workExperiences} />
    </section>
  );
};

export default WorkExperience;
