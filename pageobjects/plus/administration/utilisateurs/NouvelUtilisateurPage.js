const {test, expect} = require('@playwright/test');

class NouvelUtilisateurPage
{
    constructor(page)
    {
        this.page = page;
    }


    async verifyNouvelUtilisateurPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/new/users');
    }

        
}

module.exports = {NouvelUtilisateurPage};