import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/components/Link";
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
import EmailListForm from "./components/EmailListForm";
import IconLink from "./components/IconLink";

interface HomeProps {
  searchParams: Promise<{
    subscribed?: string;
  }>;
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const isSubscribed = Boolean((await searchParams).subscribed);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-40">
      <h1 className="drop-shadow-dark mb-10 text-center text-4xl font-bold text-balance">
        {'"ODE TO A LOST LOVE" OUT NOW'}
      </h1>
      <div className="mb-14">
        <Link href="https://music.codypipermedia.com/ode-to-a-lost-love">
          <Image
            className="w-full"
            src={odeToALostLove}
            alt={`"Ode to a Lost Love" artwork`}
            priority
            height={300}
            width={300}
          />
          <p className="opacity-dim drop-shadow-dark mt-1 text-center text-sm">
            click to listen
          </p>
        </Link>
      </div>
      <EmailListForm isSubscribed={isSubscribed} />
      <ul className="mt-14 flex flex-row items-center gap-4">
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
};

export default Home;
