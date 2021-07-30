import { LinkProps } from '@/typings/LinkProps';

/**
 * Return formatted link data
 * @param data Link data from API. It should follow the ACF data properties
 */
export function formatLinkData(data): LinkProps {
	if (data) {
		return {
			href: data.url,
			text: data.title,
			target: data.target,
		};
	} else {
		return null;
	}
}
