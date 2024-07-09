const {test, expect} = require('@playwright/test');

class HelpPage
{
    constructor(page)
    {
        this.page = page;
        this.helpButton = page.locator("#module-betaui-view-help-9");
        this.manuelDutilisationButton = page.locator('#linkManual');
        this.aideEnLigneButton = page.locator('#linkZendesk');
    }

    async clickOnHelpButton()
    {
        await this.helpButton.click();
    }

    async clickOnManuelDutilisationButton()
    {
        await this.manuelDutilisationButton.click();
    }

    async clickOnAideEnLigneButton()
    {
        await this.aideEnLigneButton.click();
    }
    
}

module.exports = {HelpPage};