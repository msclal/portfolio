import React from "react";
import Image from "next/image";
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

const Experience = () => {
  const experiences = [
    {
      title: "First Line of Code!",
      subTitle: "2019-2023 - UC Riverside",
      image: Scott,
      alt: "UC Riverside",
      description:
        "This was also the start of my undergrad life studying Computer Science and Business. I've met the most amazing people in my four years of pursuing this degree.",
    },
    {
      title: "GPU Research Intern",
      subTitle: "2019 - MacREU Research",
      image: macREU,
      alt: "MacREU Research",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: `Won 'Best Space App' & 'Best UI/UX'`,
      subTitle: "2022 - Rose Hack",
      image: planetHer,
      alt: "Planet Her",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: `Won 'Best Use of Google Cloud'`,
      subTitle: "2022 - Citrus Hack",
      image: scottyMaps,
      alt: "ScottyMaps",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: "Software Engineer Intern",
      subTitle: "2022 - Northwestern Mutual",
      image: NM,
      alt: "Northwestern Mutual",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: "NMTech Instructor Assistant",
      subTitle: "2022 - Milwaukee",
      image: nmTech,
      alt: "NMTech Classroom",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: `Won 'Second Place'`,
      subTitle: "2022 - Northwestern Mutual Intern Hack",
      image: wrxSpace,
      alt: "wrxSpace",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: "ACM Project Developer",
      subTitle: "2022 - UC Riverside",
      image: ACM,
      alt: "ACM",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: "Web Developer Lead",
      subTitle: "2023 - Citrus Hack",
      image: citrusHack,
      alt: "Citrus Hack",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
    {
      title: `Won 'Best Overall'`,
      subTitle: "2023 - Bio Hack",
      image: bioLink,
      alt: "bioLink",
      description:
        "First line of code! And start of my undergrad life studying Computer Science",
    },
  ];
  return (
    <div className="w-full md:w-2/3 h-full bg-[#ebedee] rounded-[20px] p-5 pr-2 bg-opacity-50 space-y-5">
      {/* <div className="w-full md:w-2/3 h-full bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] rounded-[20px] p-5 pr-2 bg-opacity-50 space-y-5"> */}
      <p className="font-semibold text-xl md:text-2xl select-none">
        Experience
      </p>

      <div className="overflow-y-auto h-[390px] pr-2 rounded-[10px]">
        {experiences.map((experience, index) => {
          return (
            <div key={index} className="mb-5">
              <div className="flex flex-col gap-y-2">
                <p className="font-medium text-lg">{experience.title}</p>
                <div className="flex gap-x-5 items-stretch">
                  <div className="w-[150px] md:w-[170px] lg:w-[150px] xl:w-[120px] h-full aspect-square bg-transparent rounded-[10px]">
                    <Image
                      src={experience.image}
                      alt="image"
                      draggable={false}
                      className="w-full h-full aspect-square rounded-[10px]"
                      placeholder="blur"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="break-before-all max-md:text-[13px]">
                      {experience.description}
                    </p>
                    <p className="text-gray-500 font-light max-md:text-[13px]">
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
