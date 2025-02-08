// @ts-check
const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  retries: 0,
  workers: 3, // сколько тестов запускать параллельно
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ["list"], // можно оставить стандартный список
    ["allure-playwright"], // добавляем репортер Allure
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
