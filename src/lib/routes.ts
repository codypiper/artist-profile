interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "music",
    path: "/music",
  },
  {
    name: "photos",
    path: "/photos",
  },
  {
    name: "shows",
    path: "/shows",
  },
];

export default routes;
