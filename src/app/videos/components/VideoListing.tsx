import YouTubePlayer from "@/components/YouTubePlayer";
import { Video } from "@/lib/database";

type VideoListingProps = Omit<Video, "rank">;

const VideoListing = ({ id, title }: VideoListingProps) => (
  <li className="after:border-white/dim mx-6 flex flex-col items-center gap-3 pt-10 not-last:after:mt-7 not-last:after:w-96 not-last:after:border-b">
    <h2 className="drop-shadow-dark text-center text-2xl font-semibold">
      {title}
    </h2>
    <div className="mb-2 w-200 max-w-screen shadow-2xl shadow-black">
      <YouTubePlayer videoId={id} title={title} />
    </div>
  </li>
);

export default VideoListing;
