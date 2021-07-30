import { ArticleProps } from '@/typings/ArticleProps';

export interface ArticlesListProps {
	cssClass?: string;
	posts: ArticleProps[];
	title?: string;
}
