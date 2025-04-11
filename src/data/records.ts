import RecordType from "@/enums/RecordType";
import Record from "@/types/Record";
import beQuiet from "@pub/images/records/be-quiet.jpg";
import bygones from "@pub/images/records/bygones.jpg";
import hibernating from "@pub/images/records/hibernating.jpg";
import iRemember from "@pub/images/records/i-remember.jpg";
import itsOnlyYou from "@pub/images/records/its-only-you.jpg";
import seasonsEnd from "@pub/images/records/seasons-end.jpg";
import thingsMayChange from "@pub/images/records/things-may-change.jpg";
import thinkingOfYou from "@pub/images/records/thinking-of-you.jpg";

const records: Record[] = [
  {
    title: "Be Quiet",
    image: beQuiet,
    type: RecordType.SINGLE,
    date: new Date("2025-04-11"),
    href: "https://music.codypipermedia.com/be-quiet",
  },
  {
    title: "Season's End",
    image: seasonsEnd,
    type: RecordType.SINGLE,
    date: new Date("2024-11-22"),
    href: "https://music.codypipermedia.com/seasons-end",
  },
  {
    title: "Hibernating",
    image: hibernating,
    type: RecordType.SINGLE,
    date: new Date("2024-07-05"),
    href: "https://music.codypipermedia.com/hibernating",
  },
  {
    title: "Things May Change",
    image: thingsMayChange,
    type: RecordType.SINGLE,
    date: new Date("2023-08-25"),
    href: "https://music.codypipermedia.com/things-may-change",
  },
  {
    title: "Thinking of You (On a Rainy Day)",
    image: thinkingOfYou,
    type: RecordType.SINGLE,
    date: new Date("2020-12-04"),
    href: "https://music.codypipermedia.com/thinking-of-you",
  },
  {
    title: "Bygones",
    image: bygones,
    type: RecordType.EP,
    date: new Date("2019-06-07"),
    href: "https://music.codypipermedia.com/bygones-ep",
  },
  {
    title: "I Remember",
    image: iRemember,
    type: RecordType.SINGLE,
    date: new Date("2019-05-31"),
    href: "https://music.codypipermedia.com/i-remember",
  },
  {
    title: "It's Only You",
    image: itsOnlyYou,
    type: RecordType.SINGLE,
    date: new Date("2019-02-15"),
    href: "https://music.codypipermedia.com/its-only-you",
  },
];

export default records;
