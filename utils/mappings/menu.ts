import { MenuProps } from '@/typings/MenuProps';
import { MenuItemProps } from '@/typings/MenuItemProps';

/**
 * Maps data from JSON to the MenuProps object type
 * @param data Array with menus JSON data
 */
export function formatSiteMenus(data: any): MenuProps[] {
	const menus: MenuProps[] = [];

	data.forEach((menuData) => {
		const menu: MenuProps = {
			id: menuData.id,
			slug: menuData.slug,
			location: menuData.location,
			items: formatMenuLinks(menuData.items),
		};
		menus.push(menu);
	});

	return menus;
}

/**
 * Maps data from JSON to the MenuItemProps object type
 * @param data Array with links JSON data
 */
export function formatMenuLinks(items: any[]): MenuItemProps[] {
	const links: MenuItemProps[] = [];

	items.forEach((itemData) => {
		const link: MenuItemProps = {
			href: itemData.url,
			text: itemData.title,
			target: itemData.target,
			rel: itemData.target === '_blank' ? 'noopener nofollow' : null,
			additionalClass: itemData.class,
			titleAttr: itemData.attr_title,
			subitems: formatMenuLinks(itemData.child_items),
		};
		links.push(link);
	});

	return links;
}
