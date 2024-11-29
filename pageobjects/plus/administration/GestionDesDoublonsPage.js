const {test, expect} = require('@playwright/test');

class GestionDesDoublonsPage
{
    constructor(page)
    {
        this.page = page;
        this.configurerLaMetadonneeButton = page.locator('//button[text()=\'Configurer la métadonnée\']');
        this.nouvelleConfigurationButton = page.locator('//button[text()=\'Nouvelle configuration\']');
        this.nouvelleFormulaireModalTitle = page.locator('//h2[text()=\'Nouvelle configuration\']');
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