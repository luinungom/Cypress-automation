import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";
import CheckOutStepOnePage from "./pages/CheckOutStepOnePage";
import CheckOutStepTwoPage from "./pages/CheckOutStepTwoPage";
import CompletePage from "./pages/CompletePage";

describe("As a Swag Labs standard_user, I need to buy all the products added to the shopping cart in the Swag Labs ordering platform.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkOutStepOnePage = new CheckOutStepOnePage();
  const checkOutStepTwoPage = new CheckOutStepTwoPage();
  const completePage = new CompletePage();
  const sauceDemoUrl = "https://www.saucedemo.com";

  it("Buy product(s)", () => {
    cy.visit(sauceDemoUrl);
    cy.fixture("users_and_pass").then((data) => {
      const username = data[0].usernames.find(
        (u) => u.username === "standard_user",
      ).username;
      const password = data[1].password;
      const item1 = "Sauce Labs Backpack";
      const item2 = "Sauce Labs Fleece Jacket";

      loginPage.insertUserName(username);
      loginPage.insertPassword(password);
      loginPage.clickLoginButton();
      cy.url().should("include", "/inventory");
      inventoryPage.shoppingCartContainer.should("exist");
      // Remove from main item list
      inventoryPage.clickAddToCartForAnItem(item1);
      inventoryPage.clickAddToCartForAnItem(item2);
      // if the badge is visible, that means we have an item added in the shopping cart
      inventoryPage.shoppingCartBadge.should("be.visible");
      inventoryPage.clickInTheCart();
      cartPage.clickCheckoutButton();
      checkOutStepOnePage.fillInformation("John", "Doe", "1234");
      checkOutStepOnePage.clickContinueButton();
      // Verify that the product(s) is the correct one before finishing
      checkOutStepTwoPage.getItemContainer(item1).should("be.visible");
      checkOutStepTwoPage.getItemContainer(item2).should("be.visible");
      checkOutStepTwoPage.paymentInfoLabel.should("be.visible");
      checkOutStepTwoPage.paymentInfoValue.should("be.visible");
      checkOutStepTwoPage.shippingInfoLabel.should("be.visible");
      checkOutStepTwoPage.shippingInfoValue.should("be.visible");
      checkOutStepTwoPage.totalInfoLabel.should("be.visible");
      checkOutStepTwoPage.subtotalLabel.should("be.visible");
      checkOutStepTwoPage.taxLabel.should("be.visible");
      checkOutStepTwoPage.totalLabel.should("be.visible");
      checkOutStepTwoPage.clickFinishButton();
      completePage.checkOutCompleteContainer.should("be.visible");
    });
  });
});
