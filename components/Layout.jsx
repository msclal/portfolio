import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="font-inter min-h-screen h-full w-full flex justify-center">
      <div className="flex flex-col w-full lg:w-[80%] xl:w-[60%] h-full py-2 px-5 gap-y-5 md:gap-y-8">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
