import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Cody Piper",
  short_name: "Cody Piper",
  description: "Official website of singer-songwriter Cody Piper",
  start_url: "/",
  display: "standalone",
  background_color: "black",
  icons: [
    {
      src: "/icon.png",
      sizes: "128x128",
      type: "image/png",
    },
  ],
  categories: ["entertainment", "music"],
});

export default manifest;
