"use client";

import React, { useEffect, useRef, useState } from "react";
import type { TabType } from "@/utils/types";

interface AboutMeContentProps {
  activeTab: TabType;
}

export default function AboutMeContent({ activeTab }: AboutMeContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(true);

  const content: Record<TabType, React.ReactNode> = {
    about: (
      <div className="text-[#969696] text-xs lg:text-base tracking-wide leading-5 lg:leading-[1.6rem]">
        <p className="mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          lorem et nulla fermentum, nec posuere massa tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec rhoncus lorem et
          nulla fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec rhoncus lorem et nulla
          fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec rhoncus lorem et nulla fermentum,
          nec posuere massa tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec rhoncus lorem et nulla fermentum, nec posuere
          massa tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus lorem et nulla fermentum, nec posuere massa
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec rhoncus lorem et nulla fermentum, nec posuere massa tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          lorem et nulla fermentum, nec posuere massa tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec rhoncus lorem et
          nulla fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec rhoncus lorem et nulla
          fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec rhoncus lorem et nulla fermentum,
          nec posuere massa tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec rhoncus lorem et nulla fermentum, nec posuere
          massa tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus lorem et nulla fermentum, nec posuere massa
          tincidunt.
        </p>
      </div>
    ),
    experiences: (
      <div className="text-[#969696] text-xs lg:text-base tracking-wide leading-[1.6rem]">
        <p className="mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          lorem et nulla fermentum, nec posuere massa tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec rhoncus lorem et
          nulla fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec rhoncus lorem et nulla
          fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec rhoncus lorem et nulla fermentum,
          nec posuere massa tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec rhoncus lorem et nulla fermentum, nec posuere
          massa tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus lorem et nulla fermentum, nec posuere massa
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec rhoncus lorem et nulla fermentum, nec posuere massa tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          lorem et nulla fermentum, nec posuere massa tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec rhoncus lorem et
          nulla fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec rhoncus lorem et nulla
          fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec rhoncus lorem et nulla fermentum,
          nec posuere massa tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec rhoncus lorem et nulla fermentum, nec posuere
          massa tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus lorem et nulla fermentum, nec posuere massa
          tincidunt.
        </p>
      </div>
    ),
    recommended: (
      <div className="text-[#969696] text-xs lg:text-base tracking-wide leading-[1.6rem]">
        <p className="mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          lorem et nulla fermentum, nec posuere massa tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec rhoncus lorem et
          nulla fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec rhoncus lorem et nulla
          fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec rhoncus lorem et nulla fermentum,
          nec posuere massa tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec rhoncus lorem et nulla fermentum, nec posuere
          massa tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus lorem et nulla fermentum, nec posuere massa
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec rhoncus lorem et nulla fermentum, nec posuere massa tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          lorem et nulla fermentum, nec posuere massa tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec rhoncus lorem et
          nulla fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec rhoncus lorem et nulla
          fermentum, nec posuere massa tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec rhoncus lorem et nulla fermentum,
          nec posuere massa tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec rhoncus lorem et nulla fermentum, nec posuere
          massa tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus lorem et nulla fermentum, nec posuere massa
          tincidunt.
        </p>
      </div>
    ),
  };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const onScroll = () => {
      setShowFade(el.scrollTop + el.clientHeight < el.scrollHeight);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [activeTab]);

  return (
    <div className="relative max-h-[180px] overflow-hidden pr-2">
      <div
        ref={contentRef}
        className="custom-scrollbar max-h-[180px] overflow-y-auto"
      >
        {content[activeTab]}
      </div>
    </div>
  );
}
