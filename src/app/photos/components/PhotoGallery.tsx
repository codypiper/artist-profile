"use client";

import photos from "@/data/photos";
import Image from "next/image";
import { useState } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const renderImage = (
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) => (
  <div
    className="hover:drop-shadow-glow relative w-full cursor-pointer transition duration-200"
    style={{ aspectRatio: `${width} / ${height}` }}
  >
    <Image
      fill
      src={photo}
      alt={alt}
      title={title}
      sizes={sizes}
      placeholder={"blurDataURL" in photo ? "blur" : undefined}
    />
  </div>
);

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderImage }}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default PhotoGallery;
