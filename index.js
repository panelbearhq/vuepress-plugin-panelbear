const { path } = require('@vuepress/shared-utils');

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const PANELBEAR_SITE = options.site || siteConfig.site || false;
    const PANELBEAR_DEBUG = options.debug || siteConfig.debug || false;

    if (!PANELBEAR_SITE) {
      console.warn(
        "You are the Panelbear 'site' in your plugin configuration. This is required for the plugin to work.",
      );
    }

    return { PANELBEAR_SITE, PANELBEAR_DEBUG };
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
});
