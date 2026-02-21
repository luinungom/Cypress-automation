import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";

describe("As a Swag Labs standard_user, I need to add products to the cart in the Swag Labs ordering platform so that I can buy them.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const sauceDemoUrl = "https://www.saucedemo.com";

  it("Add product(s) to the cart", () => {
    cy.visit(sauceDemoUrl);
    cy.fixture("users_and_pass").then((data) => {
      const username = data[0].usernames.find(
        (u) => u.username === "standard_user",
      ).username;
      const password = data[1].password;

      loginPage.insertUserName(username);
      loginPage.insertPassword(password);
      loginPage.clickLoginButton();
      cy.url().should("include", "/inventory");
      inventoryPage.shoppingCartContainer.should("exist");
      inventoryPage.clickAddToCartForAnItem("Sauce Labs Backpack");
      inventoryPage.clickInTheCart();
      // if the badge is visible, that means we have an item added in the shopping cart
      inventoryPage.shoppingCartBadge.should("be.visible");
      cy.url().should("include", "/cart");
      // Verify the expected item is the one that has been added to the cart
      cartPage.getInventoryItemInCart("Sauce Labs Backpack").should('be.visible');
      cartPage.checkoutButton.should('be.visible');
    });
  });
});