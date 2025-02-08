// @ts-check
const { devices, defineConfig } = require("@playwright/test");

const config = defineConfig({
  testDir: "./tests",
  retries: 0,
  workers: 3, // how many test files to run in parallel
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ["list"],
    ["allure-playwright", { outputFolder: "allure-results" }],
    ["html"],
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
});

module.exports = config;
