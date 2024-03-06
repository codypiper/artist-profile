import ButtonLink from "@/components/ButtonLink";
import Show from "@/types/Show";

type ShowListingProps = Show;

const ShowListing = ({ name, venue, city, date, href }: ShowListingProps) => (
  <li className="flex flex-row items-center max-sm:justify-between sm:gap-8">
    <div className="flex drop-shadow-dark max-sm:flex-col sm:grow sm:items-baseline sm:justify-between sm:gap-4">
      <h2 className="text-balance text-left font-semibold sm:order-2 sm:grow">
        {name}
      </h2>
      <time
        className="text-sm max-sm:ml-4 max-sm:flex max-sm:justify-start max-sm:gap-2 sm:order-1 sm:shrink-0 sm:basis-24"
        dateTime={date.toISOString()}
      >
        <div>
          {`${date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })} \u2014 ${date.toLocaleDateString("en-US", {
            weekday: "short",
          })}`}
        </div>
        <div className="text-subtext">
          {date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </time>
      <div className="text-sm max-sm:ml-4 max-sm:flex max-sm:justify-start max-sm:gap-2 sm:order-3 sm:grow sm:text-right">
        <div>{venue}</div>
        <div className="text-subtext">{city}</div>
      </div>
    </div>
    <ButtonLink href={href}>link</ButtonLink>
  </li>
);

export default ShowListing;
