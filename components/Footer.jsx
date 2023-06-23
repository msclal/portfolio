import React from "react";
import Image from "next/image";
import logo from "@/public/assets/footer_logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex gap-x-5 justify-center items-center max-sm:text-xs select-none">
      <p>{"Copyright © 2023"}</p>
      <p>{"All right reserved"}</p>
      <Link
        href={
          "https://open.spotify.com/track/1Bv3h7Vc4AaYA2BcSM3rVd?si=4e469ebf81ad41fe"
        }
      >
        <Image
          draggable={false}
          src={logo}
          alt="Mika Logo Footer"
          quality={100}
          className="max-sm:w-20"
        />
      </Link>
    </div>
  );
};

export default Footer;
