import { createKysely } from "@vercel/postgres-kysely";
import { Selectable } from "kysely";

interface Database {
  shows: ShowsTable;
}

interface ShowsTable {
  name: string;
  venue: string;
  location: string;
  url: string;
  start_date: Date;
}

export type Show = Selectable<ShowsTable>;

export default createKysely<Database>();
