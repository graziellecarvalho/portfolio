// External dependencies
import React from 'react';
import Image from 'next/image';

// Internal dependencies
import { Component, Picture, Badge, Title, Excerpt, Button } from './ArticleCard.styles';

// Typing variables
import { ArticleCardProps } from './ArticleCard.types';

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
			<div className={``}>
				{/* BADGE */}
				<Badge className={``}>{badge}</Badge>

				{/* TITLE */}
				<Title className={``}>{title}</Title>

				{/* EXCERPT */}
				{excerpt && <Excerpt className={``}>{excerpt}</Excerpt>}

				{/* BUTTON */}
				<Button href={buttonUrl} className={`btn btn-primary stretched-link`}>
					{buttonText}
				</Button>
			</div>
		</Component>
	);
};
