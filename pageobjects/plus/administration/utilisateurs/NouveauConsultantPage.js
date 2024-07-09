const {test, expect} = require('@playwright/test');

class NouveauConsultantPage
{
    constructor(page)
    {
        this.page = page;
    }


    async verifyNouveauConsultantPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/new/viewers');
    }

}

module.exports = {NouveauConsultantPage};