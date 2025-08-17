import HomePage from '../../page-objects/HomePage';
import AuthPage from '../../page-objects/AuthPage';
import { generateRandomEmail } from '../support/utils';

describe('User Registration and Login Test', () => {

  let userCredentials;

  before(() => {
    userCredentials = {
      name: 'Tester',
      email: generateRandomEmail(),
      password: 'Password123!'
    };
  });

  it('should successfully register a new user and then log in', () => {
    // Schritt 1: Gehe zur Registrierungsseite
    HomePage.visit();
    HomePage.goToSignupLogin();

    // Schritt 2: Registriere den Benutzer
    AuthPage.signup(userCredentials.name, userCredentials.email);

    // Schritt 3: Fülle das Registrierungsformular aus
    cy.get('#id_gender1').click();
    cy.get('#password').type(userCredentials.password);
    cy.get('#days').select('1');
    cy.get('#months').select('January');
    cy.get('#years').select('1990');
    cy.get('#newsletter').click();
    cy.get('#first_name').type(userCredentials.name);
    cy.get('#last_name').type('Portfolio');
    cy.get('#company').type('Test Company');
    cy.get('#address1').type('Teststrasse 1');
    cy.get('#country').select('India');
    cy.get('#state').type('Berlin');
    cy.get('#city').type('Berlin');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('1234567890');
    cy.get('button[data-qa="create-account"]').click();

    // Schritt 4: Bestätige die Registrierung
    cy.contains('h2', 'Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    // Schritt 5: Bestätige, dass der Benutzer eingeloggt ist
    AuthPage.loggedInAsUser.should('contain.text', userCredentials.name);

    // Schritt 6: Melde dich ab, um für den nächsten Test aufzuräumen
    cy.get('.nav.navbar-nav li a[href="/logout"]').click();

    // Schritt 7: Führe einen Login durch
    HomePage.goToSignupLogin();
    AuthPage.login(userCredentials.email, userCredentials.password);

    // Schritt 8: Bestätige, dass der Login erfolgreich war
    AuthPage.loggedInAsUser.should('contain.text', userCredentials.name);
  });

});