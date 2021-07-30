import { MenuItemProps } from '@/typings/MenuItemProps';

export interface MenuProps {
	id: number;
	slug: string;
	location: 'header' | 'social' | 'footer';
	items: MenuItemProps[];
}
