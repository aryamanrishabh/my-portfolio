import React from "react";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMedium, AiOutlineLinkedin } from "react-icons/ai";

import { GridItem, NavItem, SocialMedia, WorkExperience } from "./types";

export const navItems: NavItem[] = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    spareImg: "",
    img: "/b2.png",
    description: "",
    imgClassName: "absolute w-36 right-4 md:w-1/2",
    titleClassName: "justify-end",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] !bg-gradient-to-br from-[#6C00A2] via-[#3A005E] via-[#001152] to-[rgb(4,7,29)] bg-no-repeat",
    title: "Turning ideas into intuitive experiences",
  },
  {
    id: 2,
    img: "",
    spareImg: "",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    title: "Adaptable to when and where work happens",
  },
  {
    id: 3,
    img: "",
    spareImg: "",
    imgClassName: "",
    title: "My tech stack",
    titleClassName: "justify-center",
    description: "Better every build",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  },
  {
    id: 4,
    description: "",
    img: "/grid.svg",
    imgClassName: "",
    spareImg: "/b4.svg",
    titleClassName: "justify-start",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    title: "Crafting solutions, one line at a time.",
  },

  {
    id: 5,
    img: "/b5.svg",
    spareImg: "/grid.svg",
    description: "Inside The Lab",
    className: "md:col-span-3 md:row-span-2",
    title: "Experimenting with motion to bring UIs to life",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
  },
  {
    id: 6,
    img: "",
    spareImg: "",
    description: "",
    imgClassName: "",
    title: "Checkout my Resume!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    title: "July 2024",
    content: (
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-semibold tracking-wider md:text-3xl">
          Software Engineer
        </h2>
        <h4 className="text-purple mb-2 text-base font-medium tracking-wide md:text-xl">
          NYU College of Arts & Science
        </h4>

        <p className="text-white-200 text-sm leading-relaxed">
          At NYU, I had the opportunity to work on a student appointment booking
          platform, which deepened my understanding of full-stack development.
        </p>
      </div>
    ),
  },
  {
    title: "Dec 2021",
    content: (
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-semibold tracking-wider md:text-3xl">
          Frontend Engineer
        </h2>
        <h4 className="text-purple mb-2 text-base font-medium tracking-wide md:text-xl">
          Amaha (Mental Health Startup)
        </h4>

        <p className="text-white-200 text-sm leading-relaxed">
          At Amaha, I deepened my expertise in frontend development by working
          on performance optimization, SEO, and scalable UI architecture.
        </p>
      </div>
    ),
  },
  {
    title: "Sept 2021",
    content: (
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-semibold tracking-wider md:text-3xl">
          Frontend Engineer Intern
        </h2>
        <h4 className="text-purple mb-2 text-base font-medium tracking-wide md:text-xl">
          Amaha (Mental Health Startup)
        </h4>

        <p className="text-white-200 text-sm leading-relaxed">
          My internship at Amaha was my first exposure to building
          production-ready features, where I learned how to optimize real-time
          interactions and improve user experience.
        </p>
      </div>
    ),
  },
];

export const socialMedia: SocialMedia[] = [
  {
    name: "GitHub",
    icon: <VscGithub size="1.25rem" />,
    link: "https://github.com/aryamanrishabh",
  },
  {
    name: "LinkedIn",
    icon: <AiOutlineLinkedin size="1.25rem" />,
    link: "https://www.linkedin.com/in/aryaman-rishabh/",
  },
  {
    name: "Medium",
    icon: <AiOutlineMedium size="1.25rem" />,
    link: "https://medium.com/@aryamanrishabh",
  },
];
