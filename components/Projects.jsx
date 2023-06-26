import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import meThinks from "@/public/projects/meThinks.png";
import Citrus from "@/public/projects/citrus.png";
import bioLink from "@/public/projects/bioLink.png";
import rparts from "@/public/projects/r-parts.png";
import garf from "@/public/projects/garfai.png";
import bbb from "@/public/projects/bbb.png";

const Projects = () => {
  const projectsData = [
    {
      title: "meThinks...",
      subTitle: "Twitter-BeReal Style thought posting",
      description: "Led a team of 4 people ",
      image: meThinks,
      link: "https://github.com/msclal/project-methinks",
    },
    {
      title: "bioLink",
      subTitle:
        "AI-driven health insights and live chatting with local experts",
      description: "",
      image: bioLink,
      link: "https://github.com/minsooerickim/bioLink",
    },
    {
      title: "Citrus Hack",
      subTitle: "UCR's premier hackathon event with over 700+ hackers",
      description: "Spearheaded Frontend Development",
      image: Citrus,
      link: "https://github.com/citrushack/citrushack2023",
    },
    {
      title: "R-Parts",
      subTitle:
        "Secondhand Marketplace for UCR students seeking parts for engineering classes",
      description: "Led 4 engineers",
      image: rparts,
      link: "https://github.com/shahdivyank/r-parts",
    },
    {
      title: "Garf AI",
      subTitle:
        "Personal AI assistant for my friend group (gift ideas, bill splitting, writing analysis, etc.)",
      description: "Led 4 engineers",
      image: garf,
      link: "https://github.com/msclal/Garf",
    },
    {
      title: "bitByBIT",
      subTitle:
        "Leetcode-esque platform for UCR CS students to improve programming fundamentals",
      description: "Led 4 engineers",
      image: bbb,
      link: "https://github.com/acm-ucr/bitByBIT",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2.7 } }}
      exit={{ opacity: 0, y: 0 }}
      id="projects"
      className="grid sm:grid-cols-2 gap-5 pb-0 mb-0 place-items-center"
    >
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </motion.div>
  );
};

export default Projects;
