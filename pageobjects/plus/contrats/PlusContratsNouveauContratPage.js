const {test, expect} = require('@playwright/test');
class PlusContratsNouveauContratPage
{
    constructor(page)
    {
        this.page = page;
        
    }

    async verifyPlusContratsNouveauContratPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('contracts/add');
    }
}

module.exports = {PlusContratsNouveauContratPage};