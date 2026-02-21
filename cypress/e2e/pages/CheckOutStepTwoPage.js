import BasePage from "./BasePage";

class CheckOutStepTwoPage extends BasePage {
  //Locators

  get finishButtonId() {
    return cy.get("#finish");
  }

  get cancelButtonId() {
    return cy.get("cancel");
  }

  get checkOutCompleteContainer() {
    return cy.get("#checkout_complete_container")
  }

  // actions

  getItemContainer(itemName) {
    return cy
      .contains(".inventory_item_name", itemName)
      .parents(".cart_item");
  }

  clickFinishButton() {
    this.finishButtonId.click();
  }

  clickCancelButton() {
    this.cancelButtonId.click();
  }
}
export default CheckOutStepTwoPage;
