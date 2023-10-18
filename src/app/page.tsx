import BackgroundImage from "@/components/BackgroundImage";
import ExternalLink from "@/components/ExternalLink";
import YouTubePlayer from "@/components/YouTubePlayer";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import background from "@pub/images/homeBackground.jpg";

const Home = () => (
  <main className="relative flex h-screen flex-col items-center justify-center py-4">
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
        <ExternalLink
          href="https://instagram.com/codycpiper"
          className="drop-shadow-dark"
        >
          <FontAwesomeIcon icon={faInstagram} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://tiktok.com/@codycpiper"
          className="drop-shadow-dark"
        >
          <FontAwesomeIcon icon={faTiktok} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://facebook.com/codypiper"
          className="drop-shadow-dark"
        >
          <FontAwesomeIcon icon={faFacebook} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://x.com/codypiper"
          className="drop-shadow-dark"
        >
          <FontAwesomeIcon icon={faXTwitter} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://youtube.com/@codypiper"
          className="drop-shadow-dark"
        >
          <FontAwesomeIcon icon={faYoutube} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
    </ul>
    <BackgroundImage
      alt="Cody Piper sitting on a tree trunk"
      src={background}
    />
  </main>
);

export default Home;
