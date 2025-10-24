import AboutMeWidget from "@/components/about/AboutMeWidget";
import GalleryWidget from "@/components/gallery/GalleryWidget";

export default function SalesRepProfile() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 flex items-center justify-center">
      <div className="w-full max-w-7xl flex gap-6">
        {/* half screen space left  */}
        <div className="hidden md:block w-1/2"></div>
        {/* left side contents */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <AboutMeWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}
