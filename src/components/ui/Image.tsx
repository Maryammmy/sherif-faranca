"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type Props = NextImageProps & {
  defaultImage?: string;
};

const Image = ({ src, defaultImage = "/favicon.svg", ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState(src || defaultImage);

  return (
    <NextImage
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(defaultImage)}
    />
  );
};

export default Image;
