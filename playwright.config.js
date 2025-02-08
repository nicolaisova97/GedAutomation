// playwright.config.js
const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  retries: 0,
  workers: 3, // how many test files to run in parallel
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  projects: [
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        headless: true,
        screenshot: "on",
        video: "retain-on-failure",
        ignoreHttpsErrors: true,
        permissions: ["geolocation"],
        trace: "on",
        viewport: { width: 1440, height: 720 },
      },
    },
  ],
};

module.exports = config;
