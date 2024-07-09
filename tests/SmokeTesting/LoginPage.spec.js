const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage; 

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
});

test('@Smoke: Open Authentication page', async ( page ) => {
    await loginPage.goTo();
    await loginPage.verifyPageTitle();
});

test('@Smoke: Log In with valid credentials', async ( page ) => {
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "FWNa1cBn");    
    await homePage.verifyPageTitle();
});

test('@Smoke: Login: Log in with empty fields', async ( page ) => {
    await loginPage.goTo();
    await loginPage.verifyIfUsernameAndPasswordFieldsAreRequired();
});

test('@Smoke: Login: Log in with invalid credentials', async ( page ) => {
    await loginPage.goTo();
    await loginPage.loginWithInvalidCredentials("test,nd", "djsahdjkahs");
});

test('@Smoke: Login: Open Reset password form', async ( page ) => {
    await loginPage.goTo();
    await loginPage.openForgotPasswordForm();
});

test('@Smoke: Login: Successfully reset password', async ( page ) => {
    await loginPage.goTo();
    await loginPage.resetPassword('test@test.test', 'djashdjkas');
});
