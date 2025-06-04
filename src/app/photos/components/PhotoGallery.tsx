"use client";

import photos from "@/data/photos";
import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

const renderImage = (
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) => (
  <div
    className="relative w-full"
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

const PhotoGallery = () => (
  <RowsPhotoAlbum photos={photos} render={{ image: renderImage }} />
);

export default PhotoGallery;
