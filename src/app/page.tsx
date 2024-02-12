import BackgroundImage from "@/components/BackgroundImage";
import YouTubePlayer from "@/components/YouTubePlayer";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import tree from "@pub/images/backgrounds/tree.jpg";
import IconLink from "./components/IconLink";

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="mb-3 px-4 text-center text-3xl font-bold drop-shadow-dark">
      {'"Things May Change" video:'}
    </h1>
    <div className="mb-16 w-[50rem] max-w-[100vw] shadow-2xl shadow-black">
      <YouTubePlayer
        videoId="NCkYqz7KZSA"
        title="Things May Change (Official Video)"
      />
    </div>
    <ul className="flex flex-row items-center gap-4">
      <li>
        <IconLink href="https://instagram.com/codycpiper" icon={faInstagram} />
      </li>
      <li>
        <IconLink href="https://tiktok.com/@codycpiper" icon={faTiktok} />
      </li>
      <li>
        <IconLink href="https://facebook.com/codypiper" icon={faFacebook} />
      </li>
      <li>
        <IconLink href="https://x.com/codypiper" icon={faXTwitter} />
      </li>
      <li>
        <IconLink href="https://youtube.com/@codypiper" icon={faYoutube} />
      </li>
    </ul>
    <BackgroundImage alt="Cody Piper sitting on a tree trunk" src={tree} />
  </main>
);

export default Home;
