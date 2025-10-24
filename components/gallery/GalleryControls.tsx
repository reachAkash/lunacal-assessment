"use client";

import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import NavButton from "./NavButton";
import type { GalleryControlsProps } from "@/utils/types";

export default function GalleryControls({
  onAddImage,
  onPrevious,
  onNext,
}: GalleryControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onAddImage}
        className="flex items-center gap-1 px-2 py-2 lg:px-4 lg:py-3 border-none rounded-full bg-zinc-700 text-white text-xs font-medium hover:bg-zinc-700/60 cursor-pointer  transition-all"
        style={{
          boxShadow:
            "-3px -2px 12px rgba(255, 255, 255, 0.3), -2px 4px 12px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Plus size={14} />
        ADD IMAGE
      </button>
      <div className="flex gap-2">
        <NavButton onClick={onPrevious} icon={ArrowLeft} />
        <NavButton onClick={onNext} icon={ArrowRight} />
      </div>
    </div>
  );
}
