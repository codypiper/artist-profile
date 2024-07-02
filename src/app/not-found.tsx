import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/components/Link";
import grass from "@pub/images/backgrounds/grass.jpg";

const NotFound = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="text-center text-5xl font-bold drop-shadow-dark">404</h1>
    <p className="mb-10 text-center text-xl font-semibold drop-shadow-dark">
      not found
    </p>
    <Link href="/" isInternal>
      return home
    </Link>
    <BackgroundImage alt="Field with tall grass and flowers" src={grass} />
  </main>
);

export default NotFound;
