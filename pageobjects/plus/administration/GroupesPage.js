const {test, expect} = require('@playwright/test');

class GroupesPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauGroupeButton = page.locator('#btn_');
    }


    async verifyGroupesPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('do=liste_services');
    }

    async clickOnNouveauGroupe()
    {
        await this.nouveauGroupeButton.click();
    }

    async verifyNouveauGroupePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('do=ajout_service');
    }
    

    
}

module.exports = {GroupesPage};