const pluginBookshop = require("@bookshop/eleventy-bookshop");
const pluginCloudCannonBookshop = require("@bookshop/cloudcannon-eleventy-bookshop");

module.exports = function (eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["../component-lib"]
	}));

	eleventyConfig.cloudcannonOptions = {
		dir: {
			pages: 'pages'
		}
	};

	eleventyConfig.addPlugin(pluginCloudCannonBookshop);
};