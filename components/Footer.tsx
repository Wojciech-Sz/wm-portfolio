import Image from "next/image";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { Mail } from "lucide-react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-10 pt-20">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={400}
          className="size-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I
          can help you achieve your goals.
        </p>
        <a href="mailto:wsz.socials.contact@gmail.com ">
          <MagicButton
            title="Let's get in touch"
            icon={<Mail className="size-4" />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-2 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          © {new Date().getFullYear()} Wojciech
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 backdrop-blur-lg"
            >
              <Image
                src={img}
                alt={img}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
