// @ts-check
const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  retries: 0,
  workers: 3, // how much test files to run in parralel
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  projects: [
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        headless: true,
        screenshot: "on",
        video: "retain-on-failure",
        ignoreHttpsErrors: true, // ignore https security page
        permissions: ["geolocation"], // allow permission to use geolocation from the left top corner
        trace: "on",
        // ...devices['Pixel 5']
        viewport: { width: 1440, height: 720 },
      },
    },
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
};

module.exports = config;
