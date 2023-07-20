import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Sidebar = () => {
  const ScrollToTop = () => {
    setSelected("Home");
    window.scrollTo(0, 0);
  };

  const [selected, setSelected] = useState("Home");
  console.log(selected);
  return (
    <div className="fixed left-[7%] top-[10%] z-[100] gap-y-[10px] flex flex-col max-xl:hidden">
      <Link smooth={true} duration={50}>
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Home"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70`
          }`}
          onClick={ScrollToTop}
          // onClick={() => {
          //   setSelected("Home");
          //   ScrollToTop;
          // }}
        >
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              selected === "Home" ? `bg-red-300` : `border-[1px] border-red-300`
            }`}
          ></div>

          <p>Home</p>
        </motion.div>
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={50}
        onClick={() => setSelected("Projects")}
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Projects"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70`
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
        onClick={() => setSelected("Experience")}
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Experience"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70`
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
        onClick={() => setSelected("Contact")}
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.995 }}
          className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
            selected === "Contact"
              ? `bg-gray-200 rounded-[10px] bg-opacity-70`
              : `hover:bg-gray-100 rounded-[10px] bg-opacity-70`
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
    </div>
  );
};

export default Sidebar;
