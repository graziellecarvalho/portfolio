export class Config {
	static apiBaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL;
	static siteName: string = 'Grazielle Portfolio';
	static gmtId: string = '';
	static isAnalyticsEnabled: boolean = process.env.NEXT_PUBLIC_IS_ANALYTICS_ENABLED === 'true';
}
