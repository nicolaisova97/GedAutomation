const {test, expect} = require('@playwright/test');

class PlusDigiposteConfigurationDuReferentielSalariePage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyPlusDigiposteConfigurationDuReferentielSalariePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/config');
    }
}

module.exports = {PlusDigiposteConfigurationDuReferentielSalariePage};