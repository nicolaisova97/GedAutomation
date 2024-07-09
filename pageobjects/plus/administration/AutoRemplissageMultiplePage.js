const {test, expect} = require('@playwright/test');

class AutoRemplissageMultiplePage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyAutoRemplissageMultiplePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/fieldMultiComplete');
    }

    
}

module.exports = {AutoRemplissageMultiplePage};