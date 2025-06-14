import { createKysely } from "@vercel/postgres-kysely";
import { Selectable } from "kysely";

interface Database {
  records: RecordsTable;
  shows: ShowsTable;
}

type RecordType = "single" | "ep" | "album";

interface RecordsTable {
  title: string;
  cover_art_filename: string;
  type: RecordType;
  release_date: Date;
  url: string;
}

interface ShowsTable {
  name: string;
  venue: string;
  location: string;
  start_date: Date;
  url: string;
}

export type Record = Selectable<RecordsTable>;
export type Show = Selectable<ShowsTable>;

export default createKysely<Database>();
