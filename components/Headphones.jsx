import React from "react";
import { event } from "../lib/ga";
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
      >
        <div className="duration-700 md:hover:-translate-y-[3px] md:hover:shadow-lg shadow-sm bg-gradient-to-br to-[#f9b8cb] from-[#cc4d71] bg-opacity-50 rounded-[20px] max-sm:pb-1 p-5 md:p-5 space-y-3 sm:h-[550px]">
          <p className="font-semibold text-xl select-none text-[#ffe7f3]">
            {"What's on my Headphones?"}
          </p>
          <div className="w-full h-full">
            <iframe
              title="Mika's Spotify Playlist"
              src="https://open.spotify.com/embed/playlist/42UDhwHjTGGg7J5ny0WVXU?utm_source=generator"
              width="100%"
              loading="lazy"
              className="h-[90%]"
              onClick={() =>
                event({
                  action: "headphones_clicked",
                  params: {
                    link: "spotify",
                  },
                })
              }
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 3.2 } }}
        exit={{ opacity: 0, y: 0 }}
        // className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#b8b4b4] to-[#4d4b4b] rounded-[20px] pb-1 p-3 space-y-3 shadow-sm"
        // className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#b8a781] to-[#746346] rounded-[20px] pb-1 p-3 space-y-3 shadow-sm"
        className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#cdb77d] to-[#9c7c25] rounded-[20px] pb-1 p-3 space-y-3 shadow-sm"
      >
        <p className="font-semibold text-lg select-none text-white">
          {"What's on my Headphones?"}
        </p>
        <div className="w-full h-full">
          <iframe
            title="Mika's Favorite Spotify Song"
            src="https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator"
            // src="https://open.spotify.com/embed/track/2bfOeIn8bQkRr02NNX29tR?utm_source=generator"
            width="100%"
            loading="lazy"
            className="h-[75%]"
            onClick={() =>
              event({
                action: "headphones_clicked",
                params: {
                  link: "spotify",
                },
              })
            }
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default Headphones;
