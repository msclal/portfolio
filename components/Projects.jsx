import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="grid sm:grid-cols-2 gap-5 place-items-center">
      {/* Row 1 */}
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 1
      </div>
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 2
      </div>

      {/* Row 2 */}
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 1
      </div>
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 2
      </div>

      {/* Row 3 */}
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 1
      </div>
      <div className="w-full h-[250px] md:h-[375px] bg-gray-200 rounded-[20px]">
        Content 2
      </div>
    </div>
    // <div className="grid grid-cols-2 gap-x-5">
    //   {/* <div className="flex"> */}
    //   <div className="w-1/2 h-[375px] bg-gray-200 rounded-[20px]"></div>;
    //   <div className="w-1/2 h-[375px] bg-gray-200 rounded-[20px]"></div>;
    //   {/* </div> */}
    // </div>
    // // <div className="flex justify-between items-center space-x-5">
    // //   <div className="w-1/2 h-[375px] bg-gray-200 rounded-[20px]"></div>;
    // //   <div className="w-1/2 h-[375px] bg-gray-200 rounded-[20px]"></div>;
    // // </div>
  );
};

export default Projects;
