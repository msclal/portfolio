import React from "react";
import Image from "next/image";
import logo from "@/public/assets/footer_logo.svg";

const Footer = () => {
  return (
    <div className="flex gap-x-5 justify-center items-center max-sm:text-xs">
      <p>{"Copyright © 2023"}</p>
      <p>{"All right reserved"}</p>
      <Image
        src={logo}
        alt="Mika Logo Footer"
        quality={100}
        className="max-sm:w-20"
      />
    </div>
  );
};

export default Footer;
