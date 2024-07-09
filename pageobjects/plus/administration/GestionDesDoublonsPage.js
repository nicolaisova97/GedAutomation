const {test, expect} = require('@playwright/test');

class GestionDesDoublonsPage
{
    constructor(page)
    {
        this.page = page;
        this.configurerLaMetadonneeButton = page.locator('.css-11tj6l0');
        this.nouvelleConfigurationButton = page.locator('.css-3wbmhd');
        this.nouvelleFormulaireModalTitle = page.locator('.css-1h9w4dx');
    }

    async verifyGestionDesDoublonsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/duplicate');
    }

    async clickOnConfigurerLaMetadonnee()
    {
        await this.configurerLaMetadonneeButton.click();
    }

    async clickOnNouvelleConfiguration()
    {
        await this.nouvelleConfigurationButton.click();
    }

    async verifyIfNouvelleConfigurationModalContainsCorrectText()
    {
        await expect(this.nouvelleFormulaireModalTitle).toHaveText("Nouvelle configuration");
    }

    
}

module.exports = {GestionDesDoublonsPage};