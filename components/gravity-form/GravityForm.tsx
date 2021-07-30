// External dependencies
import React from 'react';

// Internal dependencies
import { Component } from './GravityForm.styles';

// Types
interface Props {
	cssClass?: string;
}

export const GravityForm = ({ cssClass = '' }: Props) => {
	return <Component className={`${cssClass}`}></Component>;
};
