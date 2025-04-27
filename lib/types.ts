import { JSX } from "react";

export type NavItem = {
  id: string;
  name: string;
  icon?: JSX.Element;
};

export type GridItem = {
  id: number;
  img: string;
  title: string;
  spareImg: string;
  className?: string;
  description?: string;
  imgClassName: string;
  titleClassName: string;
};

export type WorkExperience = { title: string; content: JSX.Element };

export type SocialMedia = { name: string; icon: JSX.Element; link: string };
