import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdFolderShared } from "react-icons/md";

const Stats = () => {
  const [bestDay, setBestDay] = useState("");
  const [avg, setAvg] = useState("");
  const [lang1, setLang1] = useState("");
  const [lang2, setLang2] = useState("");
  const [lang3, setLang3] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/wakatime");
        if (!response.ok) {
          throw new Error("Failed to fetch Wakatime data");
        }

        const wakaData = await response.json();
        // console.log(wakaData.data);
        setBestDay(wakaData?.data?.best_day?.text);
        setAvg(wakaData?.data?.human_readable_daily_average);
        setLang1(wakaData?.data?.languages[0]?.name.toLowerCase());
        setLang2(wakaData?.data?.languages[1]?.name.toLowerCase());
        setLang3(wakaData?.data?.languages[2]?.name.toLowerCase());
      } catch (error) {
        console.error("Error fetching Wakatime data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 3 } }}
      exit={{ opacity: 0, y: 0 }}
      className=" md:w-[38%] h-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="rounded-[15px] rounded-t-[10px] bg-[#17171a] bg-opacity-80 text-green-600 absolute duration-700 md:hover:-translate-y-[3px] md:hover:shadow-lg h-[480px] shadow-sm  text-sm lg:text-[15px] w-full">
        <div className="bg-[#636466] rounded-t-[10px] h-[28px] w-full absolute p-2 flex gap-x-[6px]">
          <div
            className={`w-[10px] h-[10px] absolute top-2.5 ${
              !isHovering ? `bg-[#444852]` : `bg-[#ff5e57]`
            } rounded-full`}
          ></div>
          <div
            className={`w-[10px] h-[10px] absolute left-6 top-2.5 ${
              !isHovering ? `bg-[#444852]` : `bg-[#febc2e]`
            } rounded-full`}
          ></div>
          <div
            className={`w-[10px] h-[10px] absolute left-10 top-2.5 ${
              !isHovering ? `bg-[#444852]` : `bg-[#28c841]`
            } rounded-full`}
          ></div>
          <div className="w-full flex justify-center items-center">
            <div className="flex items-center justify-center gap-x-1 text-sm max-xl:hidden">
              <MdFolderShared className="text-blue-300" />
              <p className="text-center font-semibold max-md:text-sm text-gray-300">
                mika - ~/wakatime
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-1 text-sm xl:hidden">
              <MdFolderShared className="text-blue-300" />
              <p className="text-center font-semibold max-md:text-sm text-gray-300">
                mika - ~/wakatime
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 mt-5 xl:mt-6 font-robotoMono">
          <div className="space-y-4 xl:space-y-8 xlg:space-y-2 text-xs xl:text-[13px]">
            <div className="">
              <div className="flex gap-x-5">
                <p>$</p>
                <p>echo $most_active_week</p>
              </div>
              <div className="flex gap-x-5 text-gray-400">
                <p>{">"}</p>
                <p> 88 hrs 40 mins (03/27/23-04/03/23) </p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-5">
                <p>$</p>
                <p>echo $most_active_day</p>
              </div>
              <div className="flex gap-x-5 text-gray-400">
                <p>{">"}</p>
                <p> 19 hrs 21 mins (03/30/23) </p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-5">
                <p>$</p>
                <p>echo $top_projects</p>
              </div>
              <div className="flex gap-x-5 text-gray-400">
                <p>{">"}</p>
                <p>project-methinks, citrushack2023, portfolio</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-5">
                <p>$</p>
                <p>echo $top_languages_this_month</p>
              </div>
              <div className="flex gap-x-5 text-gray-400">
                <p>{">"}</p>
                <p>
                  {lang1 || `javascript`}, {lang2 || `css`},{" "}
                  {lang3 || `typescript`}
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-5">
                <p>$</p>
                <p>echo $best_day_this_month</p>
              </div>
              <div className="flex gap-x-5 text-gray-400">
                <p>{">"}</p>
                <p>{bestDay || `10 hrs 9 mins`}</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-5">
                <p>$</p>
                <p>echo $daily_avg_this_month</p>
              </div>
              <div className="flex gap-x-5 text-gray-400">
                <p>{">"}</p>
                <p>{avg || `2 hrs 17 mins`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
