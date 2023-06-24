import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLink } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  const form = useRef();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!subject || !message) {
      return;
    }
    toast.success("Message sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setSubject("");
    setMessage("");

    console.log("message sent");

    emailjs.sendForm(
      "service_b4zeagj",
      "template_yhu4oxn",
      form.current,
      "qeO4HSGIUHIOmFwlG"
    );
  };
  return (
    <div className="w-full md:w-1/2 h-[520px] md:h-[550px] p-5 bg-gray-200 rounded-[20px] bg-opacity-50 flex flex-col gap-y-5">
      <p className="font-semibold text-xl md:text-2xl select-none">Contact</p>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Resume</p>
        <div className="w-fit gap-x-1 flex items-center cursor-pointer text-gray-600">
          <p className="">View</p>
          <AiOutlineLink className="text-2xl" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Message</p>
        <div className="flex gap-x-3 text-lg">
          <div className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px]">
            <FiMail />
          </div>
          <div className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px]">
            <ImPhone />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Socials</p>
        <div className="flex gap-x-3 text-lg">
          <div className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px]">
            <GrInstagram />
          </div>
          <div className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px]">
            <AiFillGithub />
          </div>
          <div className="w-fit p-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer rounded-[10px]">
            <ImLinkedin2 />
          </div>
        </div>
      </div>
      <span className="border-[1px] border-gray-400 mx-2 my-2"></span>
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
            <label className="select-none">Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              className="w-2/3 rounded-[10px] py-1 px-2 focus:outline-none"
              autoComplete="off"
              onChange={(e) => setSubject(e.target.value)}
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
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="bg-gray-500 hover:bg-gray-600 cursor-pointer text-sm w-fit text-white px-2 py-1 rounded-[10px] select-none"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
