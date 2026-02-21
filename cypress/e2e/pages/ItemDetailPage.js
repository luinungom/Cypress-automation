import BasePage from './BasePage';

class ItemDetailPage extends BasePage{
  // locators

  get itemContainer() {
    return cy.get(".inventory_details_container");
  }

  get navigateBackToProducts() {
    return cy.get("#back-to-products");
  }

  // actions

  getItemContainer(itemName) {
    return cy
      .contains(".inventory_details_name.large_size", itemName)
      .parents(".inventory_details_container");
  }

  clickRemoveItem(itemName) {
    this.getItemContainer(itemName).find("#remove").click();
  }

  clickNavigateBackToProducts() {
    this.navigateBackToProducts.click();
  }

}

export default ItemDetailPage;
