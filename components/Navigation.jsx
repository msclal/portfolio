import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsToggles } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Navigation = () => {
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const currentDate = new Date();
    const pstDate = currentDate
      .toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })
      .replace(/,/g, "");
    setDate(pstDate);
  }, []);

  return (
    <div className="flex justify-between items-center w-full relative">
      <p className="font-medium">mikashanela</p>
      <div className="flex items-center gap-x-4 max-md:hidden">
        <BsToggles />
        <p>{date}</p>
      </div>
      <div
        className="md:hidden fixed right-5 top-3 text-2xl"
        onClick={() => setToggle(!toggle)}
      >
        <BsToggles />
      </div>
      {toggle && (
        <div className="md:hidden fixed right-5 top-12 rounded-[10px] bg-gray-300 py-3 px-4 gap-y-4 flex flex-col">
          <div className="flex flex-col gap-y-2">
            <Link href="#home">Home</Link>
            <Link href="#projects">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#projects">Contact</Link>
          </div>
          <div className="flex items-center gap-x-3 bg-gray-200 rounded-[20px] p-3 py-1">
            <BsFillMoonFill />
            <p className="font-medium">Dark</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
