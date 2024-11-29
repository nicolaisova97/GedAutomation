const {test, expect} = require('@playwright/test');
class RequetesDocumentPage
{
    constructor(page)
    {
        this.page = page;
        
    }

    async verifyDocumentPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/search/document');
    }

    
}

module.exports = {RequetesDocumentPage}