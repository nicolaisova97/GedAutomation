const {test, expect} = require('@playwright/test');
class RequetesContratPage
{
    constructor(page)
    {
        this.page = page;
        
    }

    async verifyContratPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/search/contract');
    }
}

module.exports = {RequetesContratPage}