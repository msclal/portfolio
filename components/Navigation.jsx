import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { BsToggles } from "react-icons/bs";

const Navigation = () => {
  const [date, setDate] = useState("");
  const [mobileDate, setMobileDate] = useState("");
  const [toggle, setToggle] = useState(false);

  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);
  const [superDuper, setSuperDuper] = useState(false);
  // const[super, setSuper] = useState(false)

  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();

      // Set the time zone to PST (Pacific Standard Time)
      const timeZone = "America/Los_Angeles";

      const formattedDate = currentDate
        .toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: timeZone,
        })
        .replace(/,/g, "");

      const formatteMobileDate = currentDate.toLocaleString("en-US", {
        // weekday: "short",
        // month: "short",
        // day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: timeZone,
      });
      // .replace(/at/i, "");

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
    // {/* DESKTOP */}

    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
      exit={{ opacity: 0, y: 0 }}
      ref={componentRef}
      className="flex justify-between items-center w-full relative mt-2 max-sm:text-sm"
    >
      <p className="font-medium select-none">⌘ mikashanela</p>
      <div className="flex items-center justify-center gap-x-4 max-md:hidden">
        <p className="text-right select-none font-medium">{date} PDT</p>
        <div
          className={` duration-300 cursor-pointer text-lg ${
            toggle ? `w-fit bg-gray-300 p-1 rounded-[5px] bg-opacity-50` : `p-1`
          }`}
        >
          <BsToggles onClick={() => setToggle(!toggle)} />
        </div>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute top-12 right-0 rounded-[20px] bg-gray-300 bg-opacity-50 p-3 space-y-3"
          >
            <div className="flex w-full justify-between items-center bg-gray-200 rounded-[20px] p-3 cursor-pointer pr-0">
              <div className="flex gap-x-3 items-center">
                <div
                  className={`w-[35px] h-[35px] bg-white rounded-full hover:border-[1.8px] hover:border-gray-400 ${
                    light ? `border-[1.5px] border-gray-500` : ``
                  }`}
                  onClick={() => {
                    setLight(true);
                    setDark(false);
                    setSuperDuper(false);
                  }}
                />
                <div
                  className={`w-[35px] h-[35px] bg-gray-400 rounded-full hover:border-[1.8px] hover:border-gray-800 ${
                    dark ? `border-[1.5px] border-gray-900` : ``
                  }`}
                  onClick={() => {
                    setLight(false);
                    setDark(true);
                    setSuperDuper(false);

                    toast.info("Feature Coming Soon!", {
                      position: "top-right",
                      autoClose: 1500,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      transition: Slide,
                      theme: "colored",
                      toastId: "dark",
                    });
                  }}
                ></div>
                <div
                  className={`w-[35px] h-[35px] bg-gradient-to-bl from-[#ffb3b3] via-[#a4b8fd] rounded-full hover:border-[1.8px] hover:border-gray-500 ${
                    superDuper ? `border-[1.5px] border-gray-500` : ``
                  }`}
                  onClick={() => {
                    setLight(false);
                    setDark(false);
                    setSuperDuper(true);

                    toast.info("Feature Coming Soon!", {
                      position: "top-right",
                      autoClose: 1500,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      transition: Slide,
                      theme: "colored",
                      toastId: "super",
                    });
                  }}
                ></div>
              </div>
              {light && (
                <p className="bg-gray-300 px-2 py-1 rounded-[10px] text-center font-medium text-sm">
                  Light Mode
                </p>
              )}
              {dark && (
                <p className="bg-gray-300 px-2 py-1 rounded-[10px] text-center font-medium text-sm">
                  Dark Mode
                </p>
              )}
              {superDuper && (
                <p className="px-2 py-1 rounded-[10px] bg-gradient-to-r from-[#ffb3b3] via-[#a4b8fd] to-[#ffb3b3] text-green-100 text-center font-medium text-sm">
                  {"Feelin'"} Super!
                </p>
              )}
              <ToastContainer />
            </div>
            {/* <iframe
              src="https://open.spotify.com/embed/track/7wYCva1bI1AkHRQoVXhy8F?utm_source=generator"
              width="100%"
              height="80"
              loading="lazy"
              className="select-none"
            ></iframe> */}
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
          </motion.div>
        )}
      </div>

      {/* MOBILE */}
      <div className="md:hidden absolute right-9">{mobileDate} PDT</div>

      <div
        ref={componentRef}
        className="md:hidden fixed right-3 top-[10px] text-[37px] cursor-pointer z-[100]"
        onClick={() => setToggle(!toggle)}
      >
        <BsToggles
          className={`cursor-pointer transition-all ease-in-out duration-100 text-[33px] ${
            scrollNav ? `bg-gray-300 p-2 rounded-[5px] bg-opacity-70` : `p-2`
          }
            ${toggle ? `bg-gray-300 p-2 rounded-[5px] bg-opacity-70` : `p-2`}`}
        />
      </div>
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.07 } }}
          exit={{ opacity: 0, y: 0 }}
          className="md:hidden fixed right-5 top-12 rounded-[10px] bg-gray-300 bg-opacity-70 py-3 px-4 gap-y-4 flex flex-col z-[100]"
        >
          <div className="flex flex-col gap-y-2 text-center">
            <p onClick={ScrollToTop} className="font-medium select-none">
              Home
            </p>
            <Link
              to="projects"
              smooth={true}
              duration={50}
              className="font-medium select-none"
            >
              Projects
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={50}
              className="font-medium select-none"
            >
              Experience
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={50}
              className="font-medium select-none"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-x-3">
            <div
              className={`w-[30px] h-[30px] bg-white rounded-full ${
                light ? `border-[1.5px] border-gray-500` : ``
              }`}
              onClick={() => {
                setLight(true);
                setDark(false);
                setSuperDuper(false);
              }}
            ></div>
            <div
              className={`w-[30px] h-[30px] bg-gray-400 rounded-full ${
                dark ? `border-[1.5px] border-gray-900` : ``
              }`}
              onClick={() => {
                setLight(false);
                setDark(true);
                setSuperDuper(false);

                toast.info("Feature Coming Soon!", {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  transition: Slide,
                  theme: "colored",
                  toastId: "dark",
                });
              }}
            />
            <div
              className={`w-[30px] h-[30px] bg-gradient-to-bl from-[#ffb3b3] via-[#a4b8fd] rounded-full ${
                superDuper ? `border-[1.5px] border-gray-500` : ``
              }`}
              onClick={() => {
                setLight(false);
                setDark(false);
                setSuperDuper(true);

                toast.info("Feature Coming Soon!", {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  transition: Slide,
                  theme: "colored",
                  toastId: "dark",
                });
              }}
            ></div>
          </div>
          {light && (
            <p className="bg-gray-300 px-2 py-1 rounded-[10px] text-center font-semibold border-[0.5px] border-gray-400">
              Light
            </p>
          )}
          {dark && (
            <p className="bg-gray-300 px-2 py-1 rounded-[10px] text-center font-semibold border-[0.5px] border-gray-400">
              Dark
            </p>
          )}
          {superDuper && (
            <p className="px-2 py-1 rounded-[10px] bg-gradient-to-r from-[#ffb3b3] via-[#a4b8fd] to-[#ffb3b3] text-center font-semibold border-[0.5px] border-gray-400 text-green-100">
              Super!
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navigation;
