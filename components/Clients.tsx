import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h2 className="heading">
        Kind words from{" "}
        <span className="text-purple">
          satisfied clients
        </span>
      </h2>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, name, img, nameImg }) => (
            <div
              key={id}
              className="flex max-w-32 items-center gap-2 md:max-w-60"
            >
              <Image
                src={img}
                alt={name}
                width={50}
                height={50}
                className="w-5 md:w-10"
              />
              <Image
                src={nameImg}
                alt={name}
                width={100}
                height={50}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
