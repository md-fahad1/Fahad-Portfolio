import React from "react";
import Mar from "../Mar/Mar";

// Assuming you're importing icons data from a file

const Skills = () => {
  return (
    <div
      className="w-full overflow-hidden h-80 bg-black"
      style={{
        // Gradient from top to bottom
        background:
          "radial-gradient(circle at center top, #041e42 1%, #050816 50%)",
      }}
    >
      <div className="item-center  text-center mt-8">
        <button className="bg-blue-500 items-center text-center text-2xl font-bold text-white px-4 rounded-md">
          Tools I Use
        </button>
      </div>

      <div className="mt-10 px-16">
        <Mar />
      </div>
    </div>
  );
};

export default Skills;
