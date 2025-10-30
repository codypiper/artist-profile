interface Route {
  name: string;
  href: string;
}

const routes: Route[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "music",
    href: "/music",
  },
  {
    name: "videos",
    href: "/videos",
  },
  {
    name: "shows",
    href: "/shows",
  },
  {
    name: "shop",
    href: "https://codypiper.myshopify.com",
  },
];

export default routes;
