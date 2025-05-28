import BackgroundImage from "@/components/BackgroundImage";
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
import IconLink from "./components/IconLink";
import NewsListing from "./components/NewsListing";

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="mb-10 text-center text-4xl font-bold drop-shadow-dark">
      NEWS
    </h1>
    <ol className="flex w-full max-w-4xl flex-col">
      <NewsListing
        heading={`"Be Quiet" music video out now!`}
        content={
          <div className="mb-2 w-200 max-w-screen shadow-2xl shadow-black">
            <YouTubePlayer
              videoId="DcRw1sY3QUA"
              title="Be Quiet (Official Video)"
            />
          </div>
        }
      />
      <NewsListing
        heading={`"Things May Change" music video`}
        content={
          <div className="mb-2 w-200 max-w-screen shadow-2xl shadow-black">
            <YouTubePlayer
              videoId="NCkYqz7KZSA"
              title="Things May Change (Official Video)"
            />
          </div>
        }
      />
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
