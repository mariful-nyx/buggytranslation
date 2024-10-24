const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  {
    i18n: {
      locales: ['en', 'de', 'pl', 'nl'],
      defaultLocale: 'en',
      localeDetection: true,
    },
    compiler: {
      styledComponents: true,
    },
  }
);
