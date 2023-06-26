import React, { useRef, useState } from "react";
import Link from "next/link";
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

const Contact = () => {
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

    console.log("message sent");

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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 3.2 } }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full md:w-1/2 h-[520px] md:h-[550px] p-5 bg-[#ebedee] rounded-[20px] bg-opacity-50 flex flex-col gap-y-5"
    >
      <p className="font-semibold text-xl md:text-2xl select-none">Contact</p>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Resume</p>
        <Link
          href="resume.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit gap-x-1 flex items-center cursor-pointer text-gray-500"
        >
          View
          <AiOutlineLink className="text-2xl" />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Message</p>
        <div className="flex gap-x-3 text-lg">
          <Link
            href="mailto:mikashanela.dev@gmail.com"
            className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300"
          >
            <FiMail />
          </Link>
          <Link
            href={"tel:9092145009"}
            className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300"
          >
            <ImPhone />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Socials</p>
        <div className="flex gap-x-3 text-lg">
          <Link
            href="https://github.com/msclal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mika-shanela/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300"
          >
            <ImLinkedin2 />
          </Link>
          <Link
            href="https://www.instagram.com/mikashanela/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px] duration-300"
          >
            <GrInstagram />
          </Link>
        </div>
      </div>
      <span className="border-[0.7px] border-gray-400 mx-2 my-2"></span>
      <div className="space-y-3">
        <p className="font-semibold text-xl md:text-2xl select-none">
          Leave a Note
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-1 md:space-y-3"
        >
          <div className="flex flex-col gap-y-1">
            <label className="select-none">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="w-2/3 rounded-[10px] py-1 px-2 focus:outline-none"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              onKeyUp={handleKeypress}
            />
          </div>
          <div className="space-y-1">
            <label className="select-none">Message</label>
            <textarea
              name="message"
              value={message}
              className="w-full py-1 px-2 rounded-[10px] focus:outline-none"
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={handleKeypress}
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="bg-gray-500 hover:bg-gray-600 cursor-pointer text-sm w-fit text-white px-2 py-1 rounded-[10px] select-none duration-300"
          />
        </form>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default Contact;
