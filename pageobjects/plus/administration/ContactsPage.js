const {test, expect} = require('@playwright/test');

class ContactsPage
{
    constructor(page)
    {
        this.page = page;
        this.clientsButton = page.locator('.css-1y0w59i');
    }

    async verifyContactsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/partners');
    }



    async clickOnClients()
    {
        await this.clientsButton.click();
    }



    

    async verifyClientsPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/clients');
    }

    
}

module.exports = {ContactsPage};