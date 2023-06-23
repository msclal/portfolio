import React, { useState, useEffect } from "react";
import { BsToggles } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Navigation = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const pstDate = currentDate
      .toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })
      .replace(/,/g, "");
    setDate(pstDate);
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-full">
      <p className="font-medium">mikashanela</p>
      <div className="flex items-center gap-x-4 max-md:hidden">
        <BsToggles />
        <p>{date}</p>
      </div>
      <div className="md:hidden">
        <BsFillMoonFill />
      </div>
    </div>
  );
};

export default Navigation;
