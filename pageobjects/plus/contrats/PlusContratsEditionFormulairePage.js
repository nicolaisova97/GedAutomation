const {test, expect} = require('@playwright/test');
class PlusContratsEditionFormulairePage
{
    constructor(page)
    {
        this.page = page;
        
    }

    async verifyEditionFormulairePageTitle()
    {
        const textToVerify = 'Ajout/Modification';
        const locator = this.page.locator(`text=${textToVerify}`);
        await expect(locator).toBeVisible();
    }


}

module.exports = {PlusContratsEditionFormulairePage};