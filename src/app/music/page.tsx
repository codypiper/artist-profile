import BackgroundImage from "@/components/BackgroundImage";
import RecordType from "@/types/RecordType";
import tree from "@pub/images/backgrounds/tree.jpg";
import bygones from "@pub/images/records/bygones.jpg";
import iRemember from "@pub/images/records/i-remember.jpg";
import itsOnlyYou from "@pub/images/records/its-only-you.jpg";
import thingsMayChange from "@pub/images/records/things-may-change.jpg";
import thinkingOfYou from "@pub/images/records/thinking-of-you.jpg";
import { Metadata } from "next";
import Record from "./components/Record";

export const metadata: Metadata = {
  title: "Music - Cody Piper",
};

const Music = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center py-40">
    <h1 className="mb-10 px-4 text-center text-3xl font-bold drop-shadow-dark">
      Music
    </h1>
    <ol className="flex gap-5">
      <li>
        <Record
          title="Things May Change"
          href="https://lnk.to/things-may-change"
          image={thingsMayChange}
          type={RecordType.SINGLE}
          date={new Date("2023-08-25")}
        />
      </li>
      <li>
        <Record
          title="Thinking of You (On a Rainy Day)"
          href="https://lnk.to/thinking-of-you"
          image={thinkingOfYou}
          type={RecordType.SINGLE}
          date={new Date("2020-12-04")}
        />
      </li>
      <li>
        <Record
          title="Bygones"
          href="https://lnk.to/bygones"
          image={bygones}
          type={RecordType.EP}
          date={new Date("2019-06-07")}
        />
      </li>
      <li>
        <Record
          title="I Remember"
          href="https://lnk.to/i-remember"
          image={iRemember}
          type={RecordType.SINGLE}
          date={new Date("2019-05-31")}
        />
      </li>
      <li>
        <Record
          title="It's Only You"
          href="https://lnk.to/its-only-you"
          image={itsOnlyYou}
          type={RecordType.SINGLE}
          date={new Date("2019-02-15")}
        />
      </li>
    </ol>
    <BackgroundImage alt="Cody Piper sitting on a tree trunk" src={tree} />
  </main>
);

export default Music;
