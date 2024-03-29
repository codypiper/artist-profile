import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/components/Link";
import running from "@pub/images/backgrounds/running.jpg";

const NotFound = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="text-center text-5xl font-bold drop-shadow-dark">404</h1>
    <p className="mb-10 text-center text-xl font-semibold drop-shadow-dark">
      not found
    </p>
    <Link href="/" isInternal>
      return home
    </Link>
    <BackgroundImage
      src={running}
      alt="Blurry picture of Cody Piper running in the street at night"
    />
  </main>
);

export default NotFound;
