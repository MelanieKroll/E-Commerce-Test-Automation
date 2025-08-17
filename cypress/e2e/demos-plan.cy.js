if (Cypress.env('RUN_DEMOS_PLAN_TESTS')) {
  describe('DEMOS plan GmbH Website Test', () => {

    it('should navigate to the jobs page and return', () => {
      // Schritt 1: Gehe direkt zur Homepage von DEMOS plan GmbH
      cy.visit('https://demos-deutschland.de/');

      // Schritt 2: Navigiere zur Stellenanzeigen-Seite
      // Suche nach dem Link, der den Text 'Jobs' enthält.
      cy.contains('a', 'Jobs').click();
      cy.url().should('include', '/jobs.html');

      // Schritt 3: Gehe zurück zur Homepage
      cy.go('back');
      cy.url().should('eq', 'https://demos-deutschland.de/');
    });

  });
} else {
  describe.skip('DEMOS plan GmbH Website Test', () => {
    it('Dieser Test wurde übersprungen', () => { });
  });
}
