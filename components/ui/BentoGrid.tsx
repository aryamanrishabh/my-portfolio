"use client";

import { useState } from "react";
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { FiDownload } from "react-icons/fi";

import GridGlobe from "./GridGlobe";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";

import animationData from "@/lib/confetti.json";

const leftLists = ["JavaScript", "React", "NextJS"];
const rightLists = ["TypeScript", "Redux", "NodeJS"];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  img,
  title,
  spareImg,
  className,
  description,
  imgClassName,
  titleClassName,
}: {
  id: number;
  img?: string;
  spareImg?: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  const [downloaded, setDownloaded] = useState(false);

  const defaultOptions = {
    loop: downloaded,
    autoplay: downloaded,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDownload = () => {
    try {
      if (typeof window === "undefined") return;

      const pdfUrl = "/Aryaman's-Resume.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Aryaman's-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              draggable={false}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              draggable={false}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base">
            {description}
          </div>

          <div
            className={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div
                className={`absolute right-0 -bottom-5 ${
                  downloaded ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                position="left"
                handleClick={handleDownload}
                classNames="!bg-[#161A31]"
                icon={<FiDownload className="min-w-4" strokeWidth={2.5} />}
                title={downloaded ? "Resume downloaded!" : "Download Resume"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
