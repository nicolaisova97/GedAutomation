const {test, expect} = require('@playwright/test');

class CollaboratifPage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyCollaboratifPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/collaborate');
    }

    
}

module.exports = {CollaboratifPage};