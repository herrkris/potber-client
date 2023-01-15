'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'potber',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      PROXY_URL: 'http://localhost:4201',
      API_URL: 'https://forum.mods.de/bb/xml/',
      FORUM_URL: 'https://forum.mods.de/bb/',
      DEBUG: false,
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.APP.PROXY_URL = 'http://localhost:4201';
    ENV.APP.DEBUG = true;
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'integration') {
    ENV.APP.PROXY_URL = 'https://proxy.potber.de';
    ENV.APP.DEBUG = true;
  }

  if (environment === 'production') {
    ENV.APP.PROXY_URL = 'https://proxy.potber.de';
  }

  return ENV;
};
