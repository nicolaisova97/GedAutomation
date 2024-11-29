const {test, expect} = require('@playwright/test');

class UtilisateursPage
{
    constructor(page)
    {
        this.page = page;
        this.nouvelUtilisateurButton = page.locator('#addUserBtn');
        this.nouveauConsultantButton = page.locator('#addViewerBtn');
    }


    async verifyUtilisateursPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/admin/users');
    }

    async clickOnNouvelUtilisateur()
    {
        await this.nouvelUtilisateurButton.click();
    }

    async clickOnNouveauConsultant()
    {
        await this.nouveauConsultantButton.click();
    }
        
}

module.exports = {UtilisateursPage};