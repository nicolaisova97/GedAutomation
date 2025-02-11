const { test, expect } = require("@playwright/test");
const { POManager } = require("../../pageobjects/POManager");

let poManager, loginPage, homePage;

test.beforeEach(async ({ page }) => {
  poManager = new POManager(page);
  loginPage = poManager.getLoginPage();
  homePage = poManager.getHomePage();
});

test("@Smoke: Log In with valid credentials", async (page) => {
  await loginPage.goTo();
  await loginPage.validLogIn("ion.agachi", "ZAQ!2wsx");
  await homePage.verifyPageTitle();
});

test("@Smoke: Login: Open Reset password form ", async (page) => {
  //some problems here: related to translations test
  await loginPage.goTo();
  await loginPage.openForgotPasswordForm();
});

test("@Smoke1: Login1: Successfully reset password", async (page) => {
  //some problems here: related to translations
  await loginPage.goTo();
  await loginPage.resetPassword("test@test.test", "ddjashdjkas");
});
