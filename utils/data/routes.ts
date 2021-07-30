// import { Config } from '@/config/site';
// import { RouteProps } from '@/typings/RouteProps';
// import { checkApiPaths } from '@/helpers/data';
// // import { getSlugFromAllCategories } from '@/data/categories';
// import {
// 	formatCategoryRouteData,
// 	formatPageRouteData,
// 	formatPostRouteData,
// 	formatRoutePermalink,
// } from '@/mappings/route';

// export type Endpoint = 'posts' | 'pages' | 'categories';

// /**
//  * Retrieve a list with the path from all posts from the API
//  * @param endpoint The endpoint to fetch data from
//  */
// export async function getPathsFromEndpoint(endpoint: Endpoint): Promise<string[]> {
// 	checkApiPaths();
// 	const fields = `path,is_front_page`;
// 	const quantity = 100;
// 	let url = `${Config.apiBaseUrl}/wp/v2/${endpoint}?_fields=${fields}&per_page=${quantity}`;
// 	let paths;

// 	try {
// 		let res = await fetch(url);
// 		let data = await res.json();
// 		const pagesTotal = parseInt(res.headers.get('x-wp-totalpages'));

// 		// Get more posts if necessary,
// 		// This is due to the limit of 100 pages from WP API
// 		if (pagesTotal > 1) {
// 			for (let i = 2; i <= pagesTotal; i++) {
// 				url = `${Config.apiBaseUrl}/wp/v2/${endpoint}?_fields=${fields}&per_page=${quantity}&page=${i}`;
// 				res = await fetch(url);
// 				const moreData = await res.json();
// 				data = data.concat(moreData);
// 			}
// 		}

// 		paths = data
// 			.filter((route) => !route.is_front_page) // Ignore Homepage
// 			.map((route) => formatRoutePermalink(route.path).split('/')); // Get path only, as array
// 	} catch (err) {
// 		throw new Error(`Unable to fetch route paths from ${url}\n` + err);
// 	}

// 	return paths;
// }

// /**
//  * Retrieve content from a page, post or category from the API
//  * This function expects the post URL to include the category/subcategory slug(s)
//  * @param path Full path of the page to retrieve.
//  */
// export async function getRouteData(path: string[]): Promise<RouteProps> {
// 	if (!path.length) {
// 		return getPageRouteData([]);
// 	}

// 	const allCategoriesSlugs = await getSlugFromAllCategories();
// 	const routeSlug = path[path.length - 1];

// 	// Check if the first path is a category slug
// 	if (allCategoriesSlugs.includes(path[0])) {
// 		if (path.length === 1) {
// 			// CATEGORY
// 			return getCategoryRouteData(routeSlug);
// 		} else if (path.length === 2) {
// 			if (allCategoriesSlugs.includes(path[1])) {
// 				// SUBCATEGORY
// 				return getCategoryRouteData(routeSlug);
// 			} else {
// 				// POST
// 				return getPostRouteData(routeSlug);
// 			}
// 		} else if (path.length > 2) {
// 			// POST
// 			return getPostRouteData(routeSlug);
// 		}
// 	} else {
// 		// PAGE
// 		return getPageRouteData(path);
// 	}

// 	return null;
// }

// /**
//  * Retrieve a post from the API
//  * @param slug Slug of the post to retrieve
//  */
// export async function getPostRouteData(slug: string): Promise<RouteProps> {
// 	checkApiPaths();
// 	let fields = 'id,title,slug,date,extract,categories,content,image,layout,path';
// 	const endpoint = `${Config.apiBaseUrl}/wp/v2/posts/?slug=${slug}&_fields=${fields}`;
// 	let postsData;

// 	try {
// 		const res = await fetch(endpoint);
// 		postsData = await res.json();
// 	} catch (err) {
// 		throw new Error(`Unable to fetch post data from ${endpoint}\n` + err);
// 	}

// 	return formatPostRouteData(postsData[0]);
// }

// /**
//  * Retrieve a page from the API
//  * @param path Path of the page to retrieve. Use [] (empty array) to get homepage
//  */
// export async function getPageRouteData(path: string[]): Promise<RouteProps> {
// 	checkApiPaths();
// 	let fields = 'id,title,slug,path,content,is_front_page,layout,page_data';
// 	const slug = path.length ? path[path.length - 1] : 'home';
// 	const endpoint = `${Config.apiBaseUrl}/wp/v2/pages/?slug=${slug}&_fields=${fields}`;
// 	let pagesData;

// 	try {
// 		const res = await fetch(endpoint);
// 		pagesData = await res.json();
// 	} catch (err) {
// 		throw new Error(`Unable to fetch page data from ${endpoint}\n` + err);
// 	}

// 	return formatPageRouteData(
// 		// Try to get the page that matches the exact path
// 		pagesData.find((page) => {
// 			const permalink = formatRoutePermalink(page.path);
// 			return slug === 'home' ? permalink === '' : permalink === path.join('/');
// 		}),
// 	);
// }

// /**
//  * Retrieve category data from the API
//  * @param slug Slug of the category to retrieve
//  */
// export async function getCategoryRouteData(slug: string): Promise<RouteProps> {
// 	checkApiPaths();
// 	let fields = 'id,name,description,layout,path,parent';
// 	const endpoint = `${Config.apiBaseUrl}/wp/v2/categories/?slug=${slug}&_fields=${fields}`;
// 	let categoriesData;

// 	try {
// 		const res = await fetch(endpoint);
// 		categoriesData = await res.json();
// 	} catch (err) {
// 		throw new Error(`Unable to fetch post data from ${endpoint}\n` + err);
// 	}

// 	return formatCategoryRouteData(categoriesData[0]);
// }
