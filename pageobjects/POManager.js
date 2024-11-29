const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
const {TableauDeBordPage} = require('./TableauDeBordPage');
const {GedPage} = require('./GedPage');
const {StationDindexationPage} = require('./StationDindexationPage');
const {PlanDindexationDocumentPage} = require('./planDindexation/PlanDindexationDocumentPage');
const {PlanDindexationDossierPage} = require('./planDindexation/PlanDindexationDossierPage');
const {RequetesDossierPage} = require('./requetes/RequetesDossierPage');
const {RequetesDocumentPage} = require('./requetes/RequetesDocumentPage');
const {RequetesContratPage} = require('./requetes/RequetesContratPage');
const {PlusContratsPage} = require('./plus/contrats/PlusContratsPage');
const {PlusContratsNouveauContratPage} = require('./plus/contrats/PlusContratsNouveauContratPage');
const {PlusContratsFournisseursPage} = require('./plus/contrats/PlusContratsFournisseursPage');
const {PlusContratsClientsPage} = require('./plus/contrats/PlusContratsClientsPage');
const {PlusContratsEditionFormulairePage} = require('./plus/contrats/PlusContratsEditionFormulairePage');
const {PlusDigipostePage} = require('./plus/digiposte/PlusDigipostePage');

const {PlusDigiposteBoiteDenvoiPage} = require('./plus/digiposte/PlusDigiposteBoiteDenvoiPage');
const {PlusDigiposteReferentielSalariePage} = require('./plus/digiposte/PlusDigiposteReferentielSalariePage');
const {PlusDigiposteConfigurationDuReferentielSalariePage} = require('./plus/digiposte/PlusDigiposteConfigurationDuReferentielSalariePage');
const {PlusDigiposteCoffreEnAttenteDeCreationPage} = require('./plus/digiposte/PlusDigiposteCoffreEnAttenteDeCreationPage');
const {PlusDigiposteListeDesDocumentsPage} = require('./plus/digiposte/PlusDigiposteListeDesDocumentsPage');
const {ArboModelePage} = require('./plus/administration/ArboModelePage');
const {AutoRemplissageMultiplePage} = require('./plus/administration/AutoRemplissageMultiplePage');
const {AutoclassPage} = require('./plus/administration/AutoclassPage');
const {AutomatisationsPage} = require('./plus/administration/AutomatisationsPage');
const {CollaboratifPage} = require('./plus/administration/CollaboratifPage');
const {ContactsPage} = require('./plus/administration/ContactsPage');
const {GedFormsPage} = require('./plus/administration/GedFormsPage');
const {GestionDesDoublonsPage} = require('./plus/administration/GestionDesDoublonsPage');
const {GestionDesHistoriquesPage} = require('./plus/administration/GestionDesHistoriquesPage');
const {GroupesPage} = require('./plus/administration/GroupesPage');
const {MetaclassPage} = require('./plus/administration/MetaclassPage');
const {ModelesDeDecoupeAutomatiquePage} = require('./plus/administration/ModelesDeDecoupeAutomatiquePage');
const {ParametresGenerauxPage} = require('./plus/administration/ParametresGenerauxPage');
const {RapportDeDepotPage} = require('./plus/administration/RapportDeDepotPage');
const {RegexPage} = require('./plus/administration/RegexPage');
const {TamponPage} = require('./plus/administration/TamponPage');
const {UtilisateursPage} = require('./plus/administration/utilisateurs/UtilisateursPage');
const {NouvelUtilisateurPage} = require('./plus/administration/utilisateurs/NouvelUtilisateurPage');
const {NouveauConsultantPage} = require('./plus/administration/utilisateurs/NouveauConsultantPage');
const {VersioningPage} = require('./plus/administration/VersioningPage');
const {WorkflowPage} = require('./plus/administration/workflow/WorkflowPage');
const {NouveauWorkflowPage} = require('./plus/administration/workflow/NouveauWorkflowPage');
const {SearchPage} = require('./SearchPage');
const {HelpPage} = require('./HelpPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.tableauDeBordPage = new TableauDeBordPage(this.page);
        this.gedPage = new GedPage(this.page);
        this.stationDindexationPage = new StationDindexationPage(this.page);
        this.planDindexationDocumentPage = new PlanDindexationDocumentPage(this.page);
        this.planDindexationDossierPage = new PlanDindexationDossierPage(this.page);
        this.requetesDossierPage = new RequetesDossierPage(this.page);
        this.requetesDocumentPage = new RequetesDocumentPage(this.page);
        this.requetesContratPage = new RequetesContratPage(this.page);
        this.plusContratsPage = new PlusContratsPage(this.page);
        this.plusContratsNouveauContratPage = new PlusContratsNouveauContratPage(this.page);
        this.plusContratsFournisseursPage = new PlusContratsFournisseursPage(this.page); 
        this.plusContratsClientsPge = new PlusContratsClientsPage(this.page);
        this.plusContratsEditionFormulairePage = new PlusContratsEditionFormulairePage(this.page);
        this.plusDigipostePage = new PlusDigipostePage(this.page);

        this.plusDigiposteBoiteDenvoiPage = new PlusDigiposteBoiteDenvoiPage(this.page);
        this.plusDigiposteReferentielSalariePage = new PlusDigiposteReferentielSalariePage(this.page);
        this.plusDigiposteConfigurationDuReferentielSalariePage = new PlusDigiposteConfigurationDuReferentielSalariePage(this.page);
        this.plusDigiposteCoffreEnAttenteDeCreationPage = new PlusDigiposteCoffreEnAttenteDeCreationPage(this.page);
        this.plusDigiposteListeDesDocumentsPage = new PlusDigiposteListeDesDocumentsPage(this.page);

        this.arboModelePage = new ArboModelePage(this.page);
        this.autoRemplissageMultiplePage = new AutoRemplissageMultiplePage(this.page);
        this.autoClassPage = new AutoclassPage(this.page);
        this.automatisationsPage = new AutomatisationsPage(this.page);
        this.collaboratifPage = new CollaboratifPage(this.page);
        this.contactsPage = new ContactsPage(this.page);
        this.gedFormsPage = new GedFormsPage(this.page);
        this.gestionDesDoublonsPage = new GestionDesDoublonsPage(this.page);
        this.gestionDesHistoriquesPage = new GestionDesHistoriquesPage(this.page);
        this.groupesPage = new GroupesPage(this.page);
        this.metaclassPage = new MetaclassPage(this.page);
        this.modelesDeDecoupeAutomatiquePage = new ModelesDeDecoupeAutomatiquePage(this.page);
        this.parametresGenerauxPage = new ParametresGenerauxPage(this.page);
        this.rapportDeDepotPage = new RapportDeDepotPage(this.page);
        this.regexPage = new RegexPage(this.page);
        this.tamponPage = new TamponPage(this.page);
        this.utilisateursPage = new UtilisateursPage(this.page);
        this.nouvelUtilisateurPage = new NouvelUtilisateurPage(this.page);
        this.nouveauConsultantPage = new NouveauConsultantPage(this.page);
        this.versioningPage = new VersioningPage(this.page);
        this.workflowPage = new WorkflowPage(this.page);
        this.nouveauWorkflowPage = new NouveauWorkflowPage(this.page);
        this.searchPage = new SearchPage(this.page);
        this.helpPage = new HelpPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getHomePage()
    {
        return this.homePage;
    }

    getTableauDeBordPage()
    {
        return this.tableauDeBordPage;
    }

    getGedPage()
    {
        return this.gedPage;
    }

    getStationDindexationPage()
    {
        return this.stationDindexationPage;
    }

    getPlanDindexationDocumentPage()
    {
        return this.planDindexationDocumentPage;
    }

    getPlanDindexationDossierPage()
    {
        return this.planDindexationDossierPage;
    }

    getRequetesDossierPage()
    {
        return this.requetesDossierPage;
    }

    getRequetesDocumentPage()
    {
        return this.requetesDocumentPage;
    }

    getRequetesContratPage()
    {
        return this.requetesContratPage;
    }

    getPlusContratsPage()
    {
        return this.plusContratsPage;
    }

    getPlusContratsNouveauContratPage()
    {
        return this.plusContratsNouveauContratPage;
    }

    getPlusContratsFournisseursPage()
    {
        return this.plusContratsFournisseursPage;
    }

    getPlusContratsClientsPage()
    {
        return this.plusContratsClientsPge;
    }

    getPlusContratsEditionFormulairePage()
    {
        return this.plusContratsEditionFormulairePage;
    }

    getPlusDigipostePage()
    {
        return this.plusDigipostePage;
    }

    getDigiposteBoiteDenvoiPage()
    {
        return this.plusDigiposteBoiteDenvoiPage;
    }

    getDigiposteReferentielSalariePage()
    {
        return this.plusDigiposteReferentielSalariePage;
    }

    getDigiposteConfigurationDuReferentielSalarieButton()
    {
        return this.plusDigiposteConfigurationDuReferentielSalariePage;
    }

    getDigiposteCoffreEnAttenteDeCreationPage()
    {
        return this.plusDigiposteCoffreEnAttenteDeCreationPage;
    }

    getDigiposteListeDesDocumentsPage()
    {
        return this.plusDigiposteListeDesDocumentsPage;
    }

    getArboModelePage()
    {
        return this.arboModelePage;
    }

    getAutoRemplissageMultiplePage()
    {
        return this.autoRemplissageMultiplePage;
    }

    getAutoclassPage()
    {
        return this.autoClassPage;
    }

    getAutomatisationsPage()
    {
        return this.automatisationsPage;
    }

    getCollaboratifPage()
    {
        return this.collaboratifPage;
    }
    
    getContactsPage()
    {
        return this.contactsPage;
    }

    getGedFormsPage()
    {
        return this.gedFormsPage;
    }

    getGestionDesDoublonsPage()
    {
        return this.gestionDesDoublonsPage;
    }

    getGestionDesHistoriquesPage()
    {
        return this.gestionDesHistoriquesPage;
    }

    getGroupesPage()
    {
        return this.groupesPage;
    }

    getMetaclassPage()
    {
        return this.metaclassPage;
    }

    getModelesDeDecoupeAutomatiquePage()
    {
        return this.modelesDeDecoupeAutomatiquePage;
    }

    getParametresGenerauxPage()
    {
        return this.parametresGenerauxPage;
    }

    getRapportDeDepotPage()
    {
        return this.rapportDeDepotPage;
    }

    getRegexPage()
    {
        return this.regexPage;
    }

    getTamponPage()
    {
        return this.tamponPage;
    }

    getUtilisateursPage()
    {
        return this.utilisateursPage;
    }

    getNouvelUtilisateurPage()
    {
        return this.nouvelUtilisateurPage;
    }
    
    getNouveauConsultantPage()
    {
        return this.nouveauConsultantPage;
    }

    getVersioningPage()
    {
        return this.versioningPage;
    }

    getWorkflowPage()
    {
        return this.workflowPage;
    }

    getNouveauWorkflowPage()
    {
        return this.nouveauWorkflowPage;
    }

    getSearchPage()
    {
        return this.searchPage;
    }

    getHelpPage()
    {
        return this.helpPage;
    }
}
module.exports = {POManager};