"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "/public/tabData.json";

const TabData = () => {
  const [tabsData, setTabsData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    setTabsData(data.tabs);
  }, []);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="text-black h-full w-full container mx-auto my-8 px-8">
      <div className="rounded border w-full mx-auto mt-4">
        <ul className="flex flex-wrap gap-y-4 pt-2 px-1 w-full border-b justify-center items-center mb-3">
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              className={` text-gray-800 font-semibold rounded-t border -mb-px h-10 ${activeTab === tab.id ? "md:border-b-white" : "bg-gray-100"
                }`}
            >
              <button
                className="px-4 h-full flex items-center"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div id="tab-contents">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={
                activeTab === tab.id ? "p-4 animate-scale" : "hidden p-4"
              }
            >
              {tab.images && tab.images.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8">
                  {tab.images.map((image, index) => (
                    <div
                      key={index}
                      className="grid place-items-center w-16 md:w-32 h-16 md:h-32"
                    >
                      <Image
                        src={image}
                        alt={`${tab.label} Image ${index + 1}`}
                        width={250}
                        height={250}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabData;