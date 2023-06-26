import React from "react";

const Headphones = () => {
  return (
    <>
      <div className="max-sm:hidden w-full md:w-1/2 sm:h-[550px] bg-gradient-to-b from-[#c1dff9] to-[#fcf5eb] bg-opacity-50 rounded-[20px] max-sm:pb-1 p-5 md:p-5 space-y-3">
        <p className="font-semibold text-xl md:text-2xl select-none text-white">
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
      <div className="sm:hidden w-full h-[150px] bg-gradient-to-br from-[#dbcdb0] to-[#a48c44] rounded-[20px] pb-1 p-3 space-y-3">
        <p className="font-semibold text-xl select-none text-white">
          {"What's on my Headphones?"}
        </p>
        <div className="w-full h-full">
          <iframe
            src="https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator"
            width="100%"
            loading="lazy"
            className="h-[75%]"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Headphones;
