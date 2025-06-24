import BackgroundImage from "@/components/BackgroundImage";
import database from "@/lib/database";
import park from "@pub/images/backgrounds/park.jpg";
import type { Metadata } from "next";
import VideoListing from "./components/VideoListing";

export const metadata: Metadata = {
  title: "Videos - Cody Piper",
};

const Videos: React.FC = async () => {
  const videos = await database
    .selectFrom("videos")
    .select(["id", "title"])
    .orderBy("rank", "asc")
    .execute();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
      <h1 className="drop-shadow-dark mb-10 text-center text-4xl font-bold">
        VIDEOS
      </h1>
      {videos.length === 0 ? (
        <p className="drop-shadow-dark italic">no featured videos</p>
      ) : (
        <ol className="flex w-full max-w-4xl flex-col">
          {videos.map((video) => (
            <VideoListing key={video.id} {...video} />
          ))}
        </ol>
      )}
      <BackgroundImage alt="A dark park at night" src={park} />
    </main>
  );
};

export default Videos;
