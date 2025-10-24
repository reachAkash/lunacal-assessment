// types.ts

import type { LucideIcon } from "lucide-react";

export type TabType = "about" | "experiences" | "recommended";

export interface NavButtonProps {
  onClick: () => void;
  icon: LucideIcon;
}

export interface GalleryControlsProps {
  onAddImage: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export interface GalleryImagesProps {
  images: string[];
  currentIndex: number;
}
