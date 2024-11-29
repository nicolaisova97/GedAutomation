const {test, expect} = require('@playwright/test');
class GedPage
{
    constructor(page)
    {
        this.page = page;
        // this.pageUrl = page.url();
        this.dossiersButton = page.locator("#tab-1024-btnInnerEl");
        this.bannettesButton = page.locator("#tab-1025-btnInnerEl");
        this.workFlowButton = page.locator("#tab-1026-btnInnerEl");
        this.usedMemory = page.locator(".container-storage");
        this.documentRecu = page.locator("#txtBteReception");
    }

    

    async verifyPageLink() 
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('do=ged');
    }

    async verifyDossier() 
    {
        const usedMemoryText = await this.usedMemory.innerText();
        expect(usedMemoryText).toContain('Mo utilisés sur 1 Go');
    }

    async verifyBannettes()
    {
        this.bannettesButton.click();
        const documentRecuText = await this.documentRecu.innerText();
        expect(documentRecuText).toContain('Document reçu');
    }

    async verifyWorkflow()
    {
        await this.workFlowButton.click();
    }
}

module.exports = {GedPage};