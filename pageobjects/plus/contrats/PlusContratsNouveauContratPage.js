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
        expect(currentPageUrl).toContain('do=ajout_contrat');
    }
}

module.exports = {PlusContratsNouveauContratPage};