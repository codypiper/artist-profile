import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/components/Link";
import YouTubePlayer from "@/components/YouTubePlayer";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import candle from "@pub/images/backgrounds/candle.jpg";
import beQuiet from "@pub/images/records/be-quiet.jpg";
import Image from "next/image";
import IconLink from "./components/IconLink";
import NewsListing from "./components/NewsListing";

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="mb-10 text-center text-4xl font-bold drop-shadow-dark">
      NEWS
    </h1>
    <ol className="flex w-full max-w-4xl flex-col">
      <NewsListing
        heading={`new single "Be Quiet" OUT NOW!`}
        content={
          <>
            <Link href="https://music.codypipermedia.com/be-quiet">
              <div>
                <Image
                  className="w-full max-w-64"
                  src={beQuiet}
                  alt={"Be Quiet cover artwork"}
                  priority
                  height={250}
                  width={250}
                />
                <p className="mt-1 text-center text-xs text-dim drop-shadow-dark">
                  click to listen
                </p>
              </div>
            </Link>
            <p className="text-center drop-shadow-dark">
              music video available WEDNESDAY 4/16
            </p>
          </>
        }
      />
      <NewsListing
        heading={`"Things May Change" music video:`}
        content={
          <div className="mb-2 w-[50rem] max-w-[100vw] shadow-2xl shadow-black">
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
