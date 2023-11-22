import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 768,
  viewportWidth: 1368,
  video: false,
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  watchForFileChanges: false,
  taskTimeout: 300000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  waitForAnimations: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalRunAllSpecs: true,
  },
});
