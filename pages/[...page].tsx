// External dependencies
import React from 'react';
import { InferGetStaticPropsType } from 'next';

// Internal modules
import { getPathsFromEndpoint, getRouteData } from '@/data/routes';

// Layouts
import DefaultLayout from 'layouts/default';
import PostLayout from '@/layouts/post';
import CategoryLayout from '@/layouts/category';
import SubcategoryLayout from '@/layouts/subcategory';

// Define the pages to be generated
export async function getStaticPaths() {
	const posts = await getPathsFromEndpoint('posts');
	const pages = await getPathsFromEndpoint('pages');
	const categories = await getPathsFromEndpoint('categories');
	const paths = [...pages, ...posts, ...categories].map((path) => {
		return { params: { page: path } };
	});

	return {
		paths: paths,
		fallback: false,
	};
}

// Get data during buid to pass as props to the page
export async function getStaticProps(context) {
	const path = context.params.page;
	const route = await getRouteData(path);

	return {
		props: {
			route,
		},
	};
}

function DynamicPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
	switch (props.route.layout) {
		case 'post':
			return <PostLayout {...props} />;
		case 'category':
			return <CategoryLayout {...props} />;
		case 'subcategory':
			return <SubcategoryLayout {...props} />;
		default:
			return <DefaultLayout {...props} />;
	}
}

export default DynamicPage;
