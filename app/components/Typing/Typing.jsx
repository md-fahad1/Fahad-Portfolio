"use client";
import React, { useState, useEffect, useMemo } from "react";

const TypingComponent = () => {
  const [textIndex, setTextIndex] = useState(0);
  const strings = useMemo(
    () => [
      "Empowering the future digital landscape",
      "Farseit pioneers innovation",
      "Connectivity, and seamless experiences",
    ],
    []
  );
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedText(strings[textIndex].substring(0, typedText.length + 1));
    }, 100);

    return () => clearInterval(intervalId);
  }, [textIndex, typedText, strings]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextIndex((textIndex + 1) % strings.length);
      setTypedText("");
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, [textIndex, strings]);

  return (
    <div className="bg-black">
      <div
        className="h-48 w-full  "
        style={{ backgroundImage: "url('/aa.jpg')" }}
      >
        <div className="flex flex-col  text-white justify-center items-center md:pt-10 sm:pt-2 pb-4 pl-10 pr-10 xl:pb-10 xl:pl-20 xl:pr-20 mr-5 ">
          <div>
            <h6 className="duration-500 font-bold">
              <span className="text-[14px] sm:text-[18] md:text-[20px] lg:text-[22px] xl:text-[24] 2xl:text-[24px] mt-1">
                {typedText}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingComponent;
