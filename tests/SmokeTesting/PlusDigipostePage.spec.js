const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, plusDigipostePage, plusDigiposteBoiteDenvoiPage, plusDigiposteReferentielSalariePage, 
plusDigiposteConfigurationDuReferentielSalariePage, plusDigiposteCoffreEnAttenteDeCreationPage, plusDigiposteListeDesDocumentsPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    plusDigipostePage = poManager.getPlusDigipostePage();
    plusDigiposteBoiteDenvoiPage = poManager.getDigiposteBoiteDenvoiPage();
    plusDigiposteReferentielSalariePage = poManager.getDigiposteReferentielSalariePage();
    plusDigiposteConfigurationDuReferentielSalariePage = poManager.getDigiposteConfigurationDuReferentielSalarieButton();
    plusDigiposteCoffreEnAttenteDeCreationPage = poManager.getDigiposteCoffreEnAttenteDeCreationPage();
    plusDigiposteListeDesDocumentsPage = poManager.getDigiposteListeDesDocumentsPage();
});

async function loginAndNavigateToPlusDigiposte() {
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
    await homePage.clickOnPlus();
    await homePage.clickOnPlusDigiposte();
}

test('@Smoke: Verify Plus Digiposte Boite Denvoi Page', async({page}) => {
    await loginAndNavigateToPlusDigiposte();
    await plusDigipostePage.verifyPlusDigipostePageLink();
});

test('@Smoke: Verify Plus Digiposte Referentiel Salarie Page', async({page}) => {
    await loginAndNavigateToPlusDigiposte();
    await plusDigipostePage.clickOnReferentielSalarie();
    await page.waitForTimeout(2000);
    await plusDigiposteReferentielSalariePage.verifyPlusDigiposteReferentielSalariePageLink();
});

test('@Smoke: Verify Plus Digiposte Configuration Du Referentiel Salarie Page', async({page}) => {
    await loginAndNavigateToPlusDigiposte();
    await plusDigipostePage.clickOnConfigurationDuReferentielSalarie();
    await page.waitForTimeout(2000);
    await plusDigiposteConfigurationDuReferentielSalariePage.verifyPlusDigiposteConfigurationDuReferentielSalariePageLink();
});

test('@Smoke: Verify Plus Digiposte Coffre En Attente De Creation Page', async({page}) => {
    await loginAndNavigateToPlusDigiposte();
    await plusDigipostePage.clickOnCoffreEnAttenteDeCreation();
    await page.waitForTimeout(2000);
    await plusDigiposteCoffreEnAttenteDeCreationPage.verifyPlusDigiposteCoffreEnAttenteDeCreationPageLink();
});

test('@Smoke: Verify Plus Digiposte Liste Des Documents Page', async({page}) => {
    await loginAndNavigateToPlusDigiposte();
    await plusDigipostePage.clickOnListeDesDocument();
    await page.waitForTimeout(2000);
    await plusDigiposteListeDesDocumentsPage.verifyPlusDigiposteListeDesDocumentsPageLink();
});