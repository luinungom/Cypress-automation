import BasePage from "./BasePage";

class CheckOutStepTwoPage extends BasePage {
  //Locators

  get finishButtonId() {
    return cy.get("#finish");
  }

  get cancelButtonId() {
    return cy.get("cancel");
  }

  get paymentInfoLabel() {
    return this.getdataTest("payment-info-label");
  }

  get paymentInfoValue() {
    return this.getdataTest("payment-info-value");
  }

  get shippingInfoLabel() {
    return this.getdataTest("shipping-info-label");
  }

  get shippingInfoValue() {
    return this.getdataTest("shipping-info-value");
  }

  get totalInfoLabel() {
    return this.getdataTest("total-info-label");
  }

  get subtotalLabel() {
    return this.getdataTest("subtotal-label");
  }

  get taxLabel() {
    return this.getdataTest("tax-label");
  }

  get totalLabel() {
    return this.getdataTest("total-label");
  }

  // Usually I don't use this kind of attributes in Selenium, will do here just for technical review purpouses
  getdataTest(value) {
    return cy.get(`[data-test="${value}"]`);
  }

  // actions

  getItemContainer(itemName) {
    return cy.contains(".inventory_item_name", itemName).parents(".cart_item");
  }

  clickFinishButton() {
    this.finishButtonId.click();
  }

  clickCancelButton() {
    this.cancelButtonId.click();
  }

  getItemPrice(itemName) {
    return this.getItemContainer(itemName).find(".inventory_item_price");
  }
}

export default CheckOutStepTwoPage;
