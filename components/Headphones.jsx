import React from "react";

const Headphones = () => {
  return (
    <div
      id="contact"
      className="w-full md:w-1/2 h-[150px] sm:h-[550px] bg-gray-200 bg-opacity-50 rounded-[20px] max-sm:pb-1 p-3 md:p-5 space-y-3"
    >
      <p className="font-semibold text-xl md:text-2xl select-none">
        {"What's on my Headphones?"}
      </p>
      <div className="w-full h-full">
        <iframe
          src="https://open.spotify.com/embed/playlist/42UDhwHjTGGg7J5ny0WVXU?utm_source=generator"
          width="100%"
          loading="lazy"
          className="h-[75%] sm:h-[90%]"
        ></iframe>
      </div>
    </div>
  );
};

export default Headphones;
