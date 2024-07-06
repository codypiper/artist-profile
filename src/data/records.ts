import RecordType from "@/enums/RecordType";
import Record from "@/types/Record";
import bygones from "@pub/images/records/bygones.jpg";
import hibernating from "@pub/images/records/hibernating.jpg";
import iRemember from "@pub/images/records/i-remember.jpg";
import itsOnlyYou from "@pub/images/records/its-only-you.jpg";
import thingsMayChange from "@pub/images/records/things-may-change.jpg";
import thinkingOfYou from "@pub/images/records/thinking-of-you.jpg";

const records: Record[] = [
  {
    title: "Hibernating",
    image: hibernating,
    type: RecordType.SINGLE,
    date: new Date("2024-07-05"),
    href: "https://lnk.to/hibernating",
  },
  {
    title: "Things May Change",
    image: thingsMayChange,
    type: RecordType.SINGLE,
    date: new Date("2023-08-25"),
    href: "https://lnk.to/things-may-change",
  },
  {
    title: "Thinking of You (On a Rainy Day)",
    image: thinkingOfYou,
    type: RecordType.SINGLE,
    date: new Date("2020-12-04"),
    href: "https://lnk.to/thinking-of-you",
  },
  {
    title: "Bygones",
    image: bygones,
    type: RecordType.EP,
    date: new Date("2019-06-07"),
    href: "https://lnk.to/bygones",
  },
  {
    title: "I Remember",
    image: iRemember,
    type: RecordType.SINGLE,
    date: new Date("2019-05-31"),
    href: "https://lnk.to/i-remember",
  },
  {
    title: "It's Only You",
    image: itsOnlyYou,
    type: RecordType.SINGLE,
    date: new Date("2019-02-15"),
    href: "https://lnk.to/its-only-you",
  },
];

export default records;
