class ItemDetailPage {
  // locators

  get itemContainer() {
    return cy.get(".inventory_details_container");
  }

  // actions

  getItemContainer(itemName) {
    return cy
      .contains(".inventory_details_name.large_size", itemName)
      .parents(".inventory_details_container");
  }
}

export default ItemDetailPage;
