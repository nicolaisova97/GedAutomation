const {test, expect} = require('@playwright/test');

class AutomatisationsPage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyAutomatisationsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/automations');
    }

    
}

module.exports = {AutomatisationsPage};