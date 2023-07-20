import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  // const [isHover, setIsHover] = useState(false);

  return (
    <>
      {/* Desktop */}
      {/* <a
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative flex flex-col w-full h-[250px] md:h-[350px] rounded-[20px] cursor-pointer max-md:hidden hover:scale-[1.007] duration-500"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover && (
          <div className="w-full h-full absolute z-[5] p-6 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-50 transition-all ease-in-out">
            <div className="">
              <p className="text-xl text-white font-semibold">
                {project.title}
              </p>
              <p className="text-sm text-white font-medium">{project.role}</p>
              <p className="text-sm text-white">{project.subTitle}</p>
            </div>
          </div>
        )}
        <BsBoxArrowUpRight className="absolute right-4 top-4 z-[10] text-lg text-white stroke-1" />
        <Image
          src={project.image}
          alt="meThinks"
          layout="fill"
          objectFit="cover"
          className={`rounded-[20px]`}
          placeholder="blur"
        />
      </a> */}

      {/* Mobile */}
      {/* <Link
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative flex flex-col w-full h-[250px] md:h-[350px] rounded-[20px] cursor-pointer md:hidden"
      >
        {
          <div className="w-full h-full absolute z-[5] p-6 rounded-[20px] flex flex-col justify-end bg-gray-600 bg-opacity-50">
            <div className="drop-shadow-xl">
              <p className="text-xl text-white font-semibold">
                {project.title}
              </p>
              <p className="text-sm text-white font-medium">
                {project.subTitle}
              </p>
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
          placeholder="blur"
        />
      </Link> */}

      {/* <div className="p-4 flex flex-col w-full rounded-[20px] gap-y-3 bg-[#f5f7f7]"> */}
      <motion.div
        // whileHover={{ scale: 1.0065 }}
        // whileTap={{ scale: 0.995 }}
        transition={{ duration: 0, ease: "linear" }}
        // href={project.link}
        // target="_blank"
        // rel="noreferrer noopener"
        className={`p-4 flex flex-col w-full rounded-[20px] gap-y-3 border-[1px] border-gray-200 drop-shadow-sm bg-opacity-70 duration-300 md:hover:-translate-y-[3px] ${project.bg}`}
      >
        <Image
          src={project.image}
          // height={800}
          alt="meThinks"
          // layout="fill"
          // objectFit="cover"
          className={`rounded-[20px] h-1/3`}
          placeholder="blur"
        />
        <div>
          <p className="font-semibold">{project.title}</p>
          <p className="text-stone-400 text-sm font-medium">{project.role}</p>
          <p className="text-sm">{project.subTitle}</p>
        </div>
        <div className="space-y-1">
          <div className="flex gap-x-1 text-blue-700 text-xs">
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-purple-900"
            >
              Github
            </Link>
            {project.deployed && (
              <>
                <p className="font-thin">•</p>
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline hover:text-purple-900"
                >
                  Deployed
                </a>
              </>
            )}
          </div>
          {project.tech}
        </div>
      </motion.div>
    </>
  );
};

export default Project;
