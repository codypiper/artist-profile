import YouTubePlayer from "@/components/YouTubePlayer";
import type { Video } from "@/lib/database";

type VideoListingProps = Omit<Video, "rank">;

const VideoListing: React.FC<VideoListingProps> = ({ id, title }) => (
  <li className="mx-6 flex flex-col items-center gap-3 pt-10 after:border-white/dim not-last:after:mt-7 not-last:after:w-96 not-last:after:max-w-full not-last:after:border-b">
    <h2 className="text-center text-2xl font-semibold drop-shadow-dark">
      {title}
    </h2>
    <div className="mb-2 w-200 max-w-screen shadow-2xl shadow-black">
      <YouTubePlayer videoId={id} title={title} />
    </div>
  </li>
);

export default VideoListing;
