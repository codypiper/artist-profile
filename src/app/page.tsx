import BackgroundImage from "@/components/BackgroundImage";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faThreads,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import candle from "@pub/images/backgrounds/candle.jpg";
import revealed from "@pub/images/records/revealed.jpg";
import Image from "next/image";
import EmailListForm from "./components/EmailListForm";
import IconLink from "./components/IconLink";

interface HomeProps {
  searchParams: Promise<{
    subscribed?: string;
  }>;
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const isSubscribed = (await searchParams).subscribed === "true";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-40">
      <h1 className="drop-shadow-dark mb-10 text-center text-4xl font-bold text-balance">
        debut LP <i className="mr-1 italic">Revealed</i> out October 24th
      </h1>
      <div className="mb-12">
        <Image
          className="w-full"
          src={revealed}
          alt={`"Revealed" artwork`}
          priority
          height={360}
          width={360}
          quality={100}
        />
      </div>
      <EmailListForm isSubscribed={isSubscribed} />
      <ul className="mt-12 flex flex-row items-center gap-4">
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
