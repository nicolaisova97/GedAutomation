const {test, expect} = require('@playwright/test');
class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.usernameField = page.locator('#login');
        this.usernameFieldIsRequired = page.locator('#login[required]');
        this.passwordField = page.locator('#password');
        this.passwordFieldIsRequired = page.locator('#password[required]');
        this.showHidePasswordButton = page.locator('#toggleVisibilityPassword');
        this.forgotPasswordButton = page.locator('#forgetPassword');
        this.submitButton = page.locator("//button[@type='submit']");
        this.googleSignInButton = page.locator('.abcRioButtonContentWrapper');
        this.termsAndConditionsButton = page.locator('termsLink');
        this.invalidCredentialsError = page.locator('#errorMsg');
        this.resetPasswordFormTitle = page.locator('div #LostPassword h3');
        this.emailRecoveryField = page.locator('#emailRecovery');
        this.usernameRecoveryField = page.locator('#loginRecovery');
        this.envoyerButton = page.locator("//button[contains(text(), 'Send')]");
        this.resetPasswordSuccessMessage = page.locator('#helpText');
    }

    async goTo()
    {
        await this.page.goto('https://qa-ged.eukles.com/');
        await this.page.waitForLoadState('networkidle');
    }

    async verifyPageTitle()
    {
        const pageTitle = await this.page.title();
        expect(pageTitle).toBe("GED | Authentication");
    }

    async validLogIn(username, password)
    {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyIfUsernameAndPasswordFieldsAreRequired()
    {
        expect(this.usernameFieldIsRequired).not.toBeNull();
        expect(this.passwordFieldIsRequired).not.toBeNull();
    }

    async loginWithInvalidCredentials(username, password)
    {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
        await expect(this.invalidCredentialsError).toHaveText('Mauvais identifiant ou mot de passe.');
    }

    async openForgotPasswordForm()
    {
        await this.forgotPasswordButton.click();
        await expect(this.resetPasswordFormTitle).toHaveText('Réinitialisation du mot de passe');
    }

    async resetPassword(email, username)
    {
        this.openForgotPasswordForm();
        await this.page.waitForLoadState('networkidle');
        this.emailRecoveryField.fill(email);
        this.usernameRecoveryField.fill(username);
        this.envoyerButton.click();
        await expect(this.resetPasswordSuccessMessage).toHaveText('La demande de réinitialisation de mot de passe a bien été prise en compte.');
    }


}

module.exports = {LoginPage};