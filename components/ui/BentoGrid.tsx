"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import React, { useState } from "react";
import GridGlob from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { Copy } from "lucide-react";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  titleClassName,
  description,
  className,
  img,
  imgClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "wsz.socials.contact@gmail.com"
    );
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden row-span-1 flex flex-col justify-between space-y-4 rounded-3xl shadow-input transition duration-200 hover:shadow-xl dark:shadow-none border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${
          id === 6 && "flex justify-center"
        } h-full`}
      >
        <div className="absolute size-full">
          {img && (
            <Image
              src={img}
              alt={img}
              width={500}
              height={500}
              className={cn(
                imgClassName,
                "object-cover object-center size-full"
              )}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={500}
              height={500}
              className={cn(
                "object-cover object-center size-full"
              )}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute inset-0 z-50 flex items-center justify-center font-bold text-white" /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10"
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>
          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 2 && <GridGlob />}
          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["Typescript", "React.js", "Next.js"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:py-4 lg:text-base lg:opacity-100"
                    >
                      {item}
                    </span>
                  )
                )}
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {["Tailwind", "GSAP", "Vercel"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:py-4 lg:text-base lg:opacity-100"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative mt-5">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={
                  copied ? "Email copied" : "Copy my email"
                }
                icon={<Copy className="size-4" />}
                position="left"
                className="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
