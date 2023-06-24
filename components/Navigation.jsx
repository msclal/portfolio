import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsToggles } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Navigation = () => {
  const [date, setDate] = useState("");
  const [mobileDate, setMobileDate] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate
        .toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .replace(/,/g, "");

      const formatteMobileDate = currentDate
        .toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .replace(/at/i, "");
      setDate(formattedDate);
      setMobileDate(formatteMobileDate);
    }, 1000); // Update every second (1000 milliseconds)

    return () => {
      clearInterval(timer); // Cleanup function to clear the interval when component unmounts
    };
  }, []);

  //   nav button will have a bg after a certain scroll
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex justify-between items-center w-full relative">
      <p className="font-medium select-none">mikashanela</p>
      <div className="flex items-center gap-x-4 max-md:hidden">
        <p className="text-right select-none font-medium">{date} PST</p>
        <div
          className={` duration-300 cursor-pointer text-lg ${
            toggle ? `w-fit bg-gray-300 p-1 rounded-[5px] bg-opacity-50` : `p-1`
          }`}
        >
          <BsToggles onClick={() => setToggle(!toggle)} />
        </div>
        {toggle && (
          <div className="absolute top-12 right-0 rounded-[20px] bg-gray-300 bg-opacity-50 p-3 space-y-3">
            <div className="flex justify-between items-center gap-x-3 bg-gray-200 rounded-[20px] p-3 pl-1 py-1 cursor-pointer">
              <div className="w-fit bg-white bg-opacity-50 rounded-full p-2">
                <BsFillMoonFill />
              </div>
              <p className="font-medium select-none">Dark Mode</p>
            </div>
            <iframe
              src="https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator"
              width="100%"
              height="80"
              allowFullScreen=""
              as="style"
              priority="low"
              loading="lazy"
              className="select-none"
            />
          </div>
        )}
      </div>
      <div className="md:hidden absolute right-12">{mobileDate}</div>

      <div
        className="md:hidden fixed right-5 top-[3px] text-[37px] cursor-pointer z-[100]"
        onClick={() => setToggle(!toggle)}
      >
        <BsToggles
          className={`cursor-pointer transition-all ease-in-out duration-100 ${
            scrollNav ? `bg-gray-300 p-2 rounded-[5px] bg-opacity-70` : `p-2`
          }
            ${toggle ? `bg-gray-300 p-2 rounded-[5px] bg-opacity-70` : `p-2`}`}
        />
      </div>
      {toggle && (
        <div className="md:hidden fixed right-5 top-12 rounded-[10px] bg-gray-300 bg-opacity-70 py-3 px-4 gap-y-4 flex flex-col z-[100]">
          <div className="flex flex-col gap-y-2 text-center">
            <p onClick={ScrollToTop} className="font-medium select-none">
              Home
            </p>
            <Link href="#contact" className="font-medium select-none">
              Experience
            </Link>
            <Link href="#projects" className="font-medium select-none">
              Projects
            </Link>
            <Link href="#contact" className="font-medium select-none">
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
