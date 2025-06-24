import BackgroundImage from "@/components/BackgroundImage";
import moonlight from "@pub/images/backgrounds/moonlight.jpg";
import type { Metadata } from "next";
import PhotoGallery from "./components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photos - Cody Piper",
};

const Photos: React.FC = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-40">
    <h1 className="drop-shadow-dark mb-10 text-center text-3xl font-bold">
      PHOTOS
    </h1>
    <div className="w-full max-w-7xl drop-shadow-md">
      <PhotoGallery />
    </div>
    <BackgroundImage
      alt="Moonlight shining through tree branches"
      src={moonlight}
    />
  </main>
);

export default Photos;
