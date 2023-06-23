import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiCypress } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="bg-gray-200 rounded-[20px] p-3 md:p-5 md:space-y-5 bg-opacity-50">
      <p className="text-lg md:text-2xl font-semibold">
        Tools and Technologies
      </p>
      <div className="flex flex-wrap justify-center items-center text-xl md:text-3xl xl:text-4xl gap-x-5 md:gap-x-7 gap-y-0 md:gap-y-2">
        <TbBrandNextjs className="text-2xl xl:text-5xl stroke-[1.3px]" />
        <SiVercel />
        <SiTailwindcss className="text-tech-tailwind" />
        <FaReact className="text-tech-react" />
        <SiJavascript className="text-tech-javascript" />
        <SiTypescript className="text-tech-typescript" />
        <DiNodejs className="text-5xl xl:text-8xl text-tech-node" />
        <SiMongodb className="text-tech-mongo" />
        <SiFirebase className="text-tech-firebase" />
        <SiPostman className="text-tech-postman" />
        <FaPython className="text-tech-python" />
        <SiCplusplus className="text-tech-cpp" />
        <SiFigma className="text-tech-figma" />
        <SiCypress className="text-tech-cypress" />
        <FaGit className="text-tech-git" />
      </div>
    </div>
  );
};

export default Technologies;
