const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');

// Initialize i18next instance
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: require('../locales/en.json'),
    },
    // Add more languages as needed
  },
});

// Set up i18next middleware
const middleware = i18nextMiddleware.handle(i18next);

module.exports = middleware;
