"use client";

import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  classNames,
}: {
  title: string;
  position?: string;
  classNames?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative w-full cursor-pointer p-[3px] md:mt-10 md:w-60"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div
        // className={` rounded-lg
        //   bg-slate-950 backdrop-blur-3xl ${otherClasses}`}
        className={`group relative inline-flex h-full w-full items-center justify-center gap-2 rounded-[6px] bg-black px-7 py-2 text-sm font-medium text-white transition duration-200 hover:bg-transparent ${classNames}`}
      >
        {position === "left" && icon}
        <span className="whitespace-nowrap">{title}</span>
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
