const {test, expect} = require('@playwright/test');
class PlanDindexationDossierPage
{
    constructor(page)
    {
        this.page = page;
        this.completudeDeDossierButton = page.locator("//a[@href='/page/metadata/folder/administration/folderCompleteness']");
    }

    async verifyPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/folder/administration');
    }

    async clickOnCompletudeDeDossier()
    {
        this.completudeDeDossierButton.click();
    }

    async verifyCompletudeDeDossierPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/folder/administration/folderCompleteness');
    }
}

module.exports = {PlanDindexationDossierPage}