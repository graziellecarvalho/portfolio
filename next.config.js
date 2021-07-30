const path = require('path');

module.exports = {
	trailingSlash: true,
	basePath: '',
	eslint: {
		ignoreDuringBuilds: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles/scss/core')],
	},
	images: {
		domains: ['dev.intermobile.com.br', 'wp-headless-boilerplate.local'],
	},
	webpack: (config, { isServer }) => {
		// SITEMAP GENERATION
		/* if (isServer) {
			require('./utils/generateSiteMap')
		} */

		return config;
	},
};
