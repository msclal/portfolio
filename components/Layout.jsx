import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="font-inter min-h-screen h-full w-full flex justify-center">
      <div className="flex flex-col w-full lg:w-[80%] xl:w-2/3 h-full max-lg:px-5 py-2 gap-y-5">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
