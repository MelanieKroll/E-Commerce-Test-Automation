class CartPage {
  get cartItems() {
    return cy.get('#cart_info .cart_product');
  }

  get checkoutButton() {
    return cy.get('.btn.btn-default.check_out');
  }

  get product1Name() {
    return cy.get('#cart_info tr:nth-child(1) h4 a');
  }

  get product2Name() {
    return cy.get('#cart_info tr:nth-child(2) h4 a');
  }
}

export default new CartPage();