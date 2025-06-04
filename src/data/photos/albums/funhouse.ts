import { Photo } from "react-photo-album";
import galleryPath from "../galleryPath";

const path = `${galleryPath}/funhouse`;

const funhouse: Photo[] = [
  {
    src: `${path}/image1.jpg`,
    width: 2883,
    height: 2884,
    alt: "Singing in front of lights",
  },
  {
    src: `${path}/image2.jpg`,
    width: 3936,
    height: 2216,
    alt: "Singing with eyes closed",
  },
  {
    src: `${path}/image3.jpg`,
    width: 5662,
    height: 3186,
    alt: "Looking over to the side while singing",
  },
  {
    src: `${path}/image4.jpg`,
    width: 3936,
    height: 2216,
    alt: "Singing with eyes closed",
  },
  {
    src: `${path}/image5.jpg`,
    width: 2200,
    height: 3907,
    alt: "Singing with eyes closed",
  },
  {
    src: `${path}/image6.jpg`,
    width: 5978,
    height: 3364,
    alt: "View of the full band from the crowd",
  },
];

export default funhouse;
