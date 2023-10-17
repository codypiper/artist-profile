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
  <main className="relative flex min-h-screen flex-col items-center justify-center">
    <h1 className="mb-3 text-center text-3xl font-bold drop-shadow-md">
      {'"Things May Change" video:'}
    </h1>
    <div className="mb-16 w-[50rem] max-w-[100vw] shadow-md">
      <YouTubePlayer
        videoId="NCkYqz7KZSA"
        title="Things May Change (Official Video)"
      />
    </div>
    <ul className="flex flex-row items-center gap-4">
      <li>
        <ExternalLink href="https://instagram.com/codycpiper">
          <FontAwesomeIcon icon={faInstagram} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://tiktok.com/@codycpiper">
          <FontAwesomeIcon icon={faTiktok} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://facebook.com/codypiper">
          <FontAwesomeIcon icon={faFacebook} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://x.com/codypiper">
          <FontAwesomeIcon icon={faXTwitter} size="2xl" fixedWidth />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://youtube.com/@codypiper">
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
