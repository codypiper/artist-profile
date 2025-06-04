import { Photo } from "react-photo-album";
import funhouse from "./albums/funhouse";
import hibernating from "./albums/hibernating";

const photos: Photo[] = [...funhouse, ...hibernating];

export default photos;
