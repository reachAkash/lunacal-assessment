"use client";

interface GalleryImagesProps {
  images: string[];
  currentIndex: number;
}

export default function GalleryImages({
  images,
  currentIndex,
}: GalleryImagesProps) {
  return (
    <div className="relative w-full">
      <div className="flex gap-6">
        {[0, 1, 2].map((offset) => {
          const index = (currentIndex + offset) % images.length;
          return (
            <div
              key={index}
              className="shrink-0 w-[calc(33.333%-16px)] transition-all duration-500 ease-in-out hover:scale-[1.13] hover:-rotate-3 hover:z-10 cursor-pointer"
              style={{ aspectRatio: "1 / 1" }}
            >
              <div
                className="w-full h-full rounded-3xl overflow-hidden bg-zinc-700"
                style={{ filter: "grayscale(100%)", transition: "filter 0.5s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              >
                <img
                  src={images[index]}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
