import React, { useState } from "react";
import Image from "next/legacy/image";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({ project }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative flex flex-col w-full h-[250px] md:h-[350px] rounded-[20px] cursor-pointer max-md:hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover && (
          <div className="w-full h-full absolute z-[5] p-3 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-40">
            <div className="">
              <p className="text-xl text-white font-semibold">
                {project.title}
              </p>
              <p className="text-sm text-white font-medium">
                {project.subTitle}
              </p>
              <p className="text-sm text-white">{project.description}</p>
            </div>
          </div>
        )}
        <BsBoxArrowUpRight className="absolute right-4 top-4 z-[10] text-lg text-white stroke-1" />
        <Image
          src={project.image}
          alt="meThinks"
          layout="fill"
          objectFit="cover"
          className={`rounded-[20px] ${isHover ? `` : ``}`}
        />
      </a>
      <div className="relative flex flex-col w-full h-[250px] md:h-[350px] rounded-[20px] cursor-pointer md:hidden">
        {
          <div className="w-full h-full absolute z-[5] p-3 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-40">
            <div className="">
              <p className="text-xl text-white font-semibold">
                {project.title}
              </p>
              <p className="text-sm text-white font-medium">
                {project.subTitle}
              </p>
              {/* <p className="text-sm text-white">{project.description}</p> */}
            </div>
          </div>
        }
        <BsBoxArrowUpRight className="absolute right-4 top-4 z-[10] text-lg text-white" />
        <Image
          src={project.image}
          alt="meThinks"
          layout="fill"
          objectFit="cover"
          className={`rounded-[20px]`}
        />
      </div>
    </>
  );
};

export default Project;
