import React from 'react';
import NextHead from 'next/head';

// Utils
import { SeoProps } from '@/typings/SeoProps';

export const Head = () => {
	return (
		<NextHead>
			{/* PAGE TITLE */}
			{/* <title>{this.props.seo.title?.replace('[SITE_NAME]', '_W')}</title> */}
			<title>Boilerplate</title>

			{/* YOAST METAS & SCHEMA */}
			{/* {this.props.seo.headHtml !== undefined && ReactHtmlParser( this.props.seo.headHtml )} */}
		</NextHead>
	);
};
