// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './DefaultLayout.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { RouteProps } from '@/typings/RouteProps';
import { MenuProps } from '@/typings/MenuProps';
import { DefaultLayoutProps } from './DefaultLayout.types';

// Types
interface Props {
	route: RouteProps;
}

export const DefaultLayout = ({ route }: Props) => {
	const content = route.content as DefaultLayoutProps;

	return (
		<Layout context={route}>
			<Container>
				<strong>Default</strong> Layout
				<h1>{route.title}</h1>
				<pre>{JSON.stringify(content, null, '\t')}</pre>
			</Container>
		</Layout>
	);
};
