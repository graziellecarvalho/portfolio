import { OptionsProps } from '@/typings/OptionsProps';

/**
 * Maps data from JSON to the OptionsProps object type
 * @param data Array with post JSON data
 */
export function formatSiteOptions(data: any): OptionsProps {
	const siteOptions: OptionsProps = {
		footer: {
			copyright: data.options.footer.copyright_text,
		},
	};

	return siteOptions;
}
