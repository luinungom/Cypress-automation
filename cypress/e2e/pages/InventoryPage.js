class InventoryPage {
  //locators

  get inventoryContainer() {
    return cy.get("#inventory_container");
  }

  get shoppingCartContainer() {
    return cy.get("#shopping_cart_container");
  }

  get leftBurguerMenu() {
    return cy.get("#react-burger-menu-btn")
  }

  get logOutFromBurgerMenu() {
    return cy.get("#logout_sidebar_link")
  }

  getInventoryItem(itemName) {
    return cy
      .contains(".inventory_item_name", itemName)
      .parents(".inventory_item");
  }

  // actions

  clickAddToCartForAnItem(itemName) {
    this.getInventoryItem(itemName).find(".btn.btn_primary.btn_small.btn_inventory")
      .click();
  }

  clickItemDetails(itemName) {
    this.getInventoryItem(itemName).find(".inventory_item_name ").click();
  }

  getImageSrcAttribute(itemName) {
    //return this.getInventoryItem(itemName).find(".inventory_item_img").invoke('attr', 'src');
    return this.getInventoryItem(itemName).find(".inventory_item_img");
    }

  clickLeftBurgerMenu() {
    this.leftBurguerMenu.click();
  }

  clickLogOut() {
    this.logOutFromBurgerMenu.click();
  }


}

export default InventoryPage;