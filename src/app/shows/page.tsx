import BackgroundImage from "@/components/BackgroundImage";
import shows from "@/constants/shows";
import clouds from "@pub/images/backgrounds/clouds.jpg";
import { Metadata } from "next";
import ShowListing from "./components/ShowListing";

export const metadata: Metadata = {
  title: "Shows - Cody Piper",
};

const Shows = () => {
  const upcomingShows = shows.filter((show) => show.date > new Date());

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-40">
      <h1 className="mb-12 text-center text-3xl font-bold drop-shadow-dark">
        Shows
      </h1>
      {upcomingShows.length === 0 ? (
        <p className="italic drop-shadow-dark">new show dates TBD</p>
      ) : (
        <>
          <ol className="flex w-full max-w-3xl flex-col gap-4">
            {upcomingShows.map((show) => (
              <ShowListing key={show.name} {...show} />
            ))}
          </ol>
          <p className="text-subtext mt-12 text-xs italic drop-shadow-dark">
            * times are displayed using the local timezone of the venue
          </p>
        </>
      )}
      <BackgroundImage alt="Clouds from an airplane" src={clouds} />
    </main>
  );
};

export default Shows;
