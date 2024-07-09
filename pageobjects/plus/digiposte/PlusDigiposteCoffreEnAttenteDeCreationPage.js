const {test, expect} = require('@playwright/test');

class PlusDigiposteCoffreEnAttenteDeCreationPage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyPlusDigiposteCoffreEnAttenteDeCreationPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/awaitingConfirmationEmployee');
    }
}

module.exports = {PlusDigiposteCoffreEnAttenteDeCreationPage};