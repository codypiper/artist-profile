import BackgroundImage from "@/components/BackgroundImage";
import InternalLink from "@/components/InternalLink";
import running from "@pub/images/backgrounds/running.jpg";

const NotFound = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-20">
    <h1 className="text-center text-5xl font-bold drop-shadow-dark">404</h1>
    <p className="mb-10 text-center text-xl font-semibold drop-shadow-dark">
      not found
    </p>
    <InternalLink href="/">return home</InternalLink>
    <BackgroundImage
      src={running}
      alt="Blurry picture of Cody Piper running in the street at night"
    />
  </main>
);

export default NotFound;
