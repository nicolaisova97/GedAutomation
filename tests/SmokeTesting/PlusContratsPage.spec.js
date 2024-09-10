const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, plusContratsPage, plusContratsNouveauContratPage, plusContratsFournisseursPage, plusContratsClientsPage, plusContratsEditionFormulairePage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    plusContratsPage = poManager.getPlusContratsPage();
    plusContratsNouveauContratPage = poManager.getPlusContratsNouveauContratPage();
    plusContratsFournisseursPage = poManager.getPlusContratsFournisseursPage();
    plusContratsClientsPage = poManager.getPlusContratsClientsPage();
    plusContratsEditionFormulairePage = poManager.getPlusContratsEditionFormulairePage();
});

async function loginAndNavigateToPlusContrats() {
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
    await homePage.clickOnPlus();
    await homePage.clickOnPlusContratsButton();
}

test('@Smoke: Verify Plus Contrats Page', async({page}) => {
    await loginAndNavigateToPlusContrats();
    await plusContratsPage.verifyPlusContratsPageLink();
});

test('@Smoke: Verify Plus Contrats Nouveau Contrat Page', async({page}) => {
    await loginAndNavigateToPlusContrats();
    await plusContratsPage.clickOnNouvevauCotrat();
    await plusContratsNouveauContratPage.verifyPlusContratsNouveauContratPageLink();
});

test('@Smoke: Verify Plus Contrats Fournisseurs Page', async({page}) => {
    await loginAndNavigateToPlusContrats();
    await plusContratsPage.clickOnFournisseurs();
    await plusContratsFournisseursPage.verifyPlusContratsFournisseursPageLink();
});

test('@Smoke: Verify Plus Contrats Clients Page', async({page}) => {
    await loginAndNavigateToPlusContrats();
    await plusContratsPage.clickcOnClients();
    await plusContratsClientsPage.verifyPlusContratsClientsPageLink();
});

test('@Smoke: Verify Plus Edition Formulaire Page', async({page}) => {
    await loginAndNavigateToPlusContrats();
    await plusContratsPage.clickOnEditionFormulaire();
    await plusContratsEditionFormulairePage.verifyEditionFormulairePageTitle();
});