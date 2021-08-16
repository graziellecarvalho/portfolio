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
	webpack: (config, { isServer }) => {
		// SITEMAP GENERATION
		/* if (isServer) {
			require('./utils/generateSiteMap')
		} */

		return config;
	},
};
