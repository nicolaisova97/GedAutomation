const {test, expect} = require('@playwright/test');
class StationDindexationPage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('do=indexation');
    }
}

module.exports = {StationDindexationPage}