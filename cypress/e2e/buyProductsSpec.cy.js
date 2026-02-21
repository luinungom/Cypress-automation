import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";
import CheckOutStepOnePage from "./pages/CheckOutStepOnePage";
import CheckOutStepTwoPage from "./pages/CheckOutStepTwoPage";

describe("As a Swag Labs standard_user, I need to buy all the products added to the shopping cart in the Swag Labs ordering platform.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkOutStepOnePage = new CheckOutStepOnePage();
  const checkOutStepTwoPage = new CheckOutStepTwoPage();
  const sauceDemoUrl = "https://www.saucedemo.com";

  it("Buy product(s)", () => {
    cy.visit(sauceDemoUrl);
    cy.fixture("users_and_pass").then((data) => {
      const username = data[0].usernames.find(
        (u) => u.username === "standard_user",
      ).username;
      const password = data[1].password;
      const item = "Sauce Labs Backpack";

      loginPage.insertUserName(username);
      loginPage.insertPassword(password);
      loginPage.clickLoginButton();
      cy.url().should("include", "/inventory");
      inventoryPage.shoppingCartContainer.should("exist");
      // Remove from main item list
      inventoryPage.clickAddToCartForAnItem(item);
      // if the badge is visible, that means we have an item added in the shopping cart
      inventoryPage.shoppingCartBadge.should("be.visible");
      inventoryPage.clickInTheCart();
      cartPage.clickCheckoutButton();
      checkOutStepOnePage.fillInformation("John", "Doe", "1234");
      checkOutStepOnePage.clickContinueButton();
      // Verify that the product is the correct one before finishing
      checkOutStepTwoPage.getItemContainer(item).should("be.visible");
      checkOutStepTwoPage.clickFinishButton();
      checkOutStepTwoPage.checkOutCompleteContainer.should("be.visible");
    });
  });
});
