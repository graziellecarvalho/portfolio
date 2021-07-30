export interface QueryParams {
	context?: string;
	page?: number;
	perPage?: number;
	search?: string;
	after?: string;
	author?: string;
	authorExclude?: string;
	before?: string;
	include?: string;
	offset?: number;
	order?: string;
	orderBy?: string;
	slug?: string;
	status?: string;
	taxRelation?: string;
	categories?: number[];
	categoriesExclude?: number[];
	tags?: number[];
	tagsExclude?: number[];
	sticky?: boolean;
}
