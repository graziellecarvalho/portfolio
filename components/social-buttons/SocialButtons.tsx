// External dependencies
import React from 'react';
import {
	FaFacebook,
	FaTwitter,
	FaYoutube,
	FaInstagram,
	FaPinterest,
	FaLinkedin,
} from 'react-icons/fa';

// Internal dependencies
import { Component } from './SocialButtons.styles';
import { SocialButtonsProps } from './SocialButtons.types';

// Types
interface Props extends SocialButtonsProps {
	cssClass?: string;
	size?: number;
	color?: string;
}

const IconList = {
	facebook: FaFacebook,
	twitter: FaTwitter,
	youtube: FaYoutube,
	instagram: FaInstagram,
	pinterest: FaPinterest,
	linkedin: FaLinkedin,
};

const Icon = (text, size) => {
	const SpecificIcon = IconList[text.toLowerCase()];
	return <SpecificIcon size={size === 'small' ? 20 : 30} />;
};

export const SocialButtons = ({
	cssClass = '',
	links,
	size = 30,
	color = 'text-primary',
}: Props) => {
	return (
		<Component className={`p-0 list-unstyled d-flex ${cssClass}`}>
			{links.map(({ text, href, target, rel }, index) => (
				<li key={index}>
					<a
						href={href}
						target={target}
						rel={rel}
						aria-label={`${text} social media`}
						className={`mx-3 d-block ${color}`}
					>
						{Icon(text, size)}
					</a>
				</li>
			))}
		</Component>
	);
};
