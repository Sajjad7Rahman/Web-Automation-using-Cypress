const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      config.specPattern = [

        'cypress/e2e/login.cy.js',
        'cypress/e2e/makeappointment.cy.js'

      ]

      return config;
      
    },
  },
});
