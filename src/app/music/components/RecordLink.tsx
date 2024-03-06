import Link from "@/components/Link";
import Record from "@/types/Record";
import Image from "next/image";

type RecordLinkProps = Record;

const RecordLink = ({ title, href, image, type, date }: RecordLinkProps) => (
  <Link href={href}>
    <div className="flex w-64 max-w-[35vw] flex-col items-center">
      <Image
        className="mb-2 w-full"
        src={image}
        alt={`${title} cover artwork`}
        priority
        height={250}
        width={250}
      />
      <h2 className="mb-1 text-center font-bold">{title}</h2>
      <h3 className="text-center text-sm font-thin italic">
        {`${type} \u2014 ${date.toLocaleDateString("en-US", {
          dateStyle: "short",
          timeZone: "UTC",
        })}`}
      </h3>
    </div>
  </Link>
);

export default RecordLink;
