import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import ItemDetailPage from "./pages/ItemDetailPage";

describe("As a Swag Labs standard_user, I need to add products to the cart in the Swag Labs ordering platform so that I can buy them.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const itemDetailPage = new ItemDetailPage();
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
      cy.url().should("include", "/inventory-item");
      // check that the specific item details are visible
      itemDetailPage.getItemContainer("Sauce Labs Backpack").should('be.visible');
    });
  });
});
