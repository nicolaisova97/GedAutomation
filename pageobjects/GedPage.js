const { test, expect } = require("@playwright/test");
class GedPage {
  constructor(page) {
    this.page = page;
    // this.pageUrl = page.url();
    this.dossiersButton = page.locator("#tab-1024-btnInnerEl");
    this.bannettesButton = page.locator("#tab-1025-btnInnerEl");
    this.workFlowButton = page.locator("#tab-1026-btnInnerEl");
    this.usedMemory = page.locator(".container-storage");
    this.documentRecu = page.locator("#txtBteReception");
    this.depotDesFichiersButton = page.locator("#btn_upload");
  }

  async verifyPageLink() {
    const currentPageUrl = await this.page.url();
    expect(currentPageUrl).toContain("do=ged");
  }

  async verifyDossier() {
    const usedMemoryText = await this.usedMemory.innerText();
    expect(usedMemoryText).toContain("Mo utilisés sur 1 Go");
  }

  async verifyBannettes() {
    this.bannettesButton.click();
    const documentRecuText = await this.documentRecu.innerText();
    expect(documentRecuText).toContain("Document reçu");
  }

  async verifyWorkflow() {
    await this.workFlowButton.click();
  }

  async uploadFileWithoutClickingButton() {
    await this.page.setInputFiles(
      'input[type="file"]',
      "C:/Users/Nick/Downloads/automation-example.pdf"
    );
  }

  // Upload file(s) using file chooser (handles single or multiple files)
  async uploadFilesUsingFileChooser(filePaths) {
    // If a single file is passed, wrap it in an array for consistency
    if (!Array.isArray(filePaths)) {
      filePaths = [filePaths];
    }

    for (const filePath of filePaths) {
      const [fileChooser] = await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.depotDesFichiersButton.click(),
      ]);

      await fileChooser.setFiles(filePath);
    }
  }

  // Helper function to generate file paths and upload file(s)
  async uploadFiles(fileNames) {
    // If a single file is passed, wrap it in an array for consistency
    if (!Array.isArray(fileNames)) {
      fileNames = [fileNames];
    }

    const filePaths = fileNames.map(
      (fileName) => `C:/Users/Nick/Downloads/${fileName}`
    );
    await this.uploadFilesUsingFileChooser(filePaths);
  }

  // Verify if <a> tag with the file name is present in the file list (handles single or multiple files)
  async verifyFileLinksInList(fileNames) {
    // If a single file is passed, wrap it in an array for consistency
    if (!Array.isArray(fileNames)) {
      fileNames = [fileNames];
    }

    for (const fileName of fileNames) {
      const fileLink = this.page.locator(`a:has-text("${fileName}")`);
      await expect(fileLink).toBeVisible({ timeout: 10000 }); // need to find another more correctly way to wait for element uploading
    }
  }
}

module.exports = { GedPage };
