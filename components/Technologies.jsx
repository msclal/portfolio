import React, { useState } from "react";
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
      <div className="max-md:hidden bg-gradient-to-br from-[#f3e7e9] via-[#e3eeff] to-[#ffffff] rounded-[20px] p-5 space-y-5 bg-opacity-50">
        <div className="flex flex-wrap justify-between items-center text-3xl xl:text-4xl gap-y-2 drop-shadow-2xl">
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <TbBrandNextjs
              className="text-4xl xl:text-5xl stroke-[1.3px]"
              onMouseEnter={() => setNext(true)}
              onMouseLeave={() => setNext(false)}
            />
            {next && <p className="absolute text-xs -bottom-4">Next.js</p>}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiVercel
              onMouseEnter={() => setVercel(true)}
              onMouseLeave={() => setVercel(false)}
            />
            {vercel && (
              <p className="absolute text-xs -bottom-[20px]">Vercel</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiTailwindcss
              className="text-tech-tailwind"
              onMouseEnter={() => setTailwind(true)}
              onMouseLeave={() => setTailwind(false)}
            />
            {tailwind && (
              <p className="absolute text-xs -bottom-[20px]">TailwindCSS</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <FaReact
              className="text-tech-react"
              onMouseEnter={() => setReact(true)}
              onMouseLeave={() => setReact(false)}
            />
            {react && (
              <p className="absolute text-xs -bottom-[20px]">React.js</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiJavascript
              className="text-tech-javascript"
              onMouseEnter={() => setJs(true)}
              onMouseLeave={() => setJs(false)}
            />
            {js && (
              <p className="absolute text-xs -bottom-[20px]">JavaScript</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiTypescript
              className="text-tech-typescript"
              onMouseEnter={() => setTs(true)}
              onMouseLeave={() => setTs(false)}
            />
            {ts && (
              <p className="absolute text-xs -bottom-[20px]">TypeScript</p>
            )}
          </div>
          <div className="relative hover:scale-[1.05] duration-300 flex justify-center">
            <DiNodejs
              className="text-5xl xl:text-8xl text-tech-node"
              onMouseEnter={() => setNode(true)}
              onMouseLeave={() => setNode(false)}
            />
            {node && (
              <p className="absolute text-xs -bottom-[9px] xl:bottom-[10px]">
                Node.js
              </p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiMongodb
              className="text-tech-mongo"
              onMouseEnter={() => setMongo(true)}
              onMouseLeave={() => setMongo(false)}
            />
            {mongo && (
              <p className="absolute text-xs -bottom-[20px]">MongoDB</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiFirebase
              className="text-tech-firebase"
              onMouseEnter={() => setFirebase(true)}
              onMouseLeave={() => setFirebase(false)}
            />
            {firebase && (
              <p className="absolute text-xs -bottom-[20px]">Firebase</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiPostman
              className="text-tech-postman"
              onMouseEnter={() => setPostman(true)}
              onMouseLeave={() => setPostman(false)}
            />
            {postman && (
              <p className="absolute text-xs -bottom-[20px]">Postman</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <FaPython
              className="text-tech-python"
              onMouseEnter={() => setPython(true)}
              onMouseLeave={() => setPython(false)}
            />
            {python && (
              <p className="absolute text-xs -bottom-[20px]">Python</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiCplusplus
              className="text-tech-cpp"
              onMouseEnter={() => setCPP(true)}
              onMouseLeave={() => setCPP(false)}
            />
            {cpp && <p className="absolute text-xs -bottom-[20px]">C++</p>}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiFigma
              className="text-tech-figma"
              onMouseEnter={() => setFigma(true)}
              onMouseLeave={() => setFigma(false)}
            />
            {figma && <p className="absolute text-xs -bottom-[20px]">Figma</p>}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <SiCypress
              className="text-tech-cypress"
              onMouseEnter={() => setCypress(true)}
              onMouseLeave={() => setCypress(false)}
            />
            {cypress && (
              <p className="absolute text-xs -bottom-[20px]">Cypress</p>
            )}
          </div>
          <div className="relative hover:scale-[1.06] duration-300 flex justify-center">
            <FaGit
              className="text-tech-git"
              onMouseEnter={() => setGit(true)}
              onMouseLeave={() => setGit(false)}
            />
            {git && <p className="absolute text-xs -bottom-[20px]">Git</p>}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-gradient-to-br from-[#f3e7e9] via-[#e3eeff] to-[#ffffff] rounded-[20px] p-3 space-y-1 bg-opacity-50">
        <div className="flex flex-wrap justify-center items-center text-2xl gap-x-5 gap-y-2 drop-shadow-md">
          <div className="hover:scale-[1.04] duration-300">
            <TbBrandNextjs className="text-2xl stroke-[1.3px]" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiVercel />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiTailwindcss className="text-tech-tailwind" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <FaReact className="text-tech-react" />
          </div>
          <div className="hover:scale-[1.06]] duration-300">
            <SiJavascript className="text-tech-javascript" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiTypescript className="text-tech-typescript" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <DiNodejs className="text-5xl text-tech-node" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiMongodb className="text-tech-mongo" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiFirebase className="text-tech-firebase" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiPostman className="text-tech-postman" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <FaPython className="text-tech-python" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiCplusplus className="text-tech-cpp" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiFigma className="text-tech-figma" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <SiCypress className="text-tech-cypress" />
          </div>
          <div className="hover:scale-[1.06] duration-300">
            <FaGit className="text-tech-git" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
