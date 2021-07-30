// External dependencies
import React from 'react';

// Internal modules
import { Layout } from './PageNotFoundLayout.styles';
import { RouteProps } from '@/typings/RouteProps';
import { MenuProps } from '@/typings/MenuProps';
import { OptionsProps } from '@/typings/OptionsProps';

// Properties definition
interface Props {
	route: RouteProps;
}

export const PageNotFoundLayout = ({ route }: Props) => {
	return (
		<Layout cssClass="pageNotFoundLayout" context={route}>
			<div className="container">
				<h1>404</h1>
				<strong>Page Not Found Layout</strong> – Page: {route.title}
			</div>
		</Layout>
	);
};
