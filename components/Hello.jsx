import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                      Full-Stack Software Engineer with a flair for all user
                      experience related things.
                    </span>
                    Based in Southern California. Feeling Supersonic 24/5. After
                    hours, I eat my Salted Caramel {"Häagen-Dazs"} and watch the
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
                        "Calamari + All the Hot Sauces.",
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
                <Link
                  href="mailto:mikashanela.dev@gmail.com"
                  aria-label="Mail"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]"
                >
                  <FiMail />
                </Link>
                <Link
                  href="https://github.com/msclal"
                  target="_blank"
                  aria-label="Github"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]"
                >
                  <AiFillGithub />
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/mika-shanela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]"
                >
                  <ImLinkedin2 />
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
                  `UX Junkie`,
                  5000,
                  "Professional Kareoke Singer",
                  5000,
                  "E-Scooter Enthusiast",
                  5000,
                  "Hot Sauce Hoarder",
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
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <FiMail />
          </Link>
          <Link
            href="https://github.com/msclal"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mika-shanela/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
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
          {/* <p className="font-medium text-[#a1b8da]">
            #HayleyWilliamsTop5Ever🗿
          </p> */}
        </div>
      </motion.div>
    </>
  );
};

export default Hello;
