import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import ProfilePNG from "@/public/gallery/hello.png";
import ProfileSVG from "@/public/gallery/hello.svg";

const Hello = ({ homeRef }) => {
  // const [isHovered, setIsHovered] = useState(false);

  // let timeout;

  // const handleMouseEnter = () => {
  //   timeout = setTimeout(() => {
  //     setIsHovered(true);
  //   }, 2000);
  // };

  // const handleMouseLeave = () => {
  //   clearTimeout(timeout);
  //   setIsHovered(false);
  // };

  // useEffect(() => {
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      {/* Desktop */}
      <motion.div
        ref={homeRef}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
        exit={{ opacity: 0, y: 0 }}
        // whileHover={{ scale: 1.005 }}
        // transition={{ duration: 0, ease: "linear" }}
        // whileTap={{ scale: 0.995 }}
        className="w-full max-md:hidden"
      >
        <div className="rounded-[20px] flex p-10 max-md:hidden bg-opacity-50 bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] duration-300 md:hover:-translate-y-[3px]">
          <div className="flex flex-wrap justify-between items-center ">
            <div className="space-y-20 lg:space-y-14 w-[50%]">
              <div className="space-y-5 break-before-all">
                <p className="text-3xl font-semibold select-none">
                  Hello, {"I'm"} Mika!
                </p>
                <div>
                  <p className="space-x-2 text-lg">
                    <span className="font-medium text-[#a888b7] mr-1">
                      Software Engineer with a flair for UI/UX.
                    </span>
                    Based in Southern California. After hours, I eat{" "}
                    {"Häagen-Dazs"} and watch the ill-fated Lakers waste another
                    season of {"Lebron's"} career.
                    <span className="font-medium text-[#a1b8da]">
                      #ThrowTheWholeTeamAway🥊
                    </span>
                  </p>
                </div>
                {/* <p className="texl-lg lg:text-xl">
                Hayley Williams from Paramore, top-5 woman ever.
              </p> */}
                {/* <div> */}
                <div className="h-[28px] text-lg">
                  <span>Also some favorites: </span>
                  <span>
                    <TypeAnimation
                      // wrapper="p"
                      sequence={[
                        // `Hello!`,
                        // 6000,
                        "Hayley Williams from Paramore!",
                        6500,
                        // <Link href="citrushack.com">
                        //   "Hayley Williams from Paramore - a top-5 iconic female
                        //   artist lister."
                        // </Link>,
                        // "Lorde's 'Melodrama' (a generation-defining cinematic pop opus).",
                        // "Lorde's 'Melodrama'.",
                        // 3000,
                        // "The Strokes' 'Room on Fire'.",
                        // 5000,
                        // "The Strokes - debut & sophomore albums",
                        // 5000,
                        // "Early 2000s Indie Rock Scene.",
                        // 3000,
                        // "80s Mom Songs.",
                        // 3000,
                        "Calamari + All the Hot Sauces.",
                        5000,
                        "A Karaoke Mic.",
                        5000,
                        // "The MacBook M1 Pro Speakers.",
                        // 3000,
                        // ".",
                        // 3000,
                        // "Eggs + Rice.",
                        // 3000,
                        // "A",
                        // 3000,
                      ]}
                      speed={65}
                      deletionSpeed={65}
                      cursor={true}
                      repeat={Infinity}
                      preRenderFirstString={true}
                      className=""
                    />
                  </span>
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
              <div className="flex gap-x-5 text-3xl">
                <Link
                  href="mailto:mikashanela.dev@gmail.com"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]"
                >
                  <FiMail />
                </Link>
                <Link
                  href="https://github.com/msclal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]"
                >
                  <AiFillGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mika-shanela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit p-3 bg-white hover:bg-gray-100 cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[1px]"
                >
                  <ImLinkedin2 />
                </Link>
              </div>
            </div>
            <div className="w-[230px] lg:w-[250px]">
              {/* <div className="bg-red-500 relative"> */}
              <Image
                draggable={false}
                src={ProfileSVG}
                // width={250}
                // priority={true}
                className="aspect-square rounded-full mr-2"
                alt="Mika Profile Picture"
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              />
            </div>
            {/* {isHovered && (
              <p className="absolute top-1/2 left-[45%] z-[10] text-white text-center bg-blue-200">
                Hello
              </p>
            )}
          </div> */}
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
        exit={{ opacity: 0, y: 0 }}
        className="md:hidden bg-gradient-to-br from-[#f1f9f0] to-[#e3eeff] rounded-[20px] flex flex-col p-8 px-5 justify-center items-center gap-y-5"
      >
        <div className="flex flex-col items-center">
          <Image
            draggable={false}
            src={ProfilePNG}
            alt="Mika Profile Picture"
            className="max-sm:w-40 w-full mb-3"
            placeholder="blur"
          />
          <div className="text-center">
            <p className="text-lg font-semibold">Mika Shanela Carodan</p>
            <div className="h-[28px] min-w-[310px] flex justify-center items-center text-center font-medium">
              <TypeAnimation
                sequence={[
                  `Software Engineer`,
                  7000,
                  `UX Junkie`,
                  5000,
                  "E-Scooter Enthusiast",
                  5000,
                  "Professional Kareoke Singer",
                  5000,
                  // "Egg&Rice Muncher",
                  // 5000,
                  "Hot Sauce Hoarder",
                  5000,
                  "Proud Mom (of 15 Cats)",
                  5000,
                ]}
                speed={50}
                deletionSpeed={66}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                preRenderFirstString={true}
                className="max-[375px]:text-base text-[#a888b7] font-medium h-full"
              />
            </div>
          </div>
          {/* <Link href={"tel:9092145009"} className="underline">
            {"+1 (909) 214-5009"}
          </Link> */}
        </div>
        <div className="flex gap-x-5 text-3xl">
          <Link
            href="mailto:mikashanela.dev@gmail.com"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <FiMail />
          </Link>
          <Link
            href="https://github.com/msclal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mika-shanela/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-100 rounded-[10px] duration-300"
          >
            <ImLinkedin2 />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">
            Based in Southern California. Feeling Supersonic 24/5. After hours,
            I eat {"Häagen-Dazs"} + watch the Lakers waste another season of{" "}
            {"Lebron's"} career. Also,
          </p>
          <p className="font-medium text-[#a1b8da]">
            #HayleyWilliamsTop5Ever🗿
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Hello;

{
  /* <p className="texl-lg lg:text-xl text-center">
<span className="font-medium text-[#a888b7] mr-1">
  Software Engineer based in Southern California.
</span>
Trying to make it out the trenches. After hours, I eat{" "}
{"Häagen-Dazs"} and watch the Golden State Warriors
self-detonate their roster.
</p>
</div> */
}
