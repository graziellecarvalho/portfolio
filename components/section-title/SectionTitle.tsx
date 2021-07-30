// External dependencies
import React from 'react';

// Internal dependencies
import { Component, Title } from './SectionTitle.styles';

// Types
import { SectionTitleProps } from './SectionTitle.types';

interface Props extends SectionTitleProps {
	cssClass?: string;
}

export const SectionTitle = ({ title, cssClass = '' }: Props) => {
	return (
		<Component className={`${cssClass}`}>
			<Title>{title}</Title>
		</Component>
	);
};
