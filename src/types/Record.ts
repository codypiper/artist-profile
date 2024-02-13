import { StaticImageData } from "next/image";

export enum RecordType {
  SINGLE = "Single",
  EP = "EP",
  ALBUM = "Album",
}

export default interface Record {
  title: string;
  image: StaticImageData;
  type: RecordType;
  date: Date;
  href: string;
}
