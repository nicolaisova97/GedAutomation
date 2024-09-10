const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, gedPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    gedPage = poManager.getGedPage();
});

async function login()
{
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
}

async function loginAndNavigateToGed()
{
    await login();
    await homePage.clickOnGed();
}

test('@Smoke: Open Ged page', async({page}) => {
    await loginAndNavigateToGed();
    await gedPage.verifyPageLink();
});

test('@Smoke: Verify Dossiers', async({page}) => {
    await loginAndNavigateToGed();
    await page.waitForLoadState('networkidle');
    await gedPage.verifyDossier();
});

test('@Smoke: Verify Bannettes', async({page}) => {
    await loginAndNavigateToGed();
    await gedPage.verifyBannettes();
});

test('@Smoke: Verify WorkFlow', async({page}) => {
    await loginAndNavigateToGed();
    await gedPage.verifyWorkflow();
});

