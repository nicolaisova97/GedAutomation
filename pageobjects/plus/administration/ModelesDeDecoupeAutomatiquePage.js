const {test, expect} = require('@playwright/test');

class ModelesDeDecoupeAutomatiquePage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauModeleButton = page.locator("//a[@href='/page/autocut/model/new']");
    }


    async verifyModelesDeDecoupeAutomatiquePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/autocut');
    }

    async clickOnNouveauModele()
    {
        await this.nouveauModeleButton.click();
    }

    async verifyNouveauModelePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/model/new');
    }





   
    

    
}

module.exports = {ModelesDeDecoupeAutomatiquePage};