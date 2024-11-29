const {test, expect} = require('@playwright/test');
class PlusContratsEditionFormulairePage
{
    constructor(page)
    {
        this.page = page;
        
    }

    async verifyEditionFormulairePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('contract/administration');
    }


}

module.exports = {PlusContratsEditionFormulairePage};