const {test, expect} = require('@playwright/test');

class PlusDigiposteListeDesDocumentsPage
{
    constructor(page)
    {
        this.page = page;
    }

    async verifyPlusDigiposteListeDesDocumentsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/employeeDocumentList');
    }
}

module.exports = {PlusDigiposteListeDesDocumentsPage};