const {test, expect} = require('@playwright/test');

class PlusDigiposteReferentielSalariePage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyPlusDigiposteReferentielSalariePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/employees');
    }
}

module.exports = {PlusDigiposteReferentielSalariePage};