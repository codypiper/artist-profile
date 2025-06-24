interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title }) => (
  <iframe
    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="aspect-video w-full"
  />
);

export default YouTubePlayer;
