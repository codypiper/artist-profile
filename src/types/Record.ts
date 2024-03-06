import RecordType from "@/enums/RecordType";
import { StaticImageData } from "next/image";

export default interface Record {
  title: string;
  image: StaticImageData;
  type: RecordType;
  date: Date;
  href: string;
}
