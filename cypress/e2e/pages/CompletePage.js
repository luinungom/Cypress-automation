import BasePage from "./BasePage";

class CompletePage extends BasePage{

  get checkOutCompleteContainer() {
    return cy.get("#checkout_complete_container");
  }

  get backHomeButtonID() {
    cy.get('#back-to-products');
  }

}

export default CompletePage;