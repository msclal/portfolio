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
    <div
      id="home"
      className="flex justify-between items-center w-full relative pt-2"
    >
      <p className="font-medium select-none">mikashanela</p>
      <div className="flex items-center gap-x-4 max-md:hidden">
        <div
          className={`cursor-pointer ${
            toggle ? `w-fit bg-gray-300 p-1 rounded-[5px] bg-opacity-50` : `p-1`
          }`}
        >
          <BsToggles onClick={() => setToggle(!toggle)} />
        </div>
        <p className="select-none">{date}</p>
        {toggle && (
          <div className="absolute top-12 right-48 rounded-[20px] bg-gray-300 bg-opacity-50 p-3 space-y-3">
            <div className="flex justify-between items-center gap-x-3 bg-gray-200 rounded-[20px] p-3 pl-1 py-1 cursor-pointer">
              <div className="w-fit bg-white bg-opacity-70 rounded-full p-2">
                <BsFillMoonFill />
              </div>
              <p className="font-medium select-none">Dark Mode</p>
            </div>
            <iframe
              src="https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator"
              width="100%"
              height="80"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="select-none"
            />
          </div>
        )}
      </div>
      <div
        className="md:hidden fixed right-5 top-1 text-4xl cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <BsToggles
          //   id="home"
          className={`cursor-pointer ${
            toggle ? `bg-gray-300 p-2 rounded-[5px] bg-opacity-50` : `p-2`
          }`}
        />
      </div>
      {toggle && (
        <div className="md:hidden fixed right-5 top-12 rounded-[10px] bg-gray-300 bg-opacity-50 py-3 px-4 gap-y-4 flex flex-col">
          <div className="flex flex-col gap-y-2">
            <Link href="#home" className="select-none">
              Home
            </Link>
            <Link href="#projects" className="select-none">
              Experience
            </Link>
            <Link href="#projects" className="select-none">
              Projects
            </Link>
            <Link href="#projects" className="select-none">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-x-3 bg-gray-200 rounded-[20px] p-3 py-1">
            <BsFillMoonFill />
            <p className="font-medium select-none">Dark</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
