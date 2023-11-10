const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  animationDistanceThreshold: 5,
  blockHosts: [],
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  execTimeout: 60000,
  pageLoadTimeout: 440000,
  requestTimeout: 30000,
  responseTimeout: 40000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins')(on, config)
    },
    baseUrl: 'https://www.guestreservations.com/',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.*'
  },
});
