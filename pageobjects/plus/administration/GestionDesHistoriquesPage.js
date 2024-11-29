const {test, expect} = require('@playwright/test');

class GestionDesHistoriquesPage
{
    constructor(page)
    {
        this.page = page;
        this.documentsButton = page.locator("//a[@href='/page/admin/history/documents']");
        this.dossiersButton = page.locator("//a[@href='/page/admin/history/folders']");
    }

    async clickOnDocumentsButton()
    {
        await this.documentsButton.click();
    }

    async clickOnDossiersButton()
    {
        await this.dossiersButton.click();
    }

    async verifyGestionDesHistoriquesDocumentsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/documents');
    }

    async verifyGestionDesHistoriquesDossiersPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/folders');
    }

    

    
}

module.exports = {GestionDesHistoriquesPage};