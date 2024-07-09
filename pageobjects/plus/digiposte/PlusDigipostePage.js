const {test, expect} = require('@playwright/test');

class PlusDigipostePage
{
    constructor(page)
    {
        this.page = page;
        this.boiteDenvoiButton = page.locator("//a[@href='/page/digiposte/sendingBox']");
        this.referentielSalarieButton = page.locator("//a[@href='/page/digiposte/employees']");
        this.configurationDuReferentielSalarieButton = page.locator("//a[@href='/page/digiposte/config']");
        this.coffreEnAttenteDeCreationButton = page.locator("//a[@href='/page/digiposte/awaitingConfirmationEmployee']");
        this.listeDesDocumentsButton = page.locator("//a[@href='/page/digiposte/employeeDocumentList']");
    }

    async verifyPlusDigipostePageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/digiposte');
    }

    async clickOnBoiteDenvoiButton()
    {
        this.boiteDenvoiButton.click();
    }

    async clickOnReferentielSalarie()
    {
        this.referentielSalarieButton.click();
    }

    async clickOnConfigurationDuReferentielSalarie()
    {
        this.configurationDuReferentielSalarieButton.click();
    }

    async clickOnCoffreEnAttenteDeCreation(){
        this.coffreEnAttenteDeCreationButton.click();
    }

    async clickOnListeDesDocument()
    {
        this.listeDesDocumentsButton.click();
    }



    
}

module.exports = {PlusDigipostePage};