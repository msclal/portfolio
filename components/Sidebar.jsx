import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Sidebar = ({
  isHomeVisible,
  isProjectsVisible,
  isExperienceVisible,
  isContactVisible,
}) => {
  const scrollToTop = () => {
    setSelected("Home");
    window.scrollTo(0, 0);
  };

  const [selected, setSelected] = useState("Home");

  const [homeClicked, setHomeClicked] = useState(false);
  const [projectsClicked, setProjectsClicked] = useState(false);
  const [experienceClicked, setExperienceClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  //   handling case whgen user clicks navbar link, each color in-between does not light up
  useEffect(() => {
    if (homeClicked && isHomeVisible) {
      setHomeClicked(false);
    } else if (projectsClicked && isProjectsVisible) {
      setProjectsClicked(false);
    } else if (experienceClicked && isExperienceVisible) {
      setExperienceClicked(false);
    } else if (contactClicked && isContactVisible) {
      setContactClicked(false);
    }
  }, [isHomeVisible, isProjectsVisible, isExperienceVisible, isContactVisible]);

  useEffect(() => {
    if (
      !homeClicked &&
      !projectsClicked &&
      !experienceClicked &&
      !contactClicked
    ) {
      if (isHomeVisible && !isProjectsVisible) {
        setSelected("Home");
      } else if (isProjectsVisible && !isHomeVisible && !isExperienceVisible) {
        setSelected("Projects");
      } else if (
        isExperienceVisible &&
        !isContactVisible &&
        !isProjectsVisible
      ) {
        setSelected("Experience");
      } else if (
        isContactVisible &&
        !isExperienceVisible &&
        !isProjectsVisible
      ) {
        setSelected("Contact");
      }
    }
  }, [isHomeVisible, isProjectsVisible, isExperienceVisible, isContactVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
      exit={{ opacity: 0, y: 0 }}
      className="fixed left-[6.5%] top-[10%] z-[100] gap-y-[10px] flex flex-col max-xl:hidden"
    >
      <a>
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Home"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70 drop-shadow-sm`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70 hover:drop-shadow-sm`
          }`}
          onClick={() => {
            scrollToTop();
            setHomeClicked(true);
            // setTimeout(() => {
            //   setClicked(false);
            // }, 1000);
          }}
          // onClick={() => {
          //   setSelected("Home");
          //   ScrollToTop;
          // }}
        >
          {/* {console.log(scrollNav)} */}
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              selected === "Home" ? `bg-red-300` : `border-[1px] border-red-300`
            }`}
          ></div>

          <p>Home</p>
        </motion.div>
      </a>

      <Link
        to="projects"
        smooth={true}
        duration={50}
        onClick={() => {
          setSelected("Projects");
          setProjectsClicked(true);
          //   setTimeout(() => {
          //     setClicked(false);
          //   }, 500);
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Projects"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70 drop-shadow-sm`
              : `hover:bg-gray-100 hover:drop-shadow-sm rounded-[10px] bg-opacity-70`
          }`}
        >
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              selected === "Projects"
                ? `bg-green-300`
                : `border-[1px] border-green-300`
            }`}
          ></div>
          <p>Projects</p>
        </motion.div>
      </Link>

      <Link
        to="experience"
        smooth={true}
        duration={50}
        onClick={() => {
          setSelected("Experience");
          setExperienceClicked(true);
          //   setTimeout(() => {
          //     setClicked(false);
          //   }, 500);
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Experience"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70 drop-shadow-sm`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70 hover:drop-shadow-sm`
          }`}
        >
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              selected === "Experience"
                ? `bg-blue-300`
                : `border-[1px] border-blue-300`
            }`}
          ></div>
          <p>Experience</p>
        </motion.div>
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={50}
        onClick={() => {
          setSelected("Contact");
          setContactClicked(true);
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Contact"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70 drop-shadow-sm`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70 hover:drop-shadow-sm`
          }`}
        >
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              selected === "Contact"
                ? `bg-orange-300`
                : `border-[1px] border-orange-300`
            }`}
          ></div>
          <p>Contact</p>
        </motion.div>
      </Link>
      {/* <p className="">Projects</p>
      <p className="">Experience</p>
      <p className="">Contact</p> */}
    </motion.div>
  );
};

export default Sidebar;
