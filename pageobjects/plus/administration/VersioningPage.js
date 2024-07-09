const {test, expect} = require('@playwright/test');

class VersioningPage
{
    constructor(page)
    {
        this.page = page;
        this.versioningModalTitle = page.locator('.modal-title-main');
    }


    async verifyVersioningModalTitle()
    {
        await expect(this.versioningModalTitle).toHaveText("Configuration du versioning");
    }

}

module.exports = {VersioningPage};