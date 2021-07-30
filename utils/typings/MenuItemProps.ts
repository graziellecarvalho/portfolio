import { LinkProps } from '@/typings/LinkProps';

export interface MenuItemProps extends LinkProps {
	additionalClass?: string;
	titleAttr?: string;
	subitems?: LinkProps[];
}
