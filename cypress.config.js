const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
    supportFile: 'cypress/support/index.js'
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,
  videosFolder: "videos" 
});
