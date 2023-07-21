import React from "react";
import { motion } from "framer-motion";
const Headphones = () => {
  return (
    <>
      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 3.2 } }}
        exit={{ opacity: 0, y: 0 }}
        className="max-sm:hidden w-full md:w-1/2"
        // className="max-sm:hidden w-full md:w-1/2 sm:h-[550px] bg-gradient-to-bl to-[#c1dff9] from-[#fcf5eb] bg-opacity-50 rounded-[20px] max-sm:pb-1 p-5 md:p-5 space-y-3"
      >
        <div className="duration-700 md:hover:-translate-y-[3px] md:hover:drop-shadow-lg drop-shadow-sm bg-gradient-to-br to-[#c1dff9] from-[#547fa5] bg-opacity-50 rounded-[20px] max-sm:pb-1 p-5 md:p-5 space-y-3 sm:h-[550px]">
          <p className="font-semibold text-xl select-none text-[#fefefe]">
            {"What's on my Headphones?"}
          </p>
          <div className="w-full h-full">
            <iframe
              src="https://open.spotify.com/embed/playlist/42UDhwHjTGGg7J5ny0WVXU?utm_source=generator"
              width="100%"
              loading="lazy"
              className="h-[90%]"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 3.2 } }}
        exit={{ opacity: 0, y: 0 }}
        // className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#b4a37b71] to-[#949494] rounded-[20px] pb-1 p-3 space-y-3"
        className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#b8a781] to-[#746346] rounded-[20px] pb-1 p-3 space-y-3 drop-shadow-sm"
        // className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#dbcdb0] to-[#a48c44] rounded-[20px] pb-1 p-3 space-y-3"
      >
        <p className="font-semibold text-lg select-none text-white">
          {"What's on my Headphones?"}
        </p>
        <div className="w-full h-full">
          {/* <iframe
            src="https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator"
            width="100%"
            loading="lazy"
            className="h-[75%]"
          ></iframe> */}
          <iframe
            src="https://open.spotify.com/embed/track/7wYCva1bI1AkHRQoVXhy8F?utm_source=generator"
            width="100%"
            loading="lazy"
            className="h-[75%]"
          ></iframe>
          {/* <iframe
            src="https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator"
            width="100%"
            loading="lazy"
            className="h-[75%]"
          ></iframe> */}
        </div>
      </motion.div>
    </>
  );
};

export default Headphones;
