import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
// import { SiFirebase } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiCypress } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";

const Technologies = () => {
  const [next, setNext] = useState(false);
  const [vercel, setVercel] = useState(false);
  const [tailwind, setTailwind] = useState(false);
  const [react, setReact] = useState(false);
  const [js, setJs] = useState(false);
  const [ts, setTs] = useState(false);
  const [node, setNode] = useState(false);
  const [mongo, setMongo] = useState(false);
  const [firebase, setFirebase] = useState(false);
  const [postman, setPostman] = useState(false);
  const [python, setPython] = useState(false);
  const [cpp, setCPP] = useState(false);
  const [figma, setFigma] = useState(false);
  const [cypress, setCypress] = useState(false);
  const [git, setGit] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2.3 } }}
        exit={{ opacity: 0, y: 0 }}
        className="max-md:hidden bg-gradient-to-br from-[#f3e7e9] via-[#e3eeff] to-[#ffffff] rounded-[20px] px-2 py-3 xl:py-2 space-y-5 bg-opacity-50 shadow-sm"
      >
        <div className="flex flex-wrap justify-between items-center text-3xl xl:text-4xl gap-y-2 select-none">
          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[7px] xl:-bottom-[7px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <TbBrandNextjs
              className="text-4xl xl:text-[42px] stroke-[1.3px]"
              onMouseEnter={() => setNext(true)}
              onMouseLeave={() => setNext(false)}
            />
            {next && (
              <p className="absolute text-[10px] -top-[26px]">Next.js</p>
            )}
          </div>
          {/* <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[7px] xl:-bottom-[7px] w-[6px] h-[6px] bg-[#d4cfcebe] rounded-full"></span>
            <SiOpenai

              onMouseEnter={() => setNext(true)}
              onMouseLeave={() => setNext(false)}
            />
            {next && (
              <p className="absolute text-[10px] -top-[26px]">Next.js</p>
            )}
          </div> */}

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            {/* <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#e8e0df] rounded-full"></span> */}

            <SiOpenai
              onMouseEnter={() => setVercel(true)}
              onMouseLeave={() => setVercel(false)}
              className="text-tech-openai"
            />
            {vercel && (
              <p className="absolute text-[10px] -top-[30px]">OpenAI</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <SiTailwindcss
              className="text-tech-tailwind"
              onMouseEnter={() => setTailwind(true)}
              onMouseLeave={() => setTailwind(false)}
            />
            {tailwind && (
              <p className="absolute text-[10px] -top-[28px]">TailwindCSS</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <FaReact
              className="text-tech-react"
              onMouseEnter={() => setReact(true)}
              onMouseLeave={() => setReact(false)}
            />
            {react && (
              <p className="absolute text-[10px] -top-[30px]">React.js</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <SiJavascript
              className="text-tech-javascript"
              onMouseEnter={() => setJs(true)}
              onMouseLeave={() => setJs(false)}
            />
            {js && (
              <p className="absolute text-[10px] -top-[33px]">JavaScript</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <SiTypescript
              className="text-tech-typescript"
              onMouseEnter={() => setTs(true)}
              onMouseLeave={() => setTs(false)}
            />
            {ts && (
              <p className="absolute text-[10px] -top-[33px]">TypeScript</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <FaNodeJs
              className="text-tech-node"
              onMouseEnter={() => setNode(true)}
              onMouseLeave={() => setNode(false)}
            />
            {node && (
              <p className="absolute text-[10px] -top-[28px]">Node.js</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <SiMongodb
              className="text-tech-mongo"
              onMouseEnter={() => setMongo(true)}
              onMouseLeave={() => setMongo(false)}
            />
            {mongo && (
              <p className="absolute text-[10px] -top-[30px]">MongoDB</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <SiPrisma
              // className="text-tech-firebase"
              className="text-tech-prisma"
              onMouseEnter={() => setFirebase(true)}
              onMouseLeave={() => setFirebase(false)}
            />
            {firebase && (
              <p className="absolute text-[10px] -top-[30px]">Prisma</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <SiPostman
              className="text-tech-postman"
              onMouseEnter={() => setPostman(true)}
              onMouseLeave={() => setPostman(false)}
            />
            {postman && (
              <p className="absolute text-[10px] -top-[33px]">Postman</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <FaPython
              className="text-tech-python"
              onMouseEnter={() => setPython(true)}
              onMouseLeave={() => setPython(false)}
            />
            {python && (
              <p className="absolute text-[10px] -top-[30px]">Python</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <SiCplusplus
              className="text-tech-cpp"
              onMouseEnter={() => setCPP(true)}
              onMouseLeave={() => setCPP(false)}
            />
            {cpp && <p className="absolute text-[10px] -top-[30px]">C++</p>}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <SiFigma
              className="text-tech-figma"
              onMouseEnter={() => setFigma(true)}
              onMouseLeave={() => setFigma(false)}
            />
            {figma && <p className="absolute text-[10px] -top-[30px]">Figma</p>}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <SiCypress
              className="text-tech-cypress"
              onMouseEnter={() => setCypress(true)}
              onMouseLeave={() => setCypress(false)}
            />
            {cypress && (
              <p className="absolute text-[10px] -top-[30px]">Cypress</p>
            )}
          </div>

          <div className="relative hover:scale-[1.08] hover:-translate-y-1 duration-300 flex justify-center">
            <span className="absolute -bottom-[10px] w-[6px] h-[6px] bg-[#a1b8da] rounded-full"></span>
            <FaGit
              className="text-tech-git"
              onMouseEnter={() => setGit(true)}
              onMouseLeave={() => setGit(false)}
            />
            {git && <p className="absolute text-[10px] -top-[28px]">Git</p>}
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2.3 } }}
        exit={{ opacity: 0, y: 0 }}
        className="md:hidden bg-gradient-to-br from-[#f1f9f0] via-[#e3eeff] to-[#ffffff] rounded-[20px] p-3 pt-0 space-y-1 bg-opacity-50 shadow-sm"
      >
        <div className="flex flex-wrap justify-center items-center text-2xl gap-x-5 gap-y-2 drop-shadow-md">
          <TbBrandNextjs className="text-2xl stroke-[1.3px]" />
          <SiOpenai className="text-tech-openai" />
          <SiTailwindcss className="text-tech-tailwind" />
          <FaReact className="text-tech-react" />
          <SiJavascript className="text-tech-javascript" />
          <SiTypescript className="text-tech-typescript" />
          <DiNodejs className="text-5xl text-tech-node" />
          <SiMongodb className="text-tech-mongo" />
          <SiGoogleanalytics className="text-tech-firebase" />
          <SiPostman className="text-tech-postman" />
          <FaPython className="text-tech-python" />
          <SiCplusplus className="text-tech-cpp" />
          <SiFigma className="text-tech-figma" />
          <SiCypress className="text-tech-cypress" />
          <FaGit className="text-tech-git" />
        </div>
      </motion.div>
    </>
  );
};

export default Technologies;
