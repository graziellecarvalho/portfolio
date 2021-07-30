import { ArticleProps } from '@/typings/ArticleProps';
import { formatImageData } from './image';
import { formatRoutePermalink } from './route';

// ======================================================================
// NOTE: The mapping for the POST LAYOUT lives at the route mappings file
// ======================================================================

/**
 * Maps data from JSON to the Post object type
 * @param data Array with post JSON data
 */
export function formatPosts(data: any[]): ArticleProps[] {
	const posts: ArticleProps[] = [];

	data.forEach((postData) => {
		const post: ArticleProps = {
			id: postData.id,
			title: postData.title?.rendered,
			slug: postData.slug,
			permalink: formatRoutePermalink(postData.slug),
		};
		if (postData.hasOwnProperty('extract') && postData.extract) {
			post.excerpt = postData.extract;
		}
		if (postData.hasOwnProperty('categories') && postData.categories) {
			post.categories = postData.categories;
		}
		if (postData.hasOwnProperty('image') && postData.image) {
			post.image = formatImageData(postData.image, 'medium');
		}
		posts.push(post);
	});
	return posts;
}
