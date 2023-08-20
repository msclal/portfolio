import React from "react";
import Link from "next/link";
import Image from "next/image";
import { event } from "../lib/ga";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import ProfilePNG from "@/public/gallery/hello.png";

const Hello = ({ homeRef }) => {
  return (
    <>
      {/* Desktop */}
      <motion.div
        ref={homeRef}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
        exit={{ opacity: 0, y: 0 }}
        className="w-full max-md:hidden"
      >
        <div className="rounded-[20px] max-h-[480px] h-full flex p-14 pl-12 max-md:hidden bg-opacity-50 bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] duration-700 md:hover:-translate-y-[3px] md:hover:shadow-lg shadow-sm">
          <div className="flex flex-wrap justify-between items-start ">
            <div className="space-y-10 xl:space-y-12 w-full">
              <div className="space-y-4 lg:space-y-7 xl:space-y-6 break-before-all">
                <h1 className="text-5xl font-bold select-none text-gray-700">
                  Hello, {"I'm"} Mika!
                </h1>
                <div>
                  <p className="space-x-2 xl:text-lg">
                    <span className="font-medium text-[#a888b7] mr-1">
                      Software Engineer with a flair for all user experience
                      related things.
                    </span>
                    Based in Southern California. Feeling Supersonic 24/5. After
                    hours, I eat my salted caramel {"Häagen-Dazs"} and watch the
                    ill-fated Lakers waste another season of {"Austin Reaves'"}{" "}
                    career.
                    <span className="font-medium text-[#a1b8da]">
                      #PovertyFranchise🥊
                    </span>
                  </p>
                </div>
                <div className="h-[28px] xl:text-lg">
                  <span>Also some favorites: </span>
                  <span>
                    <TypeAnimation
                      sequence={[
                        "Hayley Williams from Paramore!",
                        6500,
                        "In-N-Out Chili Peppers.",
                        5000,
                        "A Karaoke Mic.",
                        5000,
                      ]}
                      speed={65}
                      deletionSpeed={65}
                      cursor={true}
                      repeat={Infinity}
                      preRenderFirstString={true}
                      className=""
                    />
                  </span>
                </div>
              </div>
              <div className="flex gap-x-5 text-3xl min-[1300px]:hidden min-[1350px]:flex">
                {/* <Link
                  href="mailto:mikashanela.dev@gmail.com"
                  aria-label="Mail"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px] border-[1px] border-gray-200 text-gray-500"
                  onClick={() =>
                    event({
                      action: "home_click",
                      params: {
                        link: "mail",
                      },
                    })
                  }
                >
                  <FiMail />
                </Link> */}
                <Link
                  href="https://github.com/msclal"
                  target="_blank"
                  aria-label="Github"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]  border-[0.5px] border-gray-200 text-gray-500"
                  onClick={() =>
                    event({
                      action: "home_click",
                      params: {
                        link: "Github",
                      },
                    })
                  }
                >
                  <AiFillGithub />
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/mika-shanela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]  border-[0.5px] border-gray-200 text-gray-500"
                  onClick={() =>
                    event({
                      action: "home_click",
                      params: {
                        link: "LinkedIn",
                      },
                    })
                  }
                >
                  <ImLinkedin2 />
                </Link>
                <Link
                  href="mika_shanela_resume.pdf"
                  aria-label="Mika Shanela Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-[#a1b8da] hover:bg-gray-300 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1.5px] text-lg font-medium  border-[0.5px] border-gray-300 flex justify-center items-center"
                  // className="w-fit p-3 hover:bg-[#e1eaf7] cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1.5px] text-lg font-medium bg-[#e9f2fe]  border-[0.5px] border-gray-300 flex justify-center items-center text-gray-500"
                  onClick={() =>
                    event({
                      action: "home_click",
                      params: {
                        link: "resume",
                      },
                    })
                  }
                >
                  {/* <ImLinkedin2 /> */}
                  <p>Resume</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
        exit={{ opacity: 0, y: 0 }}
        className="md:hidden bg-gradient-to-br from-[#f1f9f0] to-[#e3eeff] rounded-[20px] flex flex-col p-8 px-5 justify-center items-center gap-y-5 shadow-sm"
      >
        <div className="flex flex-col items-center">
          <Image
            draggable={false}
            src={ProfilePNG}
            alt="Mika Profile Picture"
            className="max-sm:w-40 w-full mb-3"
            placeholder="blur"
          />
          <div className="text-center">
            <h1 className="text-lg font-semibold">Mika Shanela Carodan</h1>
            <div className="h-[28px] min-w-[310px] flex justify-center items-center text-center font-medium">
              <TypeAnimation
                sequence={[
                  `Software Engineer`,
                  7000,
                  `UX Engineer`,
                  5000,
                  "Garf LLC President",
                  5000,
                  "Professional Kareoke Singer",
                  5000,
                  "In-N-Out Chili Pepper Hoarder",
                  5000,
                  "Proud Mom (of 14 Cats)",
                  5000,
                ]}
                speed={50}
                deletionSpeed={66}
                wrapper="span"
                cursor={false}
                x
                repeat={Infinity}
                preRenderFirstString={true}
                className="max-[375px]:text-base text-[#a888b7] font-medium h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 text-3xl">
          <Link
            href="mailto:mikashanela.dev@gmail.com"
            aria-label="Mail"
            className="w-fit p-3 bg-gray-100 rounded-[10px] border-[0.5px] border-gray-200 duration-300 text-gray-500"
            onClick={() =>
              event({
                action: "home_click",
                params: {
                  link: "mail",
                },
              })
            }
          >
            <FiMail />
          </Link>
          <Link
            href="https://github.com/msclal"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px]  border-[0.5px] border-gray-200 duration-300 text-gray-500"
            onClick={() =>
              event({
                action: "home_click",
                params: {
                  link: "Github",
                },
              })
            }
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mika-shanela/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] border-[0.5px] border-gray-200 duration-300 text-gray-500"
            onClick={() =>
              event({
                action: "home_click",
                params: {
                  link: "LinkedIn",
                },
              })
            }
          >
            <ImLinkedin2 />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">
            Based in Southern California. Feeling Supersonic 24/5. After hours,
            I eat {"Häagen-Dazs"} + watch the Lakers waste another season of{" "}
            {"Austin Reaves'"} career. Also,{" "}
            <span className="font-medium text-[#a1b8da]">
              {" "}
              #HayleyWilliamsTop5Ever🗿
            </span>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Hello;
