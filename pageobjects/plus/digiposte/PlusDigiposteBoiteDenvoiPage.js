const {test, expect} = require('@playwright/test');

class PlusDigiposteBoiteDenvoiPage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyPlusDigiposteBoiteDenvoiPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/sendingBox');
    }
}

module.exports = {PlusDigiposteBoiteDenvoiPage};