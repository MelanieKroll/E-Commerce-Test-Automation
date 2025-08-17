class HomePage {
  get url() {
    return 'https://www.automationexercise.com/';
  }

  get header() {
    return cy.get('.shop-menu');
  }

  get homeButton() {
    return cy.get('.nav.navbar-nav li a[href="/"]');
  }

  get productsLink() {
    return cy.get('.nav.navbar-nav li a[href="/products"]');
  }

  get signupLoginLink() {
    return cy.get('.nav.navbar-nav li a[href="/login"]');
  }

  // Methode, um die Startseite zu besuchen
  visit() {
    cy.visit(this.url);
  }

  // Methode, um die Header-Elemente zu überprüfen
  verifyHeaderLinks() {
    this.homeButton.should('be.visible');
    this.productsLink.should('be.visible');
    this.signupLoginLink.should('be.visible');
  }

  // Methode, um zur Login-Seite zu navigieren
  goToSignupLogin() {
    this.signupLoginLink.click();
  }

  get firstProduct() {
    return cy.get('.features_items .col-sm-4').eq(0);
  }

  get firstProductOverlay() {
    return this.firstProduct.find('.product-overlay');
  }

  get secondProduct() {
    return cy.get('.features_items .col-sm-4').eq(1);
  }

  get secondProductOverlay() {
    return this.secondProduct.find('.product-overlay');
  }

  get viewCartButton() {
    return cy.get('a[href="/view_cart"]');
  }

  // Methode, um ein Produkt zum Warenkorb hinzuzufügen
  addProductToCart(productNumber) {
    if (productNumber === 1) {
      this.firstProduct.trigger('mouseover');
      this.firstProductOverlay.find('a.add-to-cart').click();
    } else if (productNumber === 2) {
      this.secondProduct.trigger('mouseover');
      this.secondProductOverlay.find('a.add-to-cart').click();
    } else {
      throw new Error('Invalid product number. Please use 1 or 2.');
    }
  }

}

export default new HomePage();