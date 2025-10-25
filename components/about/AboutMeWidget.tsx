"use client";

import { useRef, useState } from "react";
import TabButton from "./TabButton";
import AboutMeContent from "./AboutMeContent";
import type { TabType } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { CircleQuestionMark } from "lucide-react";
import HorizontalLine from "../HorizontalLine";

export default function AboutMeWidget() {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLayout = (rect: DOMRect) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  };

  return (
    <>
      <div className="flex gap-3 lg:gap-5 bg-[#2f343a] rounded-3xl p-3 sm:p-4 shadow-xl max-w-2xl">
        <div className="flex flex-col justify-between items-center h-full">
          <CircleQuestionMark className="self-start mb-4 w-5 h-5 sm:w-6 sm:h-6" />
          <div className="flex-1 flex items-center">
            <Image
              src="/square-list.png"
              alt=""
              height={20}
              width={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div
            ref={containerRef}
            className="relative w-full bg-[#171717] rounded-xl sm:rounded-2xl px-0.5 sm:px-1 py-0.5 sm:py-1 mb-4 sm:mb-6 inline-flex gap-0.5 sm:gap-1"
          >
            <motion.div
              className="absolute bg-white/20 rounded-xl sm:rounded-2xl"
              initial={false}
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                height: "calc(100% - 4px)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                top: 2,
              }}
            />

            {(["about", "experiences", "recommended"] as TabType[]).map(
              (tab) => (
                <TabButton
                  key={tab}
                  active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  onLayout={handleLayout}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabButton>
              )
            )}
          </div>
          <AboutMeContent activeTab={activeTab} />
        </div>
      </div>
      <HorizontalLine />
    </>
  );
}
