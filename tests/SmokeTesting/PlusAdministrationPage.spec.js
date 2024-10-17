const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, homePage, arboModelePage, autoRemplissageMultiplePage, autoclassPage, automatisationsPage, collaboratifPage, contactsPage, 
gedFormsPage, gestionDesDoublonsPage, gestionDesHistoriquesPage, groupesPage, metaclassPage, modelesDeDecoupeAutomatiquePage, parametresGenerauxPage, 
rapportDeDepotPage, regexPage, tamponPage, utilisateursPage, nouvelUtilisateurPage, nouveauConsultantPage, versioningPage, workflowPage, nouveauWorkflowPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    homePage = poManager.getHomePage();
    arboModelePage = poManager.getArboModelePage();
    autoRemplissageMultiplePage = poManager.getAutoRemplissageMultiplePage();
    autoclassPage = poManager.getAutoclassPage();
    automatisationsPage = poManager.getAutomatisationsPage();
    collaboratifPage = poManager.getCollaboratifPage();
    contactsPage = poManager.getContactsPage();
    gedFormsPage = poManager.getGedFormsPage();
    gestionDesDoublonsPage = poManager.getGestionDesDoublonsPage();
    gestionDesHistoriquesPage = poManager.getGestionDesHistoriquesPage();
    groupesPage = poManager.getGroupesPage();
    metaclassPage = poManager.getMetaclassPage();
    modelesDeDecoupeAutomatiquePage = poManager.getModelesDeDecoupeAutomatiquePage();
    parametresGenerauxPage = poManager.getParametresGenerauxPage();
    rapportDeDepotPage = poManager.getRapportDeDepotPage();
    regexPage = poManager.getRegexPage();
    tamponPage = poManager.getTamponPage();
    utilisateursPage = poManager.getUtilisateursPage();
    nouvelUtilisateurPage = poManager.getNouvelUtilisateurPage();
    nouveauConsultantPage = poManager.getNouveauConsultantPage();
    versioningPage = poManager.getVersioningPage();
    workflowPage = poManager.getWorkflowPage();
    nouveauWorkflowPage = poManager.getNouveauWorkflowPage();
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsxZAQ!2wsx");
});

const administrationNavigation = async () => 
{
    await homePage.clickOnPlus();
    await homePage.clickOnPlusAdministration();
}

test('@Smoke: Verify Arbo Modele Modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnArboModele();
    await arboModelePage.verifyIfArboModeleModalContainsCorrectText();
});

test('@Smoke: Verify Auto Remplissage Multiple Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnRemplissage();
    await autoRemplissageMultiplePage.verifyAutoRemplissageMultiplePageLink();
});

test('@Smoke: Verify Autoclass Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnAutoclassButton();
    await autoclassPage.verifyAutoclassPageLink();
});

test('@Smoke: Verify Nouveau Autoclass Modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnAutoclassButton();
    await autoclassPage.clickOnNouveau();
    await autoclassPage.verifyIfNouveauModalContainsCorrectText();
});

test('@Smoke: Verify Autoclass Historique des filtres modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnAutoclassButton();
    await autoclassPage.clickOnHistoriqueDesFiltres();
    await autoclassPage.verifyHistoriqueModalDisplayed();
    await autoclassPage.verifyConflitsModalNotDisplayed();
});

test('@Smoke: Verify Autoclass Conflits modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnAutoclassButton();
    await autoclassPage.clickOnConflitsAutoclass();
    await autoclassPage.verifyHistoriqueModalNotDisplayed();
    await autoclassPage.verifyConflitsModalDisplayed();
});

test('@Smoke: Verify Automatisations Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnAutomatisations();
    await automatisationsPage.verifyAutomatisationsPageLink();
});

test('@Smoke: Verify Collaboratif Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnCollaboratif();
    await collaboratifPage.verifyCollaboratifPageLink();
});

test('@Smoke: Verify Contacts Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnContacts();
    await contactsPage.verifyContactsPageLink();
});

test('@Smoke: Verify Contacts Clients Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnContacts();
    await contactsPage.clickOnClients();
    await contactsPage.verifyClientsPageLink();
});

test('@Smoke: Verify Ged Forms Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGedForms();
    await gedFormsPage.verifyGedFormsPageLink();
});

test('@Smoke: Verify Ged Nouveau Formulaire Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGedForms();
    await gedFormsPage.clickOnNouveauFormulaire();
    await gedFormsPage.verifyGedNouveauFormulairePageLink();
});

test('@Smoke: Verify Gestion des Doublons Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGestionDesDoublons();
    await gestionDesDoublonsPage.verifyGestionDesDoublonsPageLink();
});

test('@Smoke: Verify Gestion des Doublons Nouvelle Configuration Modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGestionDesDoublons();
    await gestionDesDoublonsPage.clickOnConfigurerLaMetadonnee();
    await gestionDesDoublonsPage.clickOnNouvelleConfiguration();
    await gestionDesDoublonsPage.verifyIfNouvelleConfigurationModalContainsCorrectText();
});

test('@Smoke: Verify Gestion des Historiques Documents Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGestionDesHistoriques();
    await gestionDesHistoriquesPage.verifyGestionDesHistoriquesDocumentsPageLink();
});

test('@Smoke: Verify Gestion des Historiques Dossiers Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGestionDesHistoriques();
    await gestionDesHistoriquesPage.clickOnDossiersButton();
    await gestionDesHistoriquesPage.verifyGestionDesHistoriquesDossiersPageLink();
});

test('@Smoke: Verify Groupes Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGroupes();
    await groupesPage.verifyGroupesPageLink();
});

test('@Smoke: Verify Nouveau Groupe Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnGroupes();
    await groupesPage.clickOnNouveauGroupe();
    await groupesPage.verifyNouveauGroupePageLink();
});

test('@Smoke: Verify Metaclass Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnMetaclass();
    await metaclassPage.verifyMetaclassPageLink();
});

test('@Smoke: Verify Nouveau Metaclass Modal', async({page}) => {
    //some problems here: related sometime to 2 elements with the same xpath
    await administrationNavigation();
    await homePage.clickOnMetaclass();
    await metaclassPage.clickOnCreerUnMetaclass();
    await metaclassPage.verifyIfNouveauMetaclassModalContainsCorrectText();
});

test('@Smoke: Verify Modeles de decoupe automatique Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnModelesDeDecoupeAutomatique();
    await modelesDeDecoupeAutomatiquePage.verifyModelesDeDecoupeAutomatiquePageLink();
});

test('@Smoke: Verify Nouveau Modele Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnModelesDeDecoupeAutomatique();
    await modelesDeDecoupeAutomatiquePage.clickOnNouveauModele();
    await modelesDeDecoupeAutomatiquePage.verifyNouveauModelePageLink();
});

test('@Smoke: Verify Paramètres généraux Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnParametresGeneraux();
    await parametresGenerauxPage.verifyParametresGenerauxPageLink();
});

test('@Smoke: Verify Dossiers temporaires Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnParametresGeneraux();
    await parametresGenerauxPage.clickOnDossiersTemporaire();
    await parametresGenerauxPage.verifyDossiersTemporairePageLink();
});

test('@Smoke: Verify Libérer de lespace Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnParametresGeneraux();
    await parametresGenerauxPage.clickOnLibererDeLespace();
    await parametresGenerauxPage.verifyLibererDeLespacePageLink();
});

test('@Smoke: Verify Politique de mot de passe Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnParametresGeneraux();
    await parametresGenerauxPage.clickOnPolitiqueDeMotDePasse();
    await parametresGenerauxPage.verifyPolitiqueDeMotDePassePageLink();
});

test('@Smoke: Verify Personnalisation du Logo Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnParametresGeneraux();
    await parametresGenerauxPage.clickOnPersonalisationDuLogo();
    await parametresGenerauxPage.verifyPersonalisationDuLogoPageLink();
});

test('@Smoke: Verify Rapport de Depot Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnRapportDeDepot();
    await rapportDeDepotPage.verifyRapportDeDepotPageLink();
});

test('@Smoke: Verify Regex Modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnRegex();
    await regexPage.verifyRegexModalTitle();
});

test('@Smoke: Verify Tampon Modal', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnTampon();
    await tamponPage.verifyTamponPageLink();
});

test('@Smoke: Verify Utilisateurs Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnUtillisateurs();
    await utilisateursPage.verifyUtilisateursPageLink();
});

test('@Smoke1: Verify Nouvel Utilisateur Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnUtillisateurs();
    await utilisateursPage.clickOnNouvelUtilisateur();
    await nouvelUtilisateurPage.verifyNouvelUtilisateurPageLink();
});

test('@Smoke: Verify Nouveau Consultant Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnUtillisateurs();
    await utilisateursPage.clickOnNouveauConsultant();
    await nouveauConsultantPage.verifyNouveauConsultantPageLink();
});

test('@Smoke: Verify Versioning Modal Title', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnVersioning();
    await versioningPage.verifyVersioningModalTitle();
});

test('@Smoke: Verify Workflow Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnWorkflow();
    await workflowPage.verifyWorkflowPageLink();
});

test('@Smoke: Verify Nouveau Workflow Page', async({page}) => {
    await administrationNavigation();
    await homePage.clickOnWorkflow();
    await workflowPage.clickOnNouveauWorkflowButton();
    await nouveauWorkflowPage.verifyNouveauWorkflowPageLink();
});


