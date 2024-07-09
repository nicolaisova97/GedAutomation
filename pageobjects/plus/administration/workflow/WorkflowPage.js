const {test, expect} = require('@playwright/test');

class WorkflowPage
{
    constructor(page)
    {
        this.page = page;
        this.nouveauWorkflowButton = page.locator("//a[@href='/page/workflows/add']");
    }


    async verifyWorkflowPageLink()
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain('/workflows');
    }

    async clickOnNouveauWorkflowButton()
    {
        await this.nouveauWorkflowButton.click();
    }

}

module.exports = {WorkflowPage};