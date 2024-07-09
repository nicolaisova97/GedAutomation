const {test, expect} = require('@playwright/test');

class TamponPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauTamponButton = page.locator("//span[contains(text(), \"Nouveau tampon\")]")
    }


    async verifyTamponPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/stamp/administration');
    }

    async clickOnNouveauTampon()
    {
        await this.nouveauTamponButton.click();
    }
        
}

module.exports = {TamponPage};