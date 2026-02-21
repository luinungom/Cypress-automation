import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import ItemDetailPage from "./pages/itemDetailPage";
import CartPage from "./pages/CartPage";

describe("As a Swag Labs standard_user, I need to review my previously added cart products in the Swag Labs ordering platform so that I can remove them.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const itemDetailPage = new ItemDetailPage();
  const cartPage = new CartPage();
  const sauceDemoUrl = "https://www.saucedemo.com";

  it("Remove product(s)", () => {
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
      inventoryPage.clickRemoveForAnItem(item)
      // if the badge is not present, that means we have removed the item
      inventoryPage.shoppingCartBadge.should("not.exist");
      // Remove from details view
      inventoryPage.clickAddToCartForAnItem(item);
      // if the badge is visible, that means we have an item added in the shopping cart
      inventoryPage.shoppingCartBadge.should("be.visible");
      inventoryPage.clickItemDetails(item);
      itemDetailPage.clickRemoveItem(item);
      // if the badge is not present, that means we have removed the item
      itemDetailPage.shoppingCartBadge.should("not.exist");
      itemDetailPage.clickNavigateBackToProducts();
      // Remove from the cart
      inventoryPage.clickAddToCartForAnItem(item);
      // if the badge is visible, that means we have an item added in the shopping cart
      inventoryPage.clickInTheCart();
      cartPage.shoppingCartBadge.should("be.visible");
      cartPage.clickRemoveItem(item);
      // if the badge is not present, that means we have removed the item
      cartPage.shoppingCartBadge.should("not.exist");
    });
  });
});