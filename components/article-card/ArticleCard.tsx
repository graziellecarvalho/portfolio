// External dependencies
import React from "react";
import Image from "next/image";

// Internal dependencies
import {
  Component,
  Picture,
  Info,
  Badge,
  Title,
  Excerpt,
  Button,
} from "./ArticleCard.styles";

// Typing variables
import { ArticleCardProps } from "./ArticleCard.types";

interface Props extends ArticleCardProps {
  cssClass?: string;
}

export const ArticleCard = ({
  badge,
  title,
  excerpt,
  buttonText,
  buttonUrl,
  image,
  cssClass,
}: Props) => {
  return (
    <Component className={`${cssClass} position-relative`}>
      {/* IMAGE */}
      {image && (
        <Picture>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            objectFit="cover"
          />
        </Picture>
      )}
      <Info className="px-3 py-4">
        {/* BADGE */}
        <Badge className={``}>{badge}</Badge>

        {/* TITLE */}
        <Title className={``}>{title}</Title>

        {/* EXCERPT */}
        {excerpt && <Excerpt className={``}>{excerpt}</Excerpt>}

        {/* BUTTON */}
        <Button href={buttonUrl} className={`btn p-0 stretched-link`}>
          {buttonText}
        </Button>
      </Info>
    </Component>
  );
};
