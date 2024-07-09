const {test, expect} = require('@playwright/test');
class PlusContratsClientsPage
{
    constructor(page)
    {
        this.page = page;
    }
    
    async verifyPlusContratsClientsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/clients');
    }
}

module.exports = {PlusContratsClientsPage};