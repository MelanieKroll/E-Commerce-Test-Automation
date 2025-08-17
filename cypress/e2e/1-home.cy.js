import HomePage from '../../page-objects/HomePage';

describe('Home Page Tests', () => {

  it('should load the home page and verify the header links', () => {
    // 1. Die Startseite besuchen
    HomePage.visit();

    // 2. Prüfen, ob der Header und die Links sichtbar sind
    HomePage.verifyHeaderLinks();

    // 3. Zusätzliche Überprüfung: Den Seitentitel validieren
    cy.title().should('eq', 'Automation Exercise');
  });

});