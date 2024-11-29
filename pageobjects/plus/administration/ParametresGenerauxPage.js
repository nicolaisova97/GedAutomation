const {test, expect} = require('@playwright/test');

class ParametresGenerauxPage
{
    constructor(page)
    {
        this.page = page;
        this.dossiersTemporaireButton = page.locator("//a[@href='/page/administration/purgeFolderPolicy']");
        this.libererDeLespaceButton = page.locator("//a[@href='/page/administration/purgeBinPolicy']");
        this.politiqueDeMotDePasseButton = page.locator("//a[@href='/page/administration/passwordPolicy']");
        this.personalisationDuLogoButton = page.locator("//a[@href='/page/administration/logo']");
    }

    async verifyParametresGenerauxPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/index');
    }

    async clickOnDossiersTemporaire()
    {
        await this.dossiersTemporaireButton.click();
    }

    async clickOnLibererDeLespace()
    {
        await this.libererDeLespaceButton.click();
    }

    async clickOnPolitiqueDeMotDePasse()
    {
        await this.politiqueDeMotDePasseButton.click();
    }

    async clickOnPersonalisationDuLogo()
    {
        await this.personalisationDuLogoButton.click();
    }

    async verifyDossiersTemporairePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/purgeFolderPolicy');
    }

    async verifyLibererDeLespacePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/purgeBinPolicy');
    }

    async verifyPolitiqueDeMotDePassePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/passwordPolicy');
    }

    async verifyPersonalisationDuLogoPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/logo');
    }



}

   
    

    


module.exports = {ParametresGenerauxPage};