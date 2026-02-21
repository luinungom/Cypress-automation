import BasePage from "./BasePage";

class CheckOutStepOnePage extends BasePage {
  //Locators

  get firstNameInputID() {
    return cy.get("#first-name");
  }

  get lastNameInputID() {
    return cy.get("#last-name");
  }

  get postalCodeInputID() {
    return cy.get("#postal-code");
  }

  get continueButtonID() {
    return cy.get("#continue");
  }

  //Actions

  insertName(name) {
    this.firstNameInputID.type(name);
  }

  insertLastName(lastName) {
    this.lastNameInputID.type(lastName);
  }

  insertPostalCode(postalCode) {
    this.postalCodeInputID.type(postalCode);
  }

  fillInformation(name, lastName, postalCode) {
    this.insertName(name);
    this.insertLastName(lastName);
    this.insertPostalCode(postalCode);
  }

  clickContinueButton() {
    this.continueButtonID.click();
  }
}
export default CheckOutStepOnePage;
