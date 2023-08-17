import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="font-inter min-h-screen h-full w-full flex justify-center">
      <div className="flex flex-col w-full lg:w-[80%] xl:w-[65%] h-full py-2 px-5 gap-y-2 md:gap-y-5">
        <Navigation />
        <div className="flex flex-col gap-y-5 md:gap-y-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
