import BackgroundImage from "@/components/BackgroundImage";
import YouTubePlayer from "@/components/YouTubePlayer";
import background from "@pub/images/homeBackground.jpg";

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center">
    <h1 className="mb-3 text-center text-3xl font-semibold text-white drop-shadow-md">
      {'"Things May Change" video:'}
    </h1>
    <div className="w-[50rem] max-w-[100vw] shadow-md">
      <YouTubePlayer
        videoId="NCkYqz7KZSA"
        title="Things May Change (Official Video)"
      />
    </div>
    <BackgroundImage
      alt="Cody Piper sitting on a tree trunk"
      src={background}
    />
  </main>
);

export default Home;
