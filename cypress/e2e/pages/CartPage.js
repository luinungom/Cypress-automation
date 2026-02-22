import BasePage from "./BasePage";

class CartPage extends BasePage {
  // locators
  get checkoutButton() {
    return cy.get("#checkout");
  }

  // actions
  getInventoryItemInCart(itemName) {
    return cy.contains(".inventory_item_name", itemName).parents(".cart_item");
  }

  clickRemoveItem(itemName) {
    this.getInventoryItemInCart(itemName)
      .find(".btn.btn_secondary.btn_small.cart_button")
      .click();
  }

  clickCheckoutButton() {
    this.checkoutButton.click();
  }

  getItemPrice(itemName) {
    return this.getInventoryItemInCart(itemName).find(".inventory_item_price");
  }
}

export default CartPage;
