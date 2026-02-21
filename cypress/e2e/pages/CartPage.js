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
}

export default CartPage;
