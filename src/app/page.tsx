import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/components/Link";
import YouTubePlayer from "@/components/YouTubePlayer";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faThreads,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import candle from "@pub/images/backgrounds/candle.jpg";
import odeToALostLove from "@pub/images/records/ode-to-a-lost-love.jpg";
import Image from "next/image";
import IconLink from "./components/IconLink";
import NewsListing from "./components/NewsListing";

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="drop-shadow-dark mb-10 text-center text-4xl font-bold">
      NEWS
    </h1>
    <ol className="flex w-full max-w-4xl flex-col">
      <NewsListing heading={`NEW SINGLE OUT NOW — "Ode to a Lost Love"`}>
        <Link href="https://music.codypipermedia.com/ode-to-a-lost-love">
          <Image
            className="w-full max-w-64"
            src={odeToALostLove}
            alt={`"Ode to a Lost Love" artwork`}
            priority
            height={250}
            width={250}
          />
          <p className="opacity-dim drop-shadow-dark mt-1 text-center text-xs">
            click to listen
          </p>
        </Link>
      </NewsListing>
      <NewsListing heading={`"Be Quiet" music video:`}>
        <div className="mb-2 w-200 max-w-screen shadow-2xl shadow-black">
          <YouTubePlayer
            videoId="DcRw1sY3QUA"
            title="Be Quiet (Official Video)"
          />
        </div>
      </NewsListing>
      <NewsListing heading={`"Be Quiet" recorded live in Nashville:`}>
        <div className="mb-2 w-200 max-w-screen shadow-2xl shadow-black">
          <YouTubePlayer
            videoId="todbEDa2X3s"
            title="Be Quiet (Live Solo Performance)"
          />
        </div>
      </NewsListing>
    </ol>
    <ul className="mt-10 flex flex-row items-center gap-4">
      <li>
        <IconLink
          href="https://open.spotify.com/artist/4ajrDORPXqqfy4Ce8NHSoO"
          icon={faSpotify}
          label="Spotify"
        />
      </li>
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
          href="https://youtube.com/@codypiper"
          icon={faYoutube}
          label="YouTube"
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
          href="https://threads.com/@codycpiper"
          icon={faThreads}
          label="Threads"
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
