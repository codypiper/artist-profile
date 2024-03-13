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
        <IconLink
          href="https://instagram.com/codycpiper"
          icon={faInstagram}
          label="Instagram"
        />
      </li>
      <li>
        <IconLink
          href="https://tiktok.com/@codycpiper"
          icon={faTiktok}
          label="TikTok"
        />
      </li>
      <li>
        <IconLink
          href="https://facebook.com/codypiper"
          icon={faFacebook}
          label="Facebook"
        />
      </li>
      <li>
        <IconLink
          href="https://x.com/codypiper"
          icon={faXTwitter}
          label="Twitter/X"
        />
      </li>
      <li>
        <IconLink
          href="https://youtube.com/@codypiper"
          icon={faYoutube}
          label="YouTube"
        />
      </li>
    </ul>
    <BackgroundImage alt="Cody Piper sitting on a tree trunk" src={tree} />
  </main>
);

export default Home;
