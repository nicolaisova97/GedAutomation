const {test, expect} = require('@playwright/test');

class ArboModelePage
{
    constructor(page)
    {
        this.page = page;
        this.modalTitle = page.locator('.modal-title-main');
    }

    async verifyIfArboModeleModalContainsCorrectText()
    {
        await expect(this.modalTitle).toHaveText("Gestion des Modèles d'arborescence");
    }

    
}

module.exports = {ArboModelePage};