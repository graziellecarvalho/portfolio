// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './CategoryLayout.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { RouteProps } from '@/typings/RouteProps';
import { MenuProps } from '@/typings/MenuProps';
import { CategoryLayoutProps } from './CategoryLayout.types';

// Properties definition
interface Props {
	route: RouteProps;
}

export const CategoryLayout = ({ route }: Props) => {
	const content = route.content as CategoryLayoutProps;

	return (
		<Layout context={route}>
			<Container>
				<strong>Category</strong> Layout
				<h1>{route.title}</h1>
				<pre>{JSON.stringify(content, null, '\t')}</pre>
			</Container>
		</Layout>
	);
};
