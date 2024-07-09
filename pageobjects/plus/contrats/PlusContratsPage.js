const {test, expect} = require('@playwright/test');
class PlusContratsPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauContratButton = page.locator("#btn_contrat_ajouter");
        this.fournisseursButton = page.locator('#btn_contrat_fournisseurs');
        this.clientsButton = page.locator('#btn_contrat_clients_finaux');
        this.editionFormulaireButton = page.locator('#btn_contrat_metadata');
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