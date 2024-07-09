const {test, expect} = require('@playwright/test');

class GedFormsPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauFormulaireButton = page.locator('.surveyAdd');
    }

    async verifyGedFormsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/survey');
    }

    async clickOnNouveauFormulaire()
    {
        await this.nouveauFormulaireButton.click();
    }

    async verifyGedNouveauFormulairePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/survey/add');
    }

    
}

module.exports = {GedFormsPage};