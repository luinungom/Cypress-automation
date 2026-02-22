import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";
import CheckOutStepOnePage from "./pages/CheckOutStepOnePage";
import CheckOutStepTwoPage from "./pages/CheckOutStepTwoPage";

const helpers = {
  cleanPriceString: (priceString) => parseFloat(priceString.match(/[\d.]+/)[0]),
};

describe("As a Swag Labs standard_user, I need to verify that prices are the correct ones throught the E2E buying process in the Swag Labs ordering platform.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkOutStepOnePage = new CheckOutStepOnePage();
  const checkOutStepTwoPage = new CheckOutStepTwoPage();
  const sauceDemoUrl = "https://www.saucedemo.com";

  it("Verify price(s)", () => {
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
      // Since this tests is a E2E buying process, could be a good idea to verify the price integrity throught the process
      inventoryPage
        .getItemPrice(item1)
        .invoke("text")
        .then((text) => text.trim())
        .as("initialPriceItem1");
      inventoryPage
        .getItemPrice(item2)
        .invoke("text")
        .then((text) => text.trim())
        .as("initialPriceItem2");
      // if the badge is visible, that means we have an item added in the shopping cart
      inventoryPage.shoppingCartBadge.should("be.visible");
      inventoryPage.clickInTheCart();
      // Verify price in the cart page equals the initial one
      cy.get("@initialPriceItem1").then((initalPriceItem1) => {
        cartPage
          .getItemPrice(item1)
          .invoke("text")
          .then((text) => text.trim())
          .should("equal", initalPriceItem1);
      });
      cy.get("@initialPriceItem2").then((initalPriceItem2) => {
        cartPage
          .getItemPrice(item2)
          .invoke("text")
          .then((text) => text.trim())
          .should("equal", initalPriceItem2);
      });
      cartPage.clickCheckoutButton();
      checkOutStepOnePage.fillInformation("John", "Doe", "1234");
      checkOutStepOnePage.clickContinueButton();
      // Verify that the product is the correct one before finishing
      checkOutStepTwoPage.getItemContainer(item1).should("be.visible");
      checkOutStepTwoPage.getItemContainer(item2).should("be.visible");
      // Verify price in the final page equals the initial one
      cy.get("@initialPriceItem1").then((initalPriceItem1) => {
        checkOutStepTwoPage
          .getItemPrice(item1)
          .invoke("text")
          .then((text) => text.trim())
          .should("equal", initalPriceItem1);
      });
      cy.get("@initialPriceItem2").then((initalPriceItem2) => {
        checkOutStepTwoPage
          .getItemPrice(item2)
          .invoke("text")
          .then((text) => text.trim())
          .should("equal", initalPriceItem2);
      });
      // Ahead, all needed logic could be 5 lines in Java/Selenium
      // Transform items prices
      cy.get("@initialPriceItem1").then((text) => {
        const itemPrice1Float = helpers.cleanPriceString(text);
        cy.wrap(itemPrice1Float).as("itemPrice1Float");
      });

      cy.get("@initialPriceItem2").then((text) => {
        const itemPrice1Float = helpers.cleanPriceString(text);
        cy.wrap(itemPrice1Float).as("itemPrice2Float");
      });

      // Add both prices and verify total
      cy.get("@itemPrice1Float").then((itemPrice1Float) => {
        cy.get("@itemPrice2Float").then((itemPrice2Float) => {
          const calculatedTotalPriceFloat = itemPrice1Float + itemPrice2Float;

          // Verify total matches the sum
          checkOutStepTwoPage.subtotalLabel
            .invoke("text")
            .then((text) => helpers.cleanPriceString(text))
            .then((totalPricesFloat) => {
              expect(totalPricesFloat).to.be.closeTo(
                calculatedTotalPriceFloat,
                0.01,
              );
            });
        });
      });
    });
  });
});
