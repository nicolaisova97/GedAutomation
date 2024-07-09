const {test, expect} = require('@playwright/test');
class PlusContratsFournisseursPage
{
    constructor(page)
    {
        this.page = page;
    }
    async verifyPlusContratsFournisseursPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/suppliers');
    }
}

module.exports = {PlusContratsFournisseursPage};