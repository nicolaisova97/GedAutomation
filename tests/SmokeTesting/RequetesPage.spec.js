const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, requetesDossierPage, requetesDocumentPage, requetesContratPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    requetesDossierPage = poManager.getRequetesDossierPage();
    requetesDocumentPage = poManager.getRequetesDocumentPage();
    requetesContratPage = poManager.getRequetesContratPage();
});

async function loginAndNavigateToRequetes()
{
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
    await homePage.clickOnRequetes();
}

test('@Smoke: Verify Requetes Dossier Page', async({page}) => {
    await loginAndNavigateToRequetes();
    await homePage.clickOnRequetesDossier();
    await requetesDossierPage.verifyDossierPageLink();
});

test('@Smoke: Verify Requetes Document Page', async({page}) => {
    await loginAndNavigateToRequetes();
    await homePage.clickOnRequetesDocument();
    await requetesDocumentPage.verifyDocumentPageLink();
});

test('@Smoke: Verify Requetes Contrat Page', async({page}) => {
    await loginAndNavigateToRequetes();
    await homePage.clickOnRequetesContrat();
    await requetesContratPage.verifyContratPageLink();
});