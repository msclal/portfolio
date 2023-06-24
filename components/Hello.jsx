import React from "react";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import ProfilePNG from "@/public/gallery/hello.png";
import ProfileSVG from "@/public/gallery/hello.svg";

const Hello = () => {
  return (
    <>
      {/* Desktop */}
      <div className="bg-gray-200 w-full rounded-[20px] flex p-10 max-md:hidden bg-opacity-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="space-y-14 w-[60%]">
            <div className="space-y-4 break-before-all">
              <p className="text-4xl font-semibold select-none ">
                Hello, {"I'm"} Mika!
              </p>
              <div>
                <p className="texl-lg lg:text-xl">
                  Software Engineer based in Southern California. Trying to make
                  it out the trenches. After hours, I eat {"Häagen-Dazs"} and
                  watch the Golden State Warriors self-detonate their roster.
                </p>
              </div>
              <p className="texl-lg lg:text-xl">
                Hayley Williams from Paramore, top 5 woman ever.
              </p>
            </div>
            <div className="flex gap-x-5 text-3xl">
              <div className="w-fit p-3 bg-white rounded-[10px]">
                <FiMail />
              </div>
              <div className="w-fit p-3 bg-white rounded-[10px]">
                <AiFillGithub />
              </div>
              <div className="w-fit p-3 bg-white rounded-[10px]">
                <ImLinkedin2 />
              </div>
            </div>
          </div>
          <Image
            draggable={false}
            src={ProfileSVG}
            alt="Mika Profile Picture"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-gray-200 w-full rounded-[20px] flex flex-col p-8 px-5 justify-center items-center gap-y-5">
        <div className="flex flex-col items-center gap-y-1">
          <Image
            draggable={false}
            src={ProfilePNG}
            alt="Mika Profile Picture"
            className="max-sm:w-40 w-full"
          />
          <p className="text-lg font-medium">Mika Shanela Carodan</p>
          <p className="underline">{"+1 (909) 214-5009"}</p>
        </div>
        <div className="flex gap-x-5 text-3xl">
          <div className="w-fit p-3 bg-gray-100 rounded-[10px]">
            <FiMail />
          </div>
          <div className="w-fit p-3 bg-gray-100 rounded-[10px]">
            <AiFillGithub />
          </div>
          <div className="w-fit p-3 bg-gray-100 rounded-[10px]">
            <ImLinkedin2 />
          </div>
        </div>
        <p className="text-center">
          Software Engineer based in Southern California. Trying to make it out
          the trenches. After hours, I eat {"Häagen-Dazs"} and watch the Golden
          State Warriors self-detonate their roster.
        </p>
      </div>
    </>
  );
};

export default Hello;
