const { test, expect } = require("@playwright/test");
const { POManager } = require("../../pageobjects/POManager");

let poManager, loginPage, homePage, gedPage, searchPage;

test.beforeEach(async ({ page }) => {
  poManager = new POManager(page);
  loginPage = poManager.getLoginPage();
  homePage = poManager.getHomePage();
  gedPage = poManager.getGedPage();
  searchPage = poManager.getSearchPage();
});

async function login() {
  await loginPage.goTo();
  await loginPage.validLogIn("test.md", "test.QA2025");
}

async function loginAndNavigateToGed() {
  await login();
  await homePage.clickOnGed();
}

test("@Smoke: Open Ged page", async ({ page }) => {
  await loginAndNavigateToGed();
  await gedPage.verifyPageLink();
});

test("@Smoke: Verify Dossiers", async ({ page }) => {
  await loginAndNavigateToGed();
  await page.waitForLoadState("networkidle");
  await gedPage.verifyDossier();
});

test("@Smoke: Verify Bannettes", async ({ page }) => {
  await loginAndNavigateToGed();
  await gedPage.verifyBannettes();
});

test("@Smoke: Verify WorkFlow", async ({ page }) => {
  await loginAndNavigateToGed();
  await gedPage.verifyWorkflow();
});

test("@Demo: Manual Single Document Upload via 'Dépôt de fichier' Button to 'Documents a classer'", async ({
  page,
}) => {
  await loginAndNavigateToGed();
  const fileName = "automation-example.pdf"; // Single file
  await gedPage.uploadFiles(fileName); // Upload single file
  await gedPage.verifyFileLinksInList(fileName);
});

test("@Demo: Manual Multiple Documents Upload via 'Dépôt de fichier' Button to 'Documents a classer'", async ({
  page,
}) => {
  await loginAndNavigateToGed();
  const fileNames = [
    "automation-example1.pdf",
    "automation-example2.pdf",
    "automation-example3.pdf",
  ]; // Multiple files
  await gedPage.uploadFiles(fileNames); // Upload multiple files
  await gedPage.verifyFileLinksInList(fileNames); // Verify multiple files in list
});

test("@Demo: Drag and Drop a file", async ({ page }) => {
  await loginAndNavigateToGed();
  const dropZone = page.locator("#treeview-1017-record-3482"); // Adjust selector as needed
  const filePath = "path/to/file.png";

  // Read the file as a data transfer item
  const fileBuffer = fs.readFileSync(filePath);
  const dataTransfer = await page.evaluateHandle(
    (fileName, fileType, fileData) => {
      const dataTransfer = new DataTransfer();
      const file = new File([fileData], fileName, { type: fileType });
      dataTransfer.items.add(file);
      return dataTransfer;
    },
    "file.png",
    "image/png",
    fileBuffer
  );

  // Dispatch dragenter, dragover, and drop events
  await dropZone.dispatchEvent("dragenter", { dataTransfer });
  await dropZone.dispatchEvent("dragover", { dataTransfer });
  await dropZone.dispatchEvent("drop", { dataTransfer });

  // Verify file upload (adjust based on your implementation)
  await expect(page.locator("#upload-success")).toBeVisible();
});
