class AuthPage {
  // Login-Formular Selektoren
  get loginEmailInput() {
    return cy.get('input[data-qa="login-email"]');
  }

  get loginPasswordInput() {
    return cy.get('input[data-qa="login-password"]');
  }

  get loginButton() {
    return cy.get('button[data-qa="login-button"]');
  }

  // Registrierungs-Formular Selektoren
  get signupNameInput() {
    return cy.get('input[data-qa="signup-name"]');
  }

  get signupEmailInput() {
    return cy.get('input[data-qa="signup-email"]');
  }

  get signupButton() {
    return cy.get('button[data-qa="signup-button"]');
  }

  // Allgemeine Selektoren
  get loggedInAsUser() {
    return cy.contains('li a', ' Logged in as ');
  }

  // Methoden
  login(email, password) {
    this.loginEmailInput.type(email);
    this.loginPasswordInput.type(password);
    this.loginButton.click();
  }

  signup(name, email) {
    this.signupNameInput.type(name);
    this.signupEmailInput.type(email);
    this.signupButton.click();
  }
}

export default new AuthPage();