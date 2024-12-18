import BackgroundImage from "@/components/BackgroundImage";
import YouTubePlayer from "@/components/YouTubePlayer";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import candle from "@pub/images/backgrounds/candle.jpg";
import IconLink from "./components/IconLink";

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="mb-3 px-4 text-center text-3xl font-bold drop-shadow-dark">
      &quot;Season&apos;s End&quot; video:
    </h1>
    <div className="mb-16 w-[50rem] max-w-[100vw] shadow-2xl shadow-black">
      <YouTubePlayer
        videoId="NH5x4iHRTLs"
        title="Season's End (Official Video)"
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
          href="https://tiktok.com/@cody_piper"
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
    <BackgroundImage
      alt="Cody Piper sitting in a dark room by a window with a candle"
      src={candle}
    />
  </main>
);

export default Home;
