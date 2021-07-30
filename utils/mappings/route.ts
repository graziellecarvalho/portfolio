import { RouteProps } from '@/typings/RouteProps';
import { formatImageData } from '@/mappings/image';
import { formatHomePageContent } from '@/mappings/home';

/**
 * Maps page data from JSON to the Page object type
 * @param data Page JSON data
 */
export function formatPageRouteData(data: any): RouteProps {
	data.page_data.htmlContent = data.content.rendered;
	const route: RouteProps = {
		title: data.title?.rendered,
		permalink: data.path !== '/' ? formatRoutePermalink(data.path) : '/',
		content: (() => {
			switch (data.layout) {
				case 'home':
					return formatHomePageContent(data.page_data);
				// PLOP PLACEHOLDER (DO NOT REMOVE)
				default:
					return {};
			}
		})(),
		layout: data.layout,
	};

	return route;
}

/**
 * Maps post data from JSON to the RouteProps object type
 * @param data Post JSON data
 */
export function formatPostRouteData(data): RouteProps {
	const layoutData: RouteProps = {
		title: data.title?.rendered,
		permalink: formatRoutePermalink(data.path),
		layout: data.layout,
		content: {
			htmlContent: data.content.rendered,
			excerpt: data.extract,
			categories: data.categories,
			image: formatImageData(data.image, 'large'),
		},
	};

	return layoutData;
}

/**
 * Maps category data from JSON to the RouteProps object type
 * @param data Category JSON data
 */
export function formatCategoryRouteData(data): RouteProps {
	const layoutData: RouteProps = {
		title: data.name,
		permalink: formatRoutePermalink(data.path),
		layout: data.layout,
		content: {
			description: data.description,
		},
	};

	return layoutData;
}

/**
 * Returns a valid formatted route
 * @param path URL path
 */
export function formatRoutePermalink(path) {
	return path.replace(/(^\\?\/)|(\\?\/$)/g, ''); // Trim slashes
}
