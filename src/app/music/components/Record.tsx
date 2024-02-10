import ExternalLink from "@/components/ExternalLink";
import RecordType from "@/types/RecordType";
import Image, { StaticImageData } from "next/image";

interface RecordProps {
  title: string;
  href: string;
  image: StaticImageData;
  type: RecordType;
  date: Date;
}

const Record = ({ title, href, image, type, date }: RecordProps) => (
  <ExternalLink href={href}>
    <div className="flex flex-col items-center">
      <Image
        className="mb-2"
        src={image}
        alt={`${title} cover artwork`}
        height={250}
        width={250}
      />
      <h2 className="mb-1 text-center font-bold">{title}</h2>
      <h3 className="text-center text-sm font-thin italic">
        {`${type} \u2014 ${date.toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "2-digit",
          timeZone: "UTC",
        })}`}
      </h3>
    </div>
  </ExternalLink>
);

export default Record;
