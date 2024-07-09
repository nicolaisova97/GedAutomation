const {test, expect} = require('@playwright/test');
class PlanDindexationDocumentPage
{
    constructor(page)
    {
        this.page = page;
        this.ladButton = page.locator("//a[@href='/page/metadata/administration/lad']");
        this.donneesComptableButton = page.locator("//a[@href='/page/metadata/administration/accounting']");
        this.associationAutomatiqueButton = page.locator("//a[@href='/page/metadata/administration/associationByMetadata']");
        this.controleDeCoherenceButton = page.locator("//a[@href='/page/metadata/administration/reconciliation']");
    }

    async verifyPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/metadata/administration');
    }

    async clickOnLad()
    {
        this.ladButton.click();
    }

    async clickOnDonneesComptables()
    {
        this.donneesComptableButton.click();
    }

    async clickOnAssociationAutomatique()
    {
        this.associationAutomatiqueButton.click();
    }

    async clickOnControleDeCoherence()
    {
        this.controleDeCoherenceButton.click();
    }

    async verifyLadPage() {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/administration/lad');
    }

    async verifyDonneesComptablesPage() {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/administration/accounting');
    }

    async verifyAssociationAutomatiquePage() {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/administration/associationByMetadata');
    }

    async verifyControleDeCoherencePage() {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/administration/reconciliation');
    }
    

}

module.exports = {PlanDindexationDocumentPage}