import Image, { type StaticImageData } from "next/image";

interface BackgroundImageProps {
  src: StaticImageData;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    priority
    placeholder="blur"
    quality={100}
    fill
    className="-z-50 object-cover opacity-50"
  />
);

export default BackgroundImage;
