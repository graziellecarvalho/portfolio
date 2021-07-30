// import { Config } from '@/config/site';
// import { checkApiPaths } from '@/helpers/data';

// export async function getSlugFromAllCategories(): Promise<string[]> {
// 	checkApiPaths();
// 	let fields = 'slug,count';
// 	const quantity = 100;
// 	let endpoint = `${Config.apiBaseUrl}/wp/v2/categories?_fields=${fields}&per_page=${quantity}&hide_empty=true`;

// 	try {
// 		let res = await fetch(endpoint);
// 		let data = await res.json();
// 		const pagesTotal = parseInt(res.headers.get('x-wp-totalpages'));

// 		if (pagesTotal > 1) {
// 			for (let i = 2; i <= pagesTotal; i++) {
// 				endpoint = `${Config.apiBaseUrl}/wp/v2/categories?_fields=${fields}&per_page=${quantity}&page=${i}`;
// 				res = await fetch(endpoint);
// 				const moreData = await res.json();
// 				data = data.concat(moreData);
// 			}
// 		}
// 		let slugsArray = [];

// 		data.map((category) => {
// 			const pagesCategory = Math.ceil(category.count / 12);
// 			if (pagesCategory > 1) {
// 				slugsArray.push([category.slug]);

// 				for (let i = 1; i < pagesCategory; i++) {
// 					slugsArray.push([category.slug, String(i + 1)]);
// 				}
// 			} else {
// 				slugsArray.push(category.slug);
// 			}
// 		});

// 		return slugsArray;
// 	} catch (err) {
// 		throw new Error(`Unable to fetch category slugs from ${endpoint}\n` + err);
// 	}
// }
