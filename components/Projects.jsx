import React from "react";
import Project from "./Project";
import meThinks from "@/public/projects/meThinks.jpg";
import Citrus from "@/public/projects/citrus.png";
import bioLink from "@/public/projects/bioLink.png";
import rparts from "@/public/projects/r-parts.png";
import garf from "@/public/projects/garfai.png";
import bbb from "@/public/projects/bbb.png";

const Projects = () => {
  const projectsData = [
    {
      title: "meThinks...",
      subTitle: "Twitter-BeReal Style Thought Posting",
      description: "Led 4 engineers",
      image: meThinks,
      link: "https://github.com/msclal/project-methinks",
    },
    {
      title: "bioLink",
      subTitle: "Personalized Medical Diagnoses in Seconds",
      description: "Led 4 engineers",
      image: bioLink,
      link: "https://github.com/minsooerickim/bioLink",
    },
    {
      title: "Citrus Hack",
      subTitle: "UCR's Premier Hackathon with over 700+ hackers",
      description: "Spearheaded Frontend Development",
      image: Citrus,
      link: "https://github.com/citrushack/citrushack2023",
    },
    {
      title: "R-Parts",
      subTitle: "Secondhand Marketplace for UCR Engineering Students",
      description: "Led 4 engineers",
      image: rparts,
      link: "https://github.com/shahdivyank/r-parts",
    },
    {
      title: "GarfAi",
      subTitle: "Twitter-BeReal Style Thought Posting",
      description: "Led 4 engineers",
      image: garf,
      link: "https://github.com/msclal/Garf",
    },
    {
      title: "bitByBIT",
      subTitle: "Twitter-BeReal Style Thought Posting",
      description: "Led 4 engineers",
      image: bbb,
      link: "https://github.com/acm-ucr/bitByBIT",
    },
  ];

  return (
    <div id="projects" className="grid sm:grid-cols-2 gap-5 place-items-center">
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
