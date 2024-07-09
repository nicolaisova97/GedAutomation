const {test, expect} = require('@playwright/test');
class TableauDeBordPage
{


    constructor(page)
    {
        this.page = page;
        this.pageTitle = page.locator('.css-ts86fj');

    }

    async verifyPageTitle()
    {
        await this.page.waitForLoadState('networkidle');
        await expect(this.pageTitle).toHaveText('Tableau de bord', { timeout: 10000 });
    }

}

module.exports = {TableauDeBordPage};