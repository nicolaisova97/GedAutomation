const {test, expect} = require('@playwright/test');

class MetaclassPage
{
    constructor(page)
    {
        this.page = page;
        this.creerUnMetaclassButton = page.locator("//span[contains(text(), \"Créer un metaclass\")]"); 
        this.nouveauMetaclassModalTitle = page.locator('.modal-title-main');
    }


    async verifyMetaclassPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('do=metaclass');
    }

    async clickOnCreerUnMetaclass()
    {
        await this.creerUnMetaclassButton.click();
    }

    async verifyIfNouveauMetaclassModalContainsCorrectText()
    {
        await expect(this.nouveauMetaclassModalTitle).toHaveText("Nouveau metaclass");
    }



    
    

    
}

module.exports = {MetaclassPage};