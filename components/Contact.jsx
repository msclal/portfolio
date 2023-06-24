import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="w-full md:w-1/2 h-[520px] md:h-[550px] p-3 md:p-5 bg-gray-200 rounded-[20px] bg-opacity-50 flex flex-col gap-y-5">
      <p className="font-semibold text-xl md:text-2xl select-none">Contact</p>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Resume</p>
        <AiOutlineLink className="text-2xl" />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Message</p>
        <div className="flex gap-x-3 text-lg">
          <div className="w-fit p-3 bg-white rounded-[10px]">
            <FiMail />
          </div>
          <div className="w-fit p-3 bg-white rounded-[10px]">
            <AiFillGithub />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium md:text-lg">Socials</p>
        <div className="flex gap-x-3 text-lg">
          <div className="w-fit p-3 bg-white rounded-[10px]">
            <FiMail />
          </div>
          <div className="w-fit p-3 bg-white rounded-[10px]">
            <AiFillGithub />
          </div>
          <div className="w-fit p-3 bg-white rounded-[10px]">
            <ImLinkedin2 />
          </div>
        </div>
      </div>
      <span className="border-[0.5px] border-gray-400 my-2"></span>
      <div className="space-y-3">
        <p className="font-semibold text-xl md:text-2xl select-none">
          Leave a Note
        </p>
        <div className="space-y-1">
          <p className="select-none">Subject</p>
          <input
            type="text"
            className="w-2/3 rounded-[10px] py-1 px-2 focus:outline-none"
            autoComplete="off"
          />
        </div>
        <div className="space-y-1">
          <p className="select-none">Message</p>
          <textarea
            className="w-full py-1 px-2 rounded-[10px] focus:outline-none"
            autoComplete="off"
          />
        </div>
        <p className="bg-gray-500 text-sm w-fit text-white px-2 py-1 rounded-[10px] select-none">
          Send
        </p>
      </div>
    </div>
  );
};

export default Contact;
