"use client";

import { useState } from "react";
import Image from "next/image";
import { CircleQuestionMark } from "lucide-react";
import GalleryControls from "./GalleryControls";
import GalleryImages from "./GalleryImages";
import Toast from "../toast";

export default function GalleryWidget() {
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Image added successfully");

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const handleAdd = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      setImages([...images, url]);
      setToastMessage("Image added successfully");
      setShowToast(true);
    }
  };

  return (
    <div className="flex gap-3 lg:gap-5 bg-gray-400/20 rounded-3xl p-3 sm:p-4 shadow-xl">
      <div className="flex flex-col justify-between items-center h-full">
        <CircleQuestionMark className="self-start mb-4" />
        <div className="flex-1 flex items-center">
          <Image src="/square-list.png" alt="" height={20} width={20} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <button className="px-4 lg:px-8 py-3 text-xs lg:text-base rounded-2xl bg-[#171717] text-white font-medium">
            Gallery
          </button>
          <GalleryControls
            onAddImage={handleAdd}
            onPrevious={handlePrev}
            onNext={handleNext}
          />
        </div>
        <GalleryImages images={images} currentIndex={currentIndex} />
      </div>
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
