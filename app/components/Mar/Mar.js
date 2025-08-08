import React from "react";
import Marquee from "react-fast-marquee";
import icons from "../Icons/Icons";

const Mar = () => {
  return (
    <Marquee pauseOnHover speed={80} gradient={false}>
      <ul className="flex justify-center text-5xl h-40 w-full flex-nowrap cursor-grabbing px-8">
        {/* Map over the icons array and render each icon */}
        {icons.map((iconData, iconIndex) => {
          const IconComponent = iconData.component;
          return (
            <li
              key={iconIndex}
              className="flex flex-col items-center justify-center animate-glow-border bg-gray-800 w-40 h-40 mx-5 rounded-md"
            >
              <IconComponent
                style={{ color: iconData.color, fontSize: "3.5rem" }}
              />
              <span className="text-lg text-white mt-2">{iconData.name}</span>
            </li>
          );
        })}
      </ul>
    </Marquee>
  );
};

export default Mar;
