const { test, expect } = require("@playwright/test");
const { POManager } = require("../../pageobjects/POManager");

let poManager, loginPage, homePage;

test.beforeEach(async ({ page }) => {
  poManager = new POManager(page);
  loginPage = poManager.getLoginPage();
  homePage = poManager.getHomePage();
});

test("@Smoke: Open Authentication page", async (page) => {
  await loginPage.goTo();
  await loginPage.verifyPageTitle();
});

test("@Demo: Log In with valid credentials", async (page) => {
  await loginPage.goTo();
  await loginPage.validLogIn("test.md", "test.QA2025");
  await homePage.verifyPageTitle();
});

test("@Demo: Log in with empty fields", async (page) => {
  await loginPage.goTo();
  await loginPage.verifyIfUsernameAndPasswordFieldsAreRequired();
});

test("@Demo: Log in with invalid credentials", async (page) => {
  //some problems here: related to translations
  await loginPage.goTo();
  await loginPage.loginWithInvalidCredentials("test,nd", "djsahdjkahs");
});

test("@Smoke: Open Reset password form", async (page) => {
  //some problems here: related to translations
  await loginPage.goTo();
  await loginPage.openForgotPasswordForm();
});

test("@Smoke: Successfully reset password", async (page) => {
  //some problems here: related to translations
  await loginPage.goTo();
  await loginPage.resetPassword("test@test.test", "djashdjkas");
});

test("@Demo: Logout", async (page) => {
  //some problems here: related to translations
  await loginPage.goTo();
  await loginPage.validLogIn("test.md", "test.QA2025");
  await homePage.clickOnMonCompteLogo();
  await homePage.clickOnLogoutButton();
  await loginPage.verifyPageURL(page, "https://qa-ged.eukles.com");
});
