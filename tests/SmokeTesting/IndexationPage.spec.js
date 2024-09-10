const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, stationDindexationPage, planDindexationDocumentPage, planDindexationDossierPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    stationDindexationPage = poManager.getStationDindexationPage();
    planDindexationDocumentPage = poManager.getPlanDindexationDocumentPage();
    planDindexationDossierPage = poManager.getPlanDindexationDossierPage();
});

async function loginAndNavigateToIndexation()
{
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
    await homePage.clickOnIndexation();
}

test('@Smoke: Verify Station Dindexation', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnStationDindexation();
    stationDindexationPage.verifyPageLink();
});

test('@Smoke: Verify Plan Dindexation Document General page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDocument();
    planDindexationDocumentPage.verifyPageLink();
});

test('@Smoke: Verify Plan Dindexation Document LAD page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDocument();
    await planDindexationDocumentPage.clickOnLad();
    await page.waitForTimeout(300);
    planDindexationDocumentPage.verifyLadPage();
});

test('@Smoke: Verify Plan Dindexation Document Donnees Comptable page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDocument();
    await planDindexationDocumentPage.clickOnDonneesComptables();
    await page.waitForTimeout(300);
    planDindexationDocumentPage.verifyDonneesComptablesPage();
});

test('@Smoke: Verify Plan Dindexation Document Association Automatique page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDocument();
    await planDindexationDocumentPage.clickOnAssociationAutomatique();
    await page.waitForTimeout(300);
    planDindexationDocumentPage.verifyAssociationAutomatiquePage();
});

test('@Smoke: Verify Plan Dindexation Document Controle de Coherence page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDocument();
    await planDindexationDocumentPage.clickOnControleDeCoherence();
    await page.waitForTimeout(300);
    planDindexationDocumentPage.verifyControleDeCoherencePage();
});

test('@Smoke: Verify Plan Dindexation Dossier General page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDossier();
    await planDindexationDossierPage.clickOnCompletudeDeDossier();
    await page.waitForLoadState('networkidle');
    planDindexationDossierPage.verifyPageLink();
});

test('@Smoke: Verify Plan Dindexation Dossier Completude de dossier page', async({page}) => {
    await loginAndNavigateToIndexation();
    await homePage.clickOnPlanDindexationDossier();
    await planDindexationDossierPage.clickOnCompletudeDeDossier();
    await page.waitForTimeout(300);
    planDindexationDossierPage.verifyCompletudeDeDossierPageLink();
});