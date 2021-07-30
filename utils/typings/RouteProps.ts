import { CategoryLayoutProps } from '@/layouts/category/CategoryLayout.types';
import { HomeLayoutProps } from '@/layouts/home/HomeLayout.types';
import { PostLayoutProps } from '@/layouts/post/PostLayout.types';

export interface RouteProps {
	title: string;
	permalink: string;
	layout: string;
	content: HomeLayoutProps | PostLayoutProps | CategoryLayoutProps | {};
}
