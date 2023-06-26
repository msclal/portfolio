import React from "react";
import Link from "next/link";
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
      <div className="w-full rounded-[20px] flex p-10 max-md:hidden bg-opacity-50 bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="space-y-14 w-[60%]">
            <div className="space-y-5 break-before-all">
              <p className="text-4xl font-semibold select-none ">
                Hello, {"I'm"} Mika!
              </p>
              <div>
                <p className="texl-lg lg:text-xl space-x-2">
                  <span className="font-medium text-[#a888b7] mr-1">
                    Software Engineer based in Southern California.
                  </span>
                  Trying to make it out the trenches. After hours, I eat{" "}
                  {"Häagen-Dazs"} and watch the Golden State Warriors
                  self-detonate their roster.
                  <span className="font-medium text-[#a1b8da]">
                    #WhyYouTradeJordanPoole🥊
                  </span>
                </p>
              </div>
              <p className="texl-lg lg:text-xl">
                Hayley Williams from Paramore, top-5 woman ever.
              </p>
            </div>
            <div className="flex gap-x-5 text-3xl">
              <Link
                href="mailto:mikashanela.dev@gmail.com"
                className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300"
              >
                <FiMail />
              </Link>
              <Link
                href="https://github.com/msclal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300"
              >
                <AiFillGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mika-shanela/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300"
              >
                <ImLinkedin2 />
              </Link>
            </div>
          </div>
          <Image
            draggable={false}
            src={ProfileSVG}
            width={250}
            // height={280}
            className="aspect-square rounded-full mr-2"
            alt="Mika Profile Picture"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] rounded-[20px] flex flex-col p-8 px-5 justify-center items-center gap-y-5">
        <div className="flex flex-col items-center gap-y-1">
          <Image
            draggable={false}
            src={ProfilePNG}
            alt="Mika Profile Picture"
            className="max-sm:w-40 w-full"
            placeholder="blur"
          />
          <div className="text-center">
            <p className="text-xl font-medium">Mika Shanela Carodan</p>
            <p className="text-lg text-[#a888b7]">Software Engineer</p>
          </div>
          <Link href={"tel:9092145009"} className="underline">
            {"+1 (909) 214-5009"}
          </Link>
        </div>
        <div className="flex gap-x-5 text-3xl">
          <Link
            href="mailto:mikashanela.dev@gmail.com"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <FiMail />
          </Link>
          <Link
            href="https://github.com/msclal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mika-shanela/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <ImLinkedin2 />
          </Link>
        </div>
        <p className="text-center">
          Based in Southern California. Trying to make it out the trenches.
          After hours, I eat {"Häagen-Dazs"} and watch the Golden State Warriors
          self-detonate their roster. Also,{" "}
          <span className="font-medium text-[#a1b8da]">
            #HayleyWilliamsTop5
          </span>
        </p>
      </div>
    </>
  );
};

export default Hello;

{
  /* <p className="texl-lg lg:text-xl text-center">
<span className="font-medium text-[#a888b7] mr-1">
  Software Engineer based in Southern California.
</span>
Trying to make it out the trenches. After hours, I eat{" "}
{"Häagen-Dazs"} and watch the Golden State Warriors
self-detonate their roster.
</p>
</div> */
}
