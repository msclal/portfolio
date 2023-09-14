import React, { useRef, useState } from "react";
import Link from "next/link";
import { event } from "../lib/ga";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLink } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { SiSpotify } from "react-icons/si";

const Contact = ({ contactRef }) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !message) {
      return;
    }
    toast.success("Note sent!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      theme: "colored",
    });
    setName("");
    setMessage("");

    // console.log("message sent");

    emailjs.sendForm(
      "service_b4zeagj",
      "template_yhu4oxn",
      form.current,
      "qeO4HSGIUHIOmFwlG"
    );
  };

  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (name && message) {
        sendEmail(e);
      }
    }
  };
  return (
    <motion.div
      id="contact"
      ref={contactRef}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 3.2 } }}
      exit={{ opacity: 0, y: 0 }}
      className="w-full md:w-1/2 h-[520px] md:h-[550px]"
    >
      <ToastContainer />
      <div className="duration-700 md:hover:-translate-y-[3px] md:hover:shadow-lg shadow-sm p-5 bg-[#F5F6F6] rounded-[20px] bg-opacity-90 flex flex-col gap-y-6 h-full">
        <p className="font-semibold text-lg select-none">Contact</p>
        <div className="flex justify-between items-center">
          <p className="font-medium max-xs:text-sm">Resume</p>
          <Link
            href="mika_shanela_resume.pdf"
            aria-label="Mika Shanela Resume"
            alt="Mika Shanela Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit gap-x-1 flex items-center cursor-pointer text-gray-500 hover:text-gray-700 duration-300"
            onClick={() =>
              event({
                action: "contact_click",
                params: {
                  link: "resume",
                },
              })
            }
          >
            View
            <AiOutlineLink className="text-2xl" />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium max-xs:text-sm">Message</p>
          <div className="flex gap-x-3 text-lg">
            <Link
              href="mailto:mikashanela.dev@gmail.com"
              aria-label="Mail"
              className="w-fit p-2 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[0.7px] md:hover:text-purple-200"
              onClick={() =>
                event({
                  action: "contact_click",
                  params: {
                    link: "mail",
                  },
                })
              }
            >
              <FiMail />
            </Link>
            <Link
              href={"tel:9092145009"}
              aria-label="Phone"
              className="w-fit p-2 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[0.7px] md:hover:text-yellow-200"
              onClick={() =>
                event({
                  action: "contact_click",
                  params: {
                    link: "phone",
                  },
                })
              }
            >
              <ImPhone />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium max-xs:text-sm">Socials</p>
          <div className="flex gap-x-3 text-lg">
            <Link
              href="https://github.com/msclal"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit p-2 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[0.7px] md:hover:text-gray-800"
              onClick={() =>
                event({
                  action: "contact_click",
                  params: {
                    link: "Github",
                  },
                })
              }
            >
              <AiFillGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mika-shanela/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              className="w-fit p-2 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[0.7px] md:hover:text-blue-200"
              onClick={() =>
                event({
                  action: "contact_click",
                  params: {
                    link: "LinkedIn",
                  },
                })
              }
            >
              <ImLinkedin2 />
            </Link>
            <Link
              href="https://www.instagram.com/mikashanela/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              className="w-fit p-2 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[0.7px] md:hover:text-red-200"
              onClick={() =>
                event({
                  action: "contact_click",
                  params: {
                    link: "instagram",
                  },
                })
              }
            >
              <GrInstagram />
            </Link>
            <Link
              href="https://open.spotify.com/user/msclal?si=6bebb6c33fe24174"
              target="_blank"
              aria-label="Spotify"
              rel="noopener noreferrer"
              className="w-fit p-2 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300 hover:-translate-y-[0.7px] md:hover:text-green-200"
              onClick={() =>
                event({
                  action: "contact_click",
                  params: {
                    link: "spotify",
                  },
                })
              }
            >
              <SiSpotify />
            </Link>
          </div>
        </div>
        <span className="border-[0.7px] border-gray-400 mx-2 my-2"></span>
        <div className="space-y-4">
          <p className="font-semibold text-lg select-none">Leave a Note</p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-1 md:space-y-3"
          >
            <div className="flex flex-col gap-y-1">
              <label className="select-none max-xs:text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className="w-2/3 rounded-[10px] py-1 px-2 focus:outline outline-blue-800"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                onKeyUp={handleKeypress}
              />
            </div>
            <div className="space-y-1">
              <label className="select-none max-xs:text-sm">Message</label>
              <textarea
                name="message"
                value={message}
                className="w-full py-1 px-2 rounded-[10px] focus:outline outline-blue-800"
                autoComplete="off"
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeypress}
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="bg-gray-500 hover:bg-gray-600 cursor-pointer text-sm w-fit text-white px-2 py-1 rounded-[10px] select-none duration-300 hover:-translate-y-[0.7px] max-xs:text-sm"
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
