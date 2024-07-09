const {test, expect} = require('@playwright/test');

class AutoclassPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauButton = page.locator('#btn_autoclass_new');
        this.nouveauModalTitle = page.locator('.modal-title-main');
        this.historiqueDesFiltresButton = page.locator('#btn_autoclass_historique');
        this.conflitsAutoclassButton = page.locator('#btn_autoclass_conflit');
        this.historiqueModal = page.locator('#documentsFiltre');
        this.conflitsModal = page.locator('#documentsConflit');
    }

    async verifyAutoclassPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('do=autoclass');
    }

    async clickOnNouveau()
    {
        this.nouveauButton.click();
    }

    async verifyIfNouveauModalContainsCorrectText()
    {
        await expect(this.nouveauModalTitle).toHaveText("Nouveau");
    }

    async clickOnHistoriqueDesFiltres()
    {
        await this.historiqueDesFiltresButton.click();
    }



    async clickOnConflitsAutoclass()
    {
        await this.conflitsAutoclassButton.click();
    }

    async verifyHistoriqueModalDisplayed() {
        const displayValue = await this.page.evaluate(() => {
            const element = document.querySelector('#documentsFiltre');
            return window.getComputedStyle(element).display;
        });
        expect(displayValue).toBe('block');
    }

    async verifyHistoriqueModalNotDisplayed() {
        const displayValue = await this.page.evaluate(() => {
            const element = document.querySelector('#documentsFiltre');
            return window.getComputedStyle(element).display;
        });
        expect(displayValue).toBe('none');
    }

    async verifyConflitsModalDisplayed() {
        const displayValue = await this.page.evaluate(() => {
            const element = document.querySelector('#documentsConflit');
            return window.getComputedStyle(element).display;
        });
        expect(displayValue).toBe('block');
    }

    async verifyConflitsModalNotDisplayed() {
        const displayValue = await this.page.evaluate(() => {
            const element = document.querySelector('#documentsConflit');
            return window.getComputedStyle(element).display;
        });
        expect(displayValue).toBe('none');
    }



    
}

module.exports = {AutoclassPage};