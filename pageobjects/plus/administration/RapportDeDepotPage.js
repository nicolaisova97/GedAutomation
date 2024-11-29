const {test, expect} = require('@playwright/test');

class RapportDeDepotPage
{
    constructor(page)
    {
        this.page = page;
    }


    async verifyRapportDeDepotPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('documentDeposit');
    }
    

    
}

module.exports = {RapportDeDepotPage};