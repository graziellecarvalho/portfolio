// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './PostLayout.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { RouteProps } from '@/typings/RouteProps';
import { MenuProps } from '@/typings/MenuProps';
import { PostLayoutProps } from './PostLayout.types';

// Properties definition
interface Props {
	route: RouteProps;
}

export const PostLayout = ({ route }: Props) => {
	const content = route.content as PostLayoutProps;

	return (
		<Layout context={route}>
			<Container>
				<strong>Post</strong> Layout
				<h1>{route.title}</h1>
				<pre>{JSON.stringify(content, null, '\t')}</pre>
			</Container>
		</Layout>
	);
};
