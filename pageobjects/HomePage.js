const {test, expect} = require('@playwright/test');
class HomePage
{
    constructor(page)
    {
        this.page = page;
        this.pageTitle = page.locator('.MuiTypography-h1');
        this.gedButton = page.locator('.fa-window-maximize');
        this.indexationButton = page.locator("//span[contains(text(), \"Indexation\")]");
        this.stationDindexationButton = page.locator("//span[contains(text(), \"Station\")]");
        this.planDindexationDocumentButton = page.locator("//span[contains(text(), \"indexation document\")]");
        this.planDindexationDossierButton = page.locator("//span[contains(text(), \"d'indexation dossier\")]");
        this.requetesButton = page.locator("//span[contains(text(), \"REQUETES\")]");
        this.reqDossierButton = page.locator("//span[@data-i18n=\"Module/BetaUI/View/Nav:dossier\"]");
        this.reqDocumentButton = page.locator("//span[@data-i18n=\"Module/BetaUI/View/Nav:document\"]");
        this.reqContratButton = page.locator("//span[@data-i18n=\"Module/BetaUI/View/Nav:contrat\"]");

        this.plusButton = page.locator('#moreBtn');
        this.plusContratsButton = page.locator('#liste_contratsBtn');
        this.plusDigiposteButton = page.locator("//a[@href='/page/digiposte/']");
        this.plusAdministrationButton = page.locator("//span[contains(text(), \"Administration\")]");
        this.retourButton = page.locator("//span[contains(text(), \"Retour\")]");
        this.arboModeleButton = page.locator("//span[contains(text(), \"Arbo. modèle\")]");
        this.autoRemplissageButton = page.locator("//span[contains(text(), \"Auto-remplissage multiple\")]");
        this.autoclassButton = page.locator("//span[contains(text(), \"AutoClass\")]");
        this.automatisationsButton = page.locator("//span[contains(text(), \"Automatisations\")]");
        this.collaboratifButton = page.locator("//span[contains(text(), \"Collaboratif\")]");
        this.contactsButton = page.locator("//span[contains(text(), \"Contacts\")]");
        this.gedFormsButton = page.locator("//span[contains(text(), \"GED Forms\")]");
        this.gestionDesDoublonsButton = page.locator("//span[contains(text(), \"Gestion des doublons\")]");
        this.gestionDesHistoriquesButton = page.locator("//span[contains(text(), \"Gestion des historiques\")]");
        this.groupesButton = page.locator("//span[contains(text(), \"Groupes\")]");
        this.metaclassButton = page.locator("//span[contains(text(), \"Metaclass\")]");
        this.modelesDeDecoupeAutomatiqueButton = page.locator("//span[contains(text(), \"Modèle de découpe\")]");

        this.parametresGenerauxButton = page.locator("//span[contains(text(), \"Paramètres généraux\")]");
        this.rapportDeDepotButton = page.locator("//span[contains(text(), \"Rapport de dépôt\")]");
        this.regexButton = page.locator("//span[contains(text(), \"Regex\")]");

        this.tamponButton = page.locator("//span[contains(text(), \"Tampon\")]");
        this.utillisateursButton = page.locator("//span[contains(text(), \"utilisateurs\")]");
        this.versioningButton = page.locator("//span[contains(text(), \"Versioning\")]");
        this.workflowButton = page.locator("//span[contains(text(), \"workflow\")]");
        
        
    }

    async verifyPageTitle()
    {
        await this.page.waitForLoadState('networkidle');
        await expect(this.pageTitle).toHaveText('Tableau de bord', { timeout: 10000 });
    }

    async clickOnGed()
    {
        await this.gedButton.click();
    }

    async clickOnIndexation()
    {
        await this.indexationButton.click();
    }

    async clickOnStationDindexation()
    {
        await this.stationDindexationButton.click();
    }

    async clickOnPlanDindexationDocument()
    {
        await this.planDindexationDocumentButton.click();
    }

    async clickOnPlanDindexationDossier()
    {
        await this.planDindexationDossierButton.click();
    }

    async clickOnRequetes()
    {
        await this.requetesButton.click();
    }

    async clickOnRequetesDossier()
    {
        await this.reqDossierButton.click();
    }

    async clickOnRequetesDocument()
    {
        await this.reqDocumentButton.click();
    }

    async clickOnRequetesContrat()
    {
        await this.reqContratButton.click();
    }

    async clickOnPlus()
    {
        await this.plusButton.click();
    }

    async clickOnPlusContratsButton()
    {
        await this.plusContratsButton.click();
    }

    async clickOnPlusDigiposte()
    {
        await this.plusDigiposteButton.click();
    }

    async clickOnPlusAdministration()
    {
        await this.plusAdministrationButton.click();
    }

    async clickOnRetour()
    {
        await this.retourButton.click();
    }

    async clickOnArboModele()
    {
        await this.arboModeleButton.click();
    }

    async clickOnRemplissage()
    {
        await this.autoRemplissageButton.click();
    }

    async clickOnAutoclassButton()
    {
        await this.autoclassButton.click();
    }

    async clickOnAutomatisations()
    {
        await this.automatisationsButton.click();
    }

    async clickOnCollaboratif()
    {
        await this.collaboratifButton.click();
    }

    async clickOnContacts()
    {
        await this.contactsButton.click();
    }

    async clickOnGedForms()
    {
        await this.gedFormsButton.click();
    }

    async clickOnGestionDesDoublons()
    {
        await this.gestionDesDoublonsButton.click();
    }

    async clickOnGestionDesHistoriques()
    {
        await this.gestionDesHistoriquesButton.click();
    }

    async clickOnGroupes()
    {
        await this.groupesButton.click();
    }

    async clickOnMetaclass()
    {
        await this.metaclassButton.click();
    }

    async clickOnModelesDeDecoupeAutomatique()
    {
        await this.modelesDeDecoupeAutomatiqueButton.click();
    }

    async clickOnParametresGeneraux()
    {
        await this.parametresGenerauxButton.click();
    }

    async clickOnRapportDeDepot()
    {
        await this.rapportDeDepotButton.click();
    }

    async clickOnRegex()
    {
        await this.regexButton.click();
    }

    async clickOnTampon()
    {
        await this.tamponButton.click();
    }

    async clickOnUtillisateurs()
    {
        await this.utillisateursButton.click();
    }

    async clickOnVersioning()
    {
        await this.versioningButton.click();
    }

    async clickOnWorkflow()
    {
        await this.workflowButton.click();
    }


}

module.exports = {HomePage};