const {test, expect} = require('@playwright/test');
class RequetesDossierPage
{
    constructor(page)
    {
        this.page = page;
        
    }

    async verifyDossierPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/search/folder');
    }

    

   
}

module.exports = {RequetesDossierPage}