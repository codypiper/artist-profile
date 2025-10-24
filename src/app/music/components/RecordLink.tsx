import Link from "@/components/Link";
import type { Record as IRecord } from "@/lib/database";
import Image from "next/image";

type RecordLinkProps = IRecord;

const recordTypeLabel: Record<IRecord["type"], string> = {
  single: "Single",
  ep: "EP",
  album: "Album",
};

const RecordLink: React.FC<RecordLinkProps> = ({
  title,
  cover_art_filename,
  type,
  release_date,
  url,
}: RecordLinkProps) => (
  <Link href={url}>
    <div className="flex w-64 max-w-[35vw] flex-col items-center">
      <Image
        className="mb-2 w-full"
        src={`/images/records/${cover_art_filename}`}
        alt={`"${title}" cover artwork`}
        priority
        height={250}
        width={250}
        quality={100}
      />
      <h2 className="mb-1 text-center font-bold">{title}</h2>
      <h3 className="text-center text-sm font-thin italic">
        {`${recordTypeLabel[type]} \u2014 ${release_date.toLocaleDateString(
          "en-US",
          {
            dateStyle: "short",
            timeZone: "UTC",
          },
        )}`}
      </h3>
    </div>
  </Link>
);

export default RecordLink;
