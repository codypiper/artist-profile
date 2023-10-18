import BackgroundImage from "@/components/BackgroundImage";
import InternalLink from "@/components/InternalLink";
import errorBackground from "@pub/images/errorBackground.jpg";

const NotFound = () => (
  <main className="relative flex h-screen flex-col items-center justify-center py-4">
    <h1 className="text-center text-5xl font-bold drop-shadow-dark">404</h1>
    <p className="mb-10 text-center text-xl font-semibold drop-shadow-dark">
      not found
    </p>
    <InternalLink href="/" className="drop-shadow-dark">
      return home
    </InternalLink>
    <BackgroundImage
      src={errorBackground}
      alt="Blurry picture of Cody Piper running in the street at night"
    />
  </main>
);

export default NotFound;
