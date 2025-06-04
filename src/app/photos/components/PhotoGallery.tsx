"use client";

import photos from "@/data/photos";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

const Lightbox = dynamic(() => import("@/components/Lightbox"));

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
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderImage }}
        onClick={({ index: current }) => setIndex(current)}
      />
      {index != null && (
        <Lightbox
          open
          index={index}
          slides={photos}
          close={() => setIndex(null)}
        />
      )}
    </>
  );
};

export default PhotoGallery;
