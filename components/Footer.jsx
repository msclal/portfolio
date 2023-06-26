import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/assets/footer_logo.svg";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 3.2 } }}
      exit={{ opacity: 0, y: -20 }}
      className="flex gap-x-5 justify-center items-center max-sm:text-xs select-none my-5 md:my-10"
    >
      <p>
        {"Copyright © "} {currentYear}
      </p>
      <p>{"All right reserved"}</p>
      <Link
        href={
          "https://open.spotify.com/artist/74XFHRwlV6OrjEM0A2NCMF?si=d7JGuPJ3RW6FqVGrap3M8A"
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
    </motion.div>
  );
};

export default Footer;
