const {test, expect} = require('@playwright/test');

class NouveauWorkflowPage
{
    constructor(page)
    {
        this.page = page;
    }


    async verifyNouveauWorkflowPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/workflows/add');
    }

}

module.exports = {NouveauWorkflowPage};