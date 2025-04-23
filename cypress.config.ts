import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // TODO: check this depending of the local port
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
