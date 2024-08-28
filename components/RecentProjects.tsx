import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import { Navigation } from "lucide-react";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] "
            >
              <PinContainer title={link} href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative size-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image src="/bg.png" alt="bg" fill />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    width={464}
                    height={300}
                    className="absolute bottom-0 z-10"
                  />
                </div>
                <h2 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h2>
                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>
                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex size-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:size-10"
                        style={{
                          transform: `translateX(-${
                            5 * i * 2
                          }px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          width={75}
                          height={75}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                      Check Live Site
                    </p>
                    <Navigation
                      className="ms-3 size-4"
                      color="#cbacf9"
                      fill="#cbacf9"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
