const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, tableauDeBordPage, searchPage, helpPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    tableauDeBordPage = poManager.getTableauDeBordPage();
    searchPage = poManager.getSearchPage();
    helpPage = poManager.getHelpPage();
});

async function login()
{
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "FWNa1cBn");
}

test('@Smoke: Open Tableau du Bord page', async() => {
    await login();    
    await tableauDeBordPage.verifyPageTitle();
});

test('@Smoke: Search with empty data', async ({page}) => {
    await login();
    await searchPage.clickOnSearchInput();    
    await searchPage.clickOnRechercherButton();
    const errorText = await searchPage.getEmptySearchErrorText();
    expect(errorText).toContain('Veuillez saisir votre recherche');
});

test('@Smoke: Valid search', async ({page}) => {
    await login();
    await searchPage.clickOnSearchInput();  
    await searchPage.typeSearchData('test');  
    await searchPage.clickOnRechercherButton();
    await searchPage.verifyTableHasRows();
});

test('@Smoke: Invalid search', async ({page}) => {
    await login();
    await searchPage.clickOnSearchInput();  
    await searchPage.typeSearchData('kjdjgasidguasjkdas');  
    await searchPage.clickOnRechercherButton();
    await searchPage.verifyTableHasNoRows();
});

test('@Smoke3: dasd', async ({page}) => {
    await login();
    await helpPage.clickOnHelpButton();
    await helpPage.clickOnManuelDutilisationButton();
    // await helpPage.clickOnAideEnLigneButton();
    // test123
});