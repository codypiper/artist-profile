import Page from "@/types/Page";
import Route from "@/types/Route";

const routes: Route[] = [
  {
    page: Page.HOME,
    path: "/",
  },
  {
    page: Page.MUSIC,
    path: "/music",
  },
  {
    page: Page.SHOWS,
    path: "/shows",
  },
];

export default routes;
