const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, gedPage, searchPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    gedPage = poManager.getGedPage();
    searchPage = poManager.getSearchPage();
});

async function login()
{
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "test.QA2024");
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

test('@Smoke1: Drag and Drop a document to Document a classer on GED page', async({page}) => {
    await loginAndNavigateToGed();
    await page.setInputFiles('input[type="file"]', [
        '/home/nick/Downloads/testAutomation.pdf'
    ]);
    await page.reload();
    const documentLocator = page.locator("//a[contains(text(), 'testAutomation.pdf')]");
    await expect(documentLocator).toBeVisible();
});

test('@Smoke1: Standard search of a document by at least one keyword', async({page}) => {
    await loginAndNavigateToGed();
    await searchPage.searchForADocument("testAutomation");
    const documentName = page.locator("//span[contains(text(), 'testAutomation')]");
    await expect(documentName).toBeVisible();
    await page.hover("#view-document-thumb-26");
});

