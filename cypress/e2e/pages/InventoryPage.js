import BasePage from "./BasePage";

class InventoryPage extends BasePage {
  //locators

  get inventoryContainer() {
    return cy.get("#inventory_container");
  }

  getInventoryItem(itemName) {
    return cy
      .contains(".inventory_item_name", itemName)
      .parents(".inventory_item");
  }

  // actions

  clickAddToCartForAnItem(itemName) {
    this.getInventoryItem(itemName)
      .find(".btn.btn_primary.btn_small.btn_inventory")
      .click();
  }

  clickRemoveForAnItem(itemName) {
    this.getInventoryItem(itemName)
      .find(".btn.btn_secondary.btn_small.btn_inventory")
      .click();
  }

  clickItemDetails(itemName) {
    this.getInventoryItem(itemName).find(".inventory_item_name ").click();
  }

  getItemPrice(itemName) {
    return this.getInventoryItem(itemName)
      .find(".inventory_item_price");
  }
}

export default InventoryPage;
