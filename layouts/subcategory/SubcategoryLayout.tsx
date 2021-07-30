// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './SubcategoryLayout.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { RouteProps } from '@/typings/RouteProps';
import { MenuProps } from '@/typings/MenuProps';
import { SubcategoryLayoutProps } from './SubcategoryLayout.types';

// Properties definition
interface Props {
	route: RouteProps;
}

export const SubcategoryLayout = ({ route }: Props) => {
	const content = route.content as SubcategoryLayoutProps;

	return (
		<Layout context={route}>
			<Container>
				<strong>Subcategory</strong> Layout
				<h1>{route.title}</h1>
				<pre>{JSON.stringify(content, null, '\t')}</pre>
			</Container>
		</Layout>
	);
};
