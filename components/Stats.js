// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { MdFolderShared } from "react-icons/md";

// const Stats = () => {
//   const [bestDay, setBestDay] = useState("");
//   const [avg, setAvg] = useState("");
//   const [lang1, setLang1] = useState("");
//   const [lang2, setLang2] = useState("");
//   const [lang3, setLang3] = useState("");
//   const [date, setDate] = useState("");
//   const [isHovering, setIsHovering] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/wakatime");
//         if (!response.ok) {
//           throw new Error("Failed to fetch Wakatime data");
//         }

//         const wakaData = await response.json();
//         console.log(wakaData.data);
//         setBestDay(wakaData?.data?.best_day?.text);
//         // console.log(bestDay);
//         setAvg(wakaData?.data?.human_readable_daily_average);
//         setLang1(wakaData?.data?.languages[0]?.name.toLowerCase());
//         setLang2(wakaData?.data?.languages[1]?.name.toLowerCase());
//         setLang3(wakaData?.data?.languages[2]?.name.toLowerCase());
//         // console.log(wakaData?.data?.languages[0]);
//         // console.log(lang1);
//         // console.log(avg);
//         // Process the data as required to prepare the chartData object
//         // const chartData = {
//         // };

//         // setChartData(chartData);
//       } catch (error) {
//         console.error("Error fetching Wakatime data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const currentDate = new Date();

//       // Set the time zone to PST (Pacific Standard Time)
//       const timeZone = "America/Los_Angeles";

//       const formattedDate = currentDate
//         .toLocaleString("en-US", {
//           weekday: "short",
//           month: "short",
//           day: "numeric",
//           hour: "numeric",
//           minute: "numeric",
//           hour12: false,
//           timeZone: timeZone,
//         })
//         .replace(/,/g, "");

//       setDate(formattedDate);
//     }, 1000); // Update every second (1000 milliseconds)
//     return () => {
//       clearInterval(timer); // Cleanup function to clear the interval when component unmounts
//     };
//   }, []);
//   //   console.log(date);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 0 }}
//       animate={{ opacity: 1, y: 0, transition: { delay: 3 } }}
//       exit={{ opacity: 0, y: 0 }}
//       className="max-md:hidden md:w-[38%] max-h-[480px] rounded-[15px] rounded-t-[10px] bg-[#17171a] bg-opacity-80 text-green-600 relative duration-700 md:hover:-translate-y-[3px] md:hover:drop-shadow-lg"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* <motion.div className="duration-700 md:hover:-translate-y-[3px] md:hover:drop-shadow-lg"> */}
//       {/* <div>
//         <span className="h-[15px] w-[15px] bg-red-100">f</span>
//       </div> */}
//       {/* <div className="max-md:hidden md:w-[38%] bg-black bg-opacity-80 rounded-[10px] text-green-600"> */}
//       <div className="bg-[#636466] rounded-t-[10px] h-[28px] w-full absolute p-2 flex gap-x-[6px]">
//         <div
//           className={`w-[10px] h-[10px] absolute top-2.5 ${
//             !isHovering ? `bg-[#444852]` : `bg-[#ff5e57]`
//           } rounded-full`}
//         ></div>
//         <div
//           className={`w-[10px] h-[10px] absolute left-6 top-2.5 ${
//             !isHovering ? `bg-[#444852]` : `bg-[#febc2e]`
//           } rounded-full`}
//         ></div>
//         <div
//           className={`w-[10px] h-[10px] absolute left-10 top-2.5 ${
//             !isHovering ? `bg-[#444852]` : `bg-[#28c841]`
//           } rounded-full`}
//         ></div>
//         <div className="w-full flex justify-center items-center">
//           <div className="flex items-center justify-center gap-x-1 text-sm max-xl:hidden">
//             {/* <div className="flex items-center justify-center gap-x-1 absolute left-[22%] top-[4.5px] text-sm max-[800px]:hidden"> */}
//             <MdFolderShared className="text-blue-300" />
//             <p className="text-center font-semibold max-md:text-sm">
//               mikusroomonfire - ~/wakatime
//             </p>
//           </div>
//           <div className="flex items-center justify-center gap-x-1 text-sm xl:hidden">
//             {/* <div className="flex items-center justify-center gap-x-1 absolute left-[22%] top-[4.5px] text-sm max-[800px]:hidden"> */}
//             <MdFolderShared className="text-blue-300" />
//             <p className="text-center font-semibold max-md:text-sm">
//               mika - ~/wakatime
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="p-5 mt-7">
//         <div className="space-y-4 max-[800px]:text-sm max-xl:text-[15px]">
//           <div className="">
//             <div className="flex gap-x-5">
//               <p>$</p>
//               <p>echo $most_active_week</p>
//             </div>
//             <div className="flex gap-x-5 text-gray-400">
//               <p>{">"}</p>
//               <p> 88 hrs 40 mins (03/27/23-04/03/23) </p>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex gap-x-5">
//               <p>$</p>
//               <p>echo $most_active_day</p>
//             </div>
//             <div className="flex gap-x-5 text-gray-400">
//               <p>{">"}</p>
//               <p> 19 hrs 21 mins (03/30/23) </p>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex gap-x-5">
//               <p>$</p>
//               <p>echo $top_projects</p>
//             </div>
//             <div className="flex gap-x-5 text-gray-400">
//               <p>{">"}</p>
//               <p>project-methinks, citrushack2023, portfolio</p>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex gap-x-5">
//               <p>$</p>
//               <p>echo $top_languages_this_month</p>
//             </div>
//             <div className="flex gap-x-5 text-gray-400">
//               <p>{">"}</p>
//               <p>
//                 {lang1 || `javascript`}, {lang2 || `css`},{" "}
//                 {lang3 || `typescript`}
//               </p>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex gap-x-5">
//               <p>$</p>
//               <p>echo $best_day_this_month</p>
//             </div>
//             <div className="flex gap-x-5 text-gray-400">
//               <p>{">"}</p>
//               <p>{bestDay || `10 hrs 31 mins`}</p>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex gap-x-5">
//               <p>$</p>
//               <p>echo $daily_avg_this_month</p>
//             </div>
//             <div className="flex gap-x-5 text-gray-400">
//               <p>{">"}</p>
//               <p>{avg || `2 hrs 17 mins`}</p>
//               {/* <p className="text-gray-400">2 hrs 17 mins</p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Stats;

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
        console.log(wakaData.data);
        setBestDay(wakaData?.data?.best_day?.text);
        // console.log(bestDay);
        setAvg(wakaData?.data?.human_readable_daily_average);
        setLang1(wakaData?.data?.languages[0]?.name.toLowerCase());
        setLang2(wakaData?.data?.languages[1]?.name.toLowerCase());
        setLang3(wakaData?.data?.languages[2]?.name.toLowerCase());
        // console.log(wakaData?.data?.languages[0]);
        // console.log(lang1);
        // console.log(avg);
        // Process the data as required to prepare the chartData object
        // const chartData = {
        // };

        // setChartData(chartData);
      } catch (error) {
        console.error("Error fetching Wakatime data:", error);
      }
    };

    fetchData();
  }, []);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       const currentDate = new Date();

  //       // Set the time zone to PST (Pacific Standard Time)
  //       const timeZone = "America/Los_Angeles";

  //       const formattedDate = currentDate
  //         .toLocaleString("en-US", {
  //           weekday: "short",
  //           month: "short",
  //           day: "numeric",
  //           hour: "numeric",
  //           minute: "numeric",
  //           hour12: false,
  //           timeZone: timeZone,
  //         })
  //         .replace(/,/g, "");

  //       setDate(formattedDate);
  //     }, 1000); // Update every second (1000 milliseconds)
  //     return () => {
  //       clearInterval(timer); // Cleanup function to clear the interval when component unmounts
  //     };
  //   }, []);
  //   console.log(date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 3 } }}
      exit={{ opacity: 0, y: 0 }}
      className=" md:w-[38%] h-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="rounded-[15px] rounded-t-[10px] bg-[#17171a] bg-opacity-80 text-green-600 absolute duration-700 md:hover:-translate-y-[3px] md:hover:drop-shadow-lg h-[480px]">
        {/* <motion.div className="duration-700 md:hover:-translate-y-[3px] md:hover:drop-shadow-lg"> */}
        {/* <div>
        <span className="h-[15px] w-[15px] bg-red-100">f</span>
      </div> */}
        {/* <div className="max-md:hidden md:w-[38%] bg-black bg-opacity-80 rounded-[10px] text-green-600"> */}
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
              {/* <div className="flex items-center justify-center gap-x-1 absolute left-[22%] top-[4.5px] text-sm max-[800px]:hidden"> */}
              <MdFolderShared className="text-blue-300" />
              <p className="text-center font-semibold max-md:text-sm">
                mikusroomonfire - ~/wakatime
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-1 text-sm xl:hidden">
              {/* <div className="flex items-center justify-center gap-x-1 absolute left-[22%] top-[4.5px] text-sm max-[800px]:hidden"> */}
              <MdFolderShared className="text-blue-300" />
              <p className="text-center font-semibold max-md:text-sm">
                mika - ~/wakatime
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 mt-5 lg:mt-7">
          <div className="space-y-4 max-[800px]:text-sm max-xl:text-[15px]">
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
                {/* <p className="text-gray-400">2 hrs 17 mins</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
