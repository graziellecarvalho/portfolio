// External dependencies
import React from 'react';
import { InferGetStaticPropsType } from 'next';

// Internal modules
import HomeLayout from '@/layouts/home';
// import { getRouteData } from '@/data/routes';

// Get data during buid to pass as props to the page
// export async function getStaticProps() {
// 	const route = await getRouteData([]);

// 	return {
// 		props: {
// 			route,
// 		},
// 	};
// }

// function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
// 	return <HomeLayout {...props} />;
// }

function HomePage() {
	return <HomeLayout />;
}

export default HomePage;
