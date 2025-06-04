import Page from "@/enums/Page";

interface Route {
  page: Page;
  path: string;
}

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
    page: Page.PHOTOS,
    path: "/photos",
  },
  {
    page: Page.SHOWS,
    path: "/shows",
  },
];

export default routes;
