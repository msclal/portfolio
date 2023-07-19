import React, { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("Home");
  console.log(selected);
  return (
    <div className="fixed left-[7%] top-[12%] z-[100] space-y-4">
      <div
        className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
          selected === "Home" ? `bg-gray-300 rounded-[10px] bg-opacity-70` : ``
        }`}
        onClick={() => setSelected("Home")}
      >
        <div
          className={`w-[15px] h-[15px] rounded-full ${
            selected === "Home" ? `bg-red-800` : `bg-red-200`
          }`}
        ></div>
        <p>Home</p>
      </div>

      <div
        className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
          selected === "Projects"
            ? `bg-gray-300 rounded-[10px] bg-opacity-70`
            : ``
        }`}
        onClick={() => setSelected("Projects")}
      >
        <div
          className={`w-[15px] h-[15px] rounded-full ${
            selected === "Projects" ? `bg-green-800` : `bg-green-200`
          }`}
        ></div>
        <p>Projects</p>
      </div>

      <div
        className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
          selected === "Experience"
            ? `bg-gray-300 rounded-[10px] bg-opacity-70`
            : ``
        }`}
        onClick={() => setSelected("Experience")}
      >
        <div
          className={`w-[15px] h-[15px] rounded-full ${
            selected === "Experience" ? `bg-blue-800` : `bg-blue-200`
          }`}
        ></div>
        <p>Experience</p>
      </div>

      <div
        className={`flex gap-x-3 items-center py-1 px-3 cursor-pointer duration-100 ${
          selected === "Contact"
            ? `bg-gray-300 rounded-[10px] bg-opacity-70`
            : ``
        }`}
        onClick={() => setSelected("Contact")}
      >
        <div
          className={`w-[15px] h-[15px] rounded-full ${
            selected === "Contact" ? `bg-orange-800` : `bg-orange-200`
          }`}
        ></div>
        <p>Contact</p>
      </div>
      {/* <p className="">Projects</p>
      <p className="">Experience</p>
      <p className="">Contact</p> */}
    </div>
  );
};

export default Sidebar;
