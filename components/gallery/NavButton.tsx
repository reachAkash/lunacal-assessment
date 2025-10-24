"use client";

import type { LucideIcon } from "lucide-react";

interface NavButtonProps {
  onClick: () => void;
  icon: LucideIcon;
}

export default function NavButton({ onClick, icon: Icon }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 text-[#969696] rounded-full bg-gradient-to-br active:bg-white active:text-black from-zinc-700 to-zinc-900 flex items-center ease-in-out duration-300 justify-center hover:from-zinc-600 hover:to-zinc-700 transition-all shadow-lg"
      style={{
        boxShadow:
          "-3px -2px 12px rgba(100, 100, 110, 0.7), -2px 4px 12px rgba(20, 20, 25, 0.8)",
      }}
    >
      <Icon size={20} />
    </button>
  );
}
