import Image, { StaticImageData } from "next/image";

interface BackgroundImageProps {
  src: StaticImageData;
  alt: string;
}

const BackgroundImage = ({ src, alt }: BackgroundImageProps) => (
  <Image
    src={src}
    alt={alt}
    placeholder="blur"
    quality={100}
    fill
    className="-z-50 object-cover opacity-50"
  />
);

export default BackgroundImage;
