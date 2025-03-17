"use client";

import React from "react";
import { FiMail } from "react-icons/fi";

import MagicButton from "./ui/MagicButton";

import { socialMedia } from "@/lib/metadata";

const Contact = () => {
  return (
    <footer className="w-full pt-20 pb-12 md:py-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          draggable={false}
          alt="footer grid"
          src="/footer-grid.svg"
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to contribute to <span className="text-purple">your</span> next
          big project
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">
          Reach out and let&apos;s talk about how we can collaborate on your
          next project.
        </p>

        <a href="mailto:aryamanrishabh@gmail.com">
          <MagicButton
            position="right"
            title="Let's get in touch"
            icon={
              <FiMail
                size="1.125rem"
                strokeWidth={2.5}
                className="text-white"
              />
            }
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-y-4 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2025 Aryaman
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map(({ name, icon, link }) => {
            return (
              <a
                key={name}
                href={link}
                target="_blank"
                className="bg-opacity-75 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border saturate-180 backdrop-blur-lg backdrop-filter"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
