const {test, expect} = require('@playwright/test');

class RegexPage
{
    constructor(page)
    {
        this.page = page;
        this.regexModalTitle = page.locator('.modal-title-main');
        this.nouvelleRegexButton = page.locator("//span[contains(text(), \"Nouvelle regex\")]")
        this.nomInput = page.locator('#module-regexclient-view-edit-123-name');
    }


    async verifyRegexModalTitle()
    {
        await expect(this.regexModalTitle).toHaveText("Gestion des Regex");
    }

    async clickOnNouvelleRegex()
    {
        await this.nouvelleRegexButton.click();
    }
        
}

module.exports = {RegexPage};