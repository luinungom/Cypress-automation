class BasePage {
  // locators
  get shoppingCartContainer() {
    return cy.get("#shopping_cart_container");
  }

  get leftBurguerMenu() {
    return cy.get("#react-burger-menu-btn");
  }

  get logOutFromBurgerMenu() {
    return cy.get("#logout_sidebar_link");
  }

    get aboutFromBurgerMenu() {
    return cy.get("#about_sidebar_link");
  }

  get shoppingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  // actions
  
  clickLeftBurgerMenu() {
    if (cy.get(".bm-menu-wrap").invoke('is', 'visible')) {
    this.leftBurguerMenu.click();
    }
  }

  clickLogOut() {
    this.logOutFromBurgerMenu.click();
  }

  clickAbout() {
    this.aboutFromBurgerMenu.click();
  }

  clickInTheCart() {
    this.shoppingCartContainer.click();
  }

}
export default BasePage;