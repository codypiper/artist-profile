import BackgroundImage from "@/components/BackgroundImage";
import database from "@/lib/database";
import silhouette from "@pub/images/backgrounds/silhouette.jpg";
import type { Metadata } from "next";
import RecordLink from "./components/RecordLink";

export const metadata: Metadata = {
  title: "Music - Cody Piper",
};

const Music: React.FC = async () => {
  const records = await database
    .selectFrom("records")
    .selectAll()
    .orderBy("release_date", "desc")
    .execute();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-40">
      <h1 className="drop-shadow-dark mb-10 text-center text-3xl font-bold">
        MUSIC
      </h1>
      <ol className="flex max-w-4xl flex-wrap justify-center gap-8">
        {records.map((record) => (
          <li key={record.title}>
            <RecordLink {...record} />
          </li>
        ))}
      </ol>
      <BackgroundImage
        alt="Nighttime silhoeutte of Cody Piper in front of some trees"
        src={silhouette}
      />
    </main>
  );
};

export default Music;
