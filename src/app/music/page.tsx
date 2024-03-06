import BackgroundImage from "@/components/BackgroundImage";
import records from "@/data/records";
import crosswalk from "@pub/images/backgrounds/crosswalk.jpg";
import { Metadata } from "next";
import RecordLink from "./components/RecordLink";

export const metadata: Metadata = {
  title: "Music - Cody Piper",
};

const Music = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-40">
    <h1 className="mb-10 text-center text-3xl font-bold drop-shadow-dark">
      Music
    </h1>
    <ol className="flex flex-wrap justify-center gap-8">
      {records.map((record) => (
        <li key={record.title}>
          <RecordLink {...record} />
        </li>
      ))}
    </ol>
    <BackgroundImage
      alt="Cody Piper standing in a crosswalk at night"
      src={crosswalk}
    />
  </main>
);

export default Music;
