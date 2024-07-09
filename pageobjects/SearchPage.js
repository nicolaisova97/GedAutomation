const {test, expect} = require('@playwright/test');

class SearchPage
{
    constructor(page)
    {
        this.page = page;
        this.searchInput = page.locator("#fulltext");
        this.documentsRadio = page.locator("#type-1");
        this.dossiersRadio = page.locator("#type-2");
        this.searchTypeDropdown = page.locator("#documentSearchTypeSelect");
        this.tousLesDossiersRadio = page.locator("#typeScope-1");
        this.parcourirRadio = page.locator("#typeScope-2");
        this.plusDoptionsButton = page.locator("#documentSearchOptionsToggle");
        this.tousLesTermesRadio = page.locator('#documentSearchOperatorAnd');
        this.auMoinsUnTermeRadio = page.locator('#documentSearchOperatorOr');
        this.rechercheApproximativeCheckbox = page.locator('#documentSearchFuzzy');
        this.rechercherButton = page.locator(".btn-primary");
        this.entreeText = page.locator(".text-muted mt10");
        this.emptySearchError = page.locator("#info_recherche");
        this.searchResultsTable = page.locator('.selectable');
        this.searchResultsTableRows = page.locator('.selectable tbody tr');
    }

    async clickOnSearchInput()
    {
        await this.searchInput.click();
    }

    async clickOnDocumentRadio()
    {
        await this.documentsRadio.click();
    }

    async clickOnDossiersRadio()
    {
        await this.dossiersRadio.click();
    }

    async clickOnPlusDoptionsButton()
    {
        await this.plusDoptionsButton.click();
    }

    async clickOnTousLesTermesRadio()
    {
        await this.tousLesTermesRadio.click();
    }

    async clickOnAuMoinsUnTermeRadio()
    {
        await this.auMoinsUnTermeRadio.click();
    }

    async getEmptySearchErrorText() {
        return await this.emptySearchError.textContent();
    }

    async clickOnRechercherButton()
    {
        await this.rechercherButton.click();
    }

    async getEntreeText()
    {
        return await this.entreeText.textContent();
    }

    async typeSearchData(data)
    {
        await this.searchInput.fill(data);
    }

    async verifyTableHasRows() {
        await this.page.waitForSelector('.selectable tbody tr', { state: 'attached' });
        const rowCount = await this.searchResultsTableRows.count();
        expect(rowCount).toBeGreaterThan(0);
    }

    async verifyTableHasNoRows() {
        const rowCount = await this.searchResultsTableRows.count();
        expect(rowCount).toBe(0);
    }

    


    


        
}

module.exports = {SearchPage};