import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import meThinks from "@/public/projects/meThinks2.png";
import Citrus from "@/public/projects/citrus2.png";
import bioLink from "@/public/projects/bioLink.png";
import rparts from "@/public/projects/r-parts2.png";
import garf from "@/public/projects/garfai2.png";
import bbb from "@/public/projects/bbb2.png";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = ({ projectsRef }) => {
  const projectsData = [
    {
      title: "meThinks...",
      role: "Lead Developer & Product Manager",
      subTitle: "Twitter-BeReal Style thought posting",
      image: meThinks,
      github: "https://github.com/msclal/project-methinks",
      deployed: "https://me-thinks.herokuapp.com/feed",
      desktop: true,
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiMongodb />
          <SiSocketdotio />
          <p className="text-xs">NextAuth</p>
          {/* <p>NextAuth</p> */}
        </div>
      ),
      bg: "bg-gradient-to-r from-[#eef2fd] to-[#ecf5fe]",
      // bg: "bg-gradient-to-bl from-[#f5f8ff] to-[#f2f6fd]",
    },
    {
      title: "bioLink",
      role: "Front-end Developer",
      subTitle:
        "AI-driven health insights and live chatting with local experts",
      image: bioLink,
      github: "https://github.com/minsooerickim/bioLink",
      deployed: null,
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiMongodb />
          <SiOpenai />
          <SiSocketdotio />
          <p className="text-xs">NextAuth</p>
        </div>
      ),
      bg: "bg-gradient-to-br from-[#ecf5fe] to-[#f3fef7]",
      // bg: "bg-gradient-to-br from-[#f9fcff] via-[#f5f8ff] to-[#f7fffa]",
    },
    {
      title: "Citrus Hack",
      role: "Lead Developer & On-Call Support Engineer",
      subTitle:
        "UCR's Premier Hackathon Event (largest in California Inland Empire) with 725+ hackers",
      image: Citrus,
      github: "https://github.com/citrushack/citrushack2023",
      deployed: "https://www.citrushack.com/",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiMongodb />
          <TbBrandFramerMotion />
          <p className="text-xs">NextAuth</p>
        </div>
      ),
      bg: "bg-gradient-to-r from-[#f0f6fd] to-[#e8f4ff]",
      // bg: "bg-gradient-to-bl from-[#f7fbff] via-[#f7fffa] to-[#f1f8fb]",
    },
    {
      title: "R-Parts",
      role: "Front-end Developer",
      subTitle:
        "Secondhand Marketplace for UCR students seeking parts for engineering classes",
      image: rparts,
      github: "https://github.com/shahdivyank/r-parts",
      // deployed: "r-parts.vercel.app",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiFirebase />
          <p className="text-xs">NextAuth</p>
        </div>
      ),
      bg: "bg-gradient-to-br from-[#e8f4ff] to-[#fffbef]",
      // bg: "bg-gradient-to-br from-[#fffcf7] via-[#fffbfa] to-[#fffdf7]",
    },
    {
      title: "Garf AI",
      role: "Full-stack Developer & Product Owner",
      // subTitle:
      //   "Personal AI assistant to enrich my friend group's daily workflows",
      subTitle:
        "AI-powered personal assistant to streamline our friend group's daily workflows",
      image: garf,
      github: "https://github.com/msclal/Garf",
      deployed: "https://garfai.vercel.app/",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiOpenai />
        </div>
      ),
      bg: "bg-gradient-to-r from-[#fff3ef] to-[#eef2fd]",
    },
    {
      title: "bitByBIT",
      role: "Full-stack Developer",
      subTitle:
        "Leetcode-esque platform for beginner UCR students to improve programming fundamentals",
      image: bbb,
      github: "https://github.com/acm-ucr/bitByBIT",
      deployed: null,
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiFirebase />
          <p className="text-xs">Judge0</p>
        </div>
      ),
      bg: "bg-gradient-to-br from-[#eef2fd] to-[#fcf2f8]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2.7 } }}
      exit={{ opacity: 0, y: 0 }}
      id="projects"
      ref={projectsRef}
      className="grid sm:grid-cols-2 gap-5 md:gap-8 pb-0 mb-0 place-items-center"
    >
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </motion.div>
  );
};

export default Projects;
