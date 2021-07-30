// import fetch from 'isomorphic-unfetch';
// import { Config } from '@/config/site';
// import { ArticleProps } from '@/typings/ArticleProps';
// import { checkApiPaths } from '@/helpers/data';
// import { formatPosts } from '@/mappings/post';
// import { formatRoutePermalink } from '@/mappings/route';

// /**
//  * Retrieve a list of posts from the API
//  * @param quantity Number of posts to retrieve, default is 12
//  */
// export async function getPosts(quantity: number = 12): Promise<ArticleProps[]> {
// 	checkApiPaths();
// 	let fields = 'id,title,slug,date,extract,excerpt,categories,image';
// 	const endpoint = `${Config.apiBaseUrl}/wp/v2/posts?_fields=${fields}&per_page=${quantity}&offset=0`;
// 	let postsData;

// 	try {
// 		const res = await fetch(endpoint);
// 		postsData = await res.json();
// 	} catch (err) {
// 		throw new Error(`Unable to fetch posts data from ${endpoint}\n` + err);
// 	}

// 	return formatPosts(postsData);
// }

// /**
//  * Retrieve a list with all posts. Used to get the number os posts that it can retrieve.
//  */
// export async function getAllPosts(): Promise<ArticleProps[]> {
// 	checkApiPaths();
// 	const endpoint = `${Config.apiBaseUrl}/wp/v2/posts`;
// 	let data;

// 	try {
// 		const res = await fetch(endpoint);
// 		data = res.json();
// 	} catch (e) {
// 		throw new Error(`Unable to fetch posts data from ${endpoint}\n` + e);
// 	}

// 	return data;
// }

// export async function getTotalPosts(searched = '' || []) {
// 	checkApiPaths();
// 	let fields = 'id,title,slug,date,extract,excerpt,categories,image';

// 	let endpoint =
// 		(searched[1] &&
// 			`${Config.apiBaseUrl}/wp/v2/posts?_fields=${fields}&per_page=1&search=${searched[0]}`) ||
// 		`${Config.apiBaseUrl}/wp/v2/posts?_fields=${fields}&per_page=1`;

// 	const res = await fetch(endpoint);
// 	const postsTotal = await parseInt(res.headers.get('x-wp-total'));

// 	return Number(postsTotal);
// }

// export async function getBlogPosts(
// 	quantity: number = 12,
// 	origin = '',
// 	pagination,
// ): Promise<ArticleProps[]> {
// 	checkApiPaths();
// 	let fields = 'id,title,slug,date,extract,excerpt,categories,category,image';
// 	let endpoint = '';

// 	origin === 'BlogPagination'
// 		? (endpoint = `${Config.apiBaseUrl}/wp/v2/posts?_fields=${fields}&per_page=${quantity}&page=${pagination}`)
// 		: (endpoint = `${Config.apiBaseUrl}/wp/v2/posts?_fields=${fields}&per_page=${quantity}`);

// 	let postsData;

// 	try {
// 		const res = await fetch(endpoint);
// 		postsData = await res.json();
// 	} catch (err) {
// 		throw new Error(`Unable to fetch posts data from ${endpoint}\n` + err);
// 	}

// 	return formatPosts(postsData);
// }
