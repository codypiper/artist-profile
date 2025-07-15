import BackgroundImage from "@/components/BackgroundImage";
import database from "@/lib/database";
import clouds from "@pub/images/backgrounds/clouds.jpg";
import type { Metadata } from "next";
import ShowListing from "./components/ShowListing";

export const metadata: Metadata = {
  title: "Shows - Cody Piper",
};

export const revalidate = 3600;

const Shows: React.FC = async () => {
  const shows = await database
    .selectFrom("shows")
    .selectAll()
    .where("start_date", ">", new Date())
    .orderBy("start_date", "asc")
    .execute();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-40">
      <h1 className="drop-shadow-dark mb-12 text-center text-3xl font-bold">
        SHOWS
      </h1>
      {shows.length === 0 ? (
        <p className="drop-shadow-dark italic">new show dates TBD</p>
      ) : (
        <>
          <ol className="flex w-full max-w-4xl flex-col">
            {shows.map((show) => (
              <ShowListing key={show.start_date.toISOString()} {...show} />
            ))}
          </ol>
          <p className="opacity-dim drop-shadow-dark mt-12 text-xs italic">
            times are displayed using the local timezone of the venue
          </p>
        </>
      )}
      <BackgroundImage alt="Clouds with tree silhouettes" src={clouds} />
    </main>
  );
};

export default Shows;
