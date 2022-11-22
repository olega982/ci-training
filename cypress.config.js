const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  env:{
    email:'MyQAEnvEmail@mail.ru',
    password:'MyQAEnvPassword',

  },
  e2e: {
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*']
  },
  component: {
    setupNodeEvents(on, config) {
      const email = process.env.EMAIL
      const password = process.env.PASSWORD
      config.env = {email,password}
      return config
    }
  },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
});
