import React from "react";
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
        // <>
        //   <div
        //     key={index}
        //     className="relative flex flex-col w-full h-[250px] md:h-[350px] rounded-[20px] cursor-pointer max-md:hidden"
        //     onMouseEnter={() => setIsHover(true)}
        //     onMouseLeave={() => setIsHover(false)}
        //   >
        //     {isHover && (
        //       <div className="w-full h-full absolute z-[5] p-3 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-40">
        //         <div className="">
        //           <p className="text-xl text-white font-semibold">
        //             {project.title}
        //           </p>
        //           <p className="text-sm text-white">{project.subTitle}</p>
        //           <p className="text-sm text-white">{project.description}</p>
        //         </div>
        //       </div>
        //     )}
        //     <BsBoxArrowUpRight className="absolute right-4 top-4 z-[10] text-lg text-white" />
        //     <Image
        //       src={project.image}
        //       alt="meThinks"
        //       layout="fill"
        //       objectFit="cover"
        //       className={`rounded-[20px] ${isHover ? `` : ``}`}
        //     />
        //   </div>
        //   <div
        //     key={index}
        //     className="relative flex flex-col w-full h-[250px] md:h-[350px] rounded-[20px] cursor-pointer md:hidden"
        //   >
        //     {
        //       <div className="w-full h-full absolute z-[5] p-3 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-40">
        //         <div className="">
        //           <p className="text-xl text-white font-semibold">
        //             {project.title}
        //           </p>
        //           <p className="text-sm text-white">{project.subTitle}</p>
        //           <p className="text-sm text-white">{project.description}</p>
        //         </div>
        //       </div>
        //     }
        //     <BsBoxArrowUpRight className="absolute right-4 top-4 z-[10] text-lg text-white" />
        //     <Image
        //       src={project.image}
        //       alt="meThinks"
        //       layout="fill"
        //       objectFit="cover"
        //       className={`rounded-[20px]`}
        //     />
        //   </div>
        // </>
      ))}
      {/* <div
        className="relative flex flex-col w-full h-[250px] md:h-[375px] rounded-[20px] cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover && (
          <div className="w-full h-full absolute z-[5] p-3 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-50">
            <div className="">
              <p className="text-xl text-white font-semibold">meThinks</p>
              <p className="text-sm text-white">
                Twitter-BeReal Style Thought Posting
              </p>
              <p className="text-sm text-white">Led a team of 4 engineers</p>
            </div>
          </div>
        )}
        <div className="absolute rounded-full right-3 top-3 w-fit p-2 bg-white z-[10]">
          <IoIosRocket className="right-3 top-3 z-[10] text-xl" />
        </div>
        <Image
          src={meThinks}
          alt="meThinks"
          //   width="100%"
          //   height={250}
          layout="responsive"
          objectFit="cover"
          className={`rounded-[20px] absolute ${isHover ? `` : ``}`}
        />
      </div> */}

      {/* <div className="relative w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px] cursor-pointer">
        <div className="absolute rounded-full right-5 top-5 w-fit p-2 bg-white">
          <IoIosRocket className="text-3xl" />
        </div>
      </div>

      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 1
      </div>
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 2
      </div>

      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 1
      </div>
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 2
      </div> */}
    </div>
  );
};

// import React, { useState } from "react";
// import Image from "next/legacy/image";
// import { IoIosRocket } from "react-icons/io";
// import meThinks from "@/public/projects/meThinks.png";

// const Projects = () => {
//   const projectsData = [
//     {
//       title: "meThinks",
//       subTitle: "meThinks",
//       description: "meThinks",
//       image: meThinks,
//     },
//     {
//       title: "meThinks",
//       subTitle: "meThinks",
//       description: "meThinks",
//       image: meThinks,
//     },
//   ];

//   const [isHover, setIsHover] = useState(false);
//   return (
//     <div className="grid sm:grid-cols-2 gap-5 place-items-center">
//       {projectsData.map((project, index) => (
//         <div key={index} className="w-full h-[50px]">
//           {/* <h3>{project.title}</h3>
//           <p>{project.subTitle}</p>
//           <p>{project.description}</p> */}
//           <div className="w-full h-full rounded-[20px] opacity-10">
//             <Image
//               src={project.image}
//               alt="meThinks"
//               objectFit="contain"
//               className="rounded-[20px]"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;

export default Projects;
