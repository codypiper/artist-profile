import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/components/Link";
import grass from "@pub/images/backgrounds/grass.jpg";

const NotFound: React.FC = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="drop-shadow-dark text-center text-5xl font-bold">404</h1>
    <p className="drop-shadow-dark mb-10 text-center text-xl font-semibold">
      not found
    </p>
    <Link href="/" isInternal>
      return home
    </Link>
    <BackgroundImage alt="Field with tall grass and flowers" src={grass} />
  </main>
);

export default NotFound;
