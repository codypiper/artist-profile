import ButtonLink from "@/components/ButtonLink";
import Show from "@/types/Show";

type ShowListingProps = Show;

const ShowListing = ({ name, venue, city, date, href }: ShowListingProps) => (
  <li className="border-dim flex flex-row items-center border-b py-4 last:border-b-0 max-sm:justify-between sm:gap-8">
    <div className="flex drop-shadow-dark max-sm:flex-col sm:grow sm:justify-between sm:gap-4">
      <time
        className="max-sm:flex max-sm:justify-start max-sm:gap-2 sm:shrink-0 sm:basis-24"
        dateTime={date.toISOString()}
      >
        <div className="font-semibold">
          {`${date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })} \u2014 ${date.toLocaleDateString("en-US", {
            weekday: "short",
          })}`}
        </div>
        <div className="text-dim font-thin">
          {date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </time>
      <div className="text-balance text-left max-sm:ml-4 sm:grow">{name}</div>
      <div className="font-thin max-sm:ml-4 max-sm:flex max-sm:justify-start max-sm:gap-2 sm:grow sm:text-right">
        <div>{venue}</div>
        <div className="text-dim">{city}</div>
      </div>
    </div>
    <ButtonLink href={href}>link</ButtonLink>
  </li>
);

export default ShowListing;
