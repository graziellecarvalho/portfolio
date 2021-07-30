export interface ProfileProps {
	name: string;
	description: string;
	social_media: {
		icon: string;
		url: string;
		label: string;
	}[];
}
