import { ImageProps } from '@/typings/ImageProps';

export interface ArticleProps {
	id: number;
	slug: string;
	title: string;
	permalink: string;
	image?: ImageProps;
	date?: string;
	excerpt?: string;
	categories?: number[];
}
