import HomePage from '../../page-objects/HomePage';
import CartPage from '../../page-objects/CartPage';

describe('Add to Cart Workflow', () => {

  it('should add products to the cart and verify them', () => {
    // 1. Starte auf der Startseite
    HomePage.visit();

    // 2. Füge das erste Produkt zum Warenkorb hinzu
    HomePage.addProductToCart(1);

    // 3. Klicke auf "Continue Shopping" im Modal-Fenster, um es zu schließen
    cy.get('.modal-footer .close-modal-btn').click();

    // 4. Füge das zweite Produkt zum Warenkorb hinzu
    HomePage.addProductToCart(2);

    // 5. Klicke auf "View Cart" im Modal-Fenster
    cy.get('a[href="/view_cart"]').click();

    // 6. Überprüfe, ob zwei Produkte im Warenkorb sind
    CartPage.cartItems.should('have.length', 2);

    // 7. Überprüfe die Namen der Produkte
    CartPage.product1Name.should('be.visible');
    CartPage.product2Name.should('be.visible');
  });

});
