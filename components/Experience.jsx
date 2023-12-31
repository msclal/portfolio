import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Scott from "@/public/gallery/scott.jpg";
import macREU from "@/public/gallery/macREU.png";
import planetHer from "@/public/gallery/planetHer.png";
import scottyMaps from "@/public/gallery/scottyMaps.jpg";
import NM from "@/public/gallery/NM.jpg";
import nmTech from "@/public/gallery/nmTech.jpg";
import wrxSpace from "@/public/gallery/wrxSpace.png";
import ACM from "@/public/gallery/ACM.png";
import citrusHack from "@/public/gallery/citrusHack.png";
import bioLink from "@/public/gallery/bioLink.png";
import kabo from "@/public/gallery/kabo.png";
import { RiShareBoxFill } from "react-icons/ri";

const Experience = ({ experienceRef }) => {
  const experiences = [
    {
      title: "First Line of Code!",
      subTitle: "2019-2023 - UC Riverside",
      image: Scott,
      alt: "UC Riverside",
      description:
        "C++ in CS010 at UC Riverside! This is also where I earned my Bachelor in Computer Science and Business, graduating with Cum Laude honors. Chef's kiss, 10/10 people.",
    },
    {
      title: "GPU Research Intern",
      subTitle: "Summer 2021 - MacREU Research",
      image: macREU,
      alt: "MacREU Research",
      description:
        "Explored ways in improving power-saving mechanisms in AMD GPUs. Wrote a research paper and presented at multiple conferences.",
      link: "https://ieeexplore.ieee.org/document/9651148",
    },
    {
      title: "Hack I: Rookie Success",
      subTitle: "January 2022 - Rose Hack",
      image: planetHer,
      alt: "Planet Her",
      description: `In my first hackathon (and first-time ever touching web dev), Planet Her Won 'Best Space App' & 'Best UI/UX'. `,
      link: "https://devpost.com/software/planether",
    },
    {
      title: "Hack II: Back To Back",
      subTitle: "April 2022 - Citrus Hack",
      image: scottyMaps,
      alt: "ScottyMaps",
      description:
        "Second hackathon appearance and our project, Scotty Maps, won 'Best Use of Google Cloud'!",
      link: "https://devpost.com/software/scottymaps",
    },
    {
      title: "Software Engineer Intern",
      subTitle: "Summer 2022 - Northwestern Mutual",
      image: NM,
      alt: "Northwestern Mutual",
      description:
        "I interned for the best team - The Innovation Team, and worked at the best office space, called Cream City Labs. We were in charge of ideating and developing new app ideas for the company.",
    },
    {
      title: "NMTech Instructor Assistant",
      subTitle: "Summer 2022 - Milwaukee",
      image: nmTech,
      alt: "NMTech Classroom",
      description:
        "Assisted in teaching 15 High-Schoolers learn basic HTML, CSS, JavaScript, and React.",
    },
    {
      title: `Hack III: Intern Takes Home Silver`,
      subTitle: "Summer 2022 - Northwestern Mutual Tech Intern Hackathon",
      image: wrxSpace,
      alt: "wrxSpace",
      description:
        "In a grueling 2-day event battling against 110+ other SWE interns, wrxSpace won '2nd Place' at my internship's hackathon event.",
      link: "https://github.com/msclal/wrxSpace",
    },
    {
      title: "ACM Project Developer",
      subTitle: "Fall 2022-Spring 2023 - UC Riverside",
      image: ACM,
      alt: "ACM",
      description:
        "UC Riverside's Computer Science club! We build projects that enhance student life at the school. I took part in building the 'bitByBit' and 'R'Parts' projects as a full-stack developer.",
    },
    {
      title: "Web Developer Lead",
      subTitle: "Winter-Spring 2023 - Citrus Hack",
      image: citrusHack,
      alt: "Citrus Hack",
      description: (
        <>
          I spearheaded the front-end for{" "}
          <a
            href="https://www.citrushack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-500"
          >
            CitrusHack.com.
          </a>{" "}
          I also assumed On-Call Technial Support responsibilities to tend to
          bugs and user feedbacks during the {`website's`} launch week.
        </>
      ),
    },
    {
      title: "Hack IV: Last Dance",
      subTitle: "May 2023 - Bio Hack",
      image: bioLink,
      alt: "bioLink",
      description:
        "bioLink won 'Best Overall' in my last college hackathon. One last \"hoorah\" as I bid goodbye to UC Riverside.",
      link: "https://github.com/minsooerickim/bioLink",
    },
    {
      title: "KABO! studio",
      subTitle: "August 2023 - Present",
      image: kabo,
      alt: "bioLink",
      description:
        "Working as a freelance web developer serving businesses across California. I talk to clients and oversee an entire project's lifecycle - from designs, development, testing, and maintenance of the website.",
      link: "https://github.com/minsooerickim/bioLink",
    },
  ];
  return (
    <motion.div
      id="experience"
      ref={experienceRef}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 3 } }}
      exit={{ opacity: 0, y: 0 }}
      className="w-full md:w-[62%] h-full"
    >
      <div className="bg-[#F5F6F6] rounded-[20px] p-5 pr-3 bg-opacity-90 space-y-5 duration-700 md:hover:-translate-y-[3px] md:hover:shadow-lg shadow-sm scroll-smooth	">
        <p className="font-semibold select-none text-lg">
          Experience (2019 - Present){" "}
        </p>

        <div
          className="overflow-y-auto h-[390px] pr-3 rounded-[10px] scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {experiences.reverse().map((experience, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === experiences.length - 1 ? `mb-0` : `mb-5`
                }`}
              >
                <div className="flex flex-col gap-y-2">
                  <a
                    href={experience.link}
                    aria-label={`${experience.alt}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-1 md:gap-x-2"
                  >
                    <p className="font-medium max-sm:text-sm">
                      {experience.title}
                    </p>
                    {experience.link ? (
                      <RiShareBoxFill className="text-gray-500 cursor-pointer" />
                    ) : (
                      ``
                    )}
                  </a>
                  <div className="flex gap-x-5 items-stretch">
                    <div className="w-[150px] md:w-[170px] lg:w-[150px] xl:w-[120px] h-full aspect-square bg-transparent rounded-[10px]">
                      <Image
                        src={experience.image}
                        alt="image"
                        draggable={false}
                        className="w-full h-full aspect-square rounded-[10px] object-contain"
                        placeholder="blur"
                      />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                      <p className="break-before-all text-xs md:text-sm font-normal">
                        {experience.description}
                      </p>
                      <p className="text-gray-500 font-light text-xs md:text-sm">
                        {experience.subTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

{
  /* <p className="font-medium text-lg">First Line of Code!</p>
  <div className="flex gap-x-5">
  <div className="w-[250px] md:w-[170px] lg:w-[150px] xl:w-[120px] h-[100px] bg-red-500"></div>
  <div className="flex flex-col gap-y-2">
  <p className="break-before-all">
  First line of code! And start of my undergrad life studying
  Computer Science
  </p>
              <p className="text-gray-400 font-light">2019 - Freshman Year</p>
            </div>
          </div> */
}
