const {test, expect} = require('@playwright/test');
class PlusContratsPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauContratButton = page.locator("//a[@href='/page/contracts/add']");
        this.fournisseursButton = page.locator("//a[@href='/page/partners/suppliers']");
        this.clientsButton = page.locator("//a[@href='/page/partners/clients']");
        this.editionFormulaireButton = page.locator("//a[@href='/page/metadata/contract/administration']");
    }

    async verifyPlusContratsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/contracts');
    }

    async clickOnNouvevauCotrat()
    {
        await this.nouveauContratButton.click();
    }

    async clickOnFournisseurs()
    {
        await this.fournisseursButton.click();
    }

    async clickcOnClients()
    {
        await this.clientsButton.click();
    }

    async clickOnEditionFormulaire()
    {
        await this.editionFormulaireButton.click();
    }

}

module.exports = {PlusContratsPage};