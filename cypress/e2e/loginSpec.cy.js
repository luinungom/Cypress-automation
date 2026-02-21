import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";

describe("As a Swag Labs admin, I need to access/logout of the platform with the 4 different user types.", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const sauceDemoUrl = "https://www.saucedemo.com";

  it("Log in/Log out of Swag Labs (standard_user)", () => {
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
      inventoryPage.clickLeftBurgerMenu();
      inventoryPage.clickLogOut();
      cy.url().should("not.include", "/inventory");
      inventoryPage.shoppingCartContainer.should("not.exist");
    });
  });

  it("Not log in to Swag Labs and get an error (locked_out_user)", () => {
    cy.visit(sauceDemoUrl);
    cy.fixture("users_and_pass").then((data) => {
      const username = data[0].usernames.find(
        (u) => u.username === "locked_out_user",
      ).username;
      const password = data[1].password;

      loginPage.insertUserName(username);
      loginPage.insertPassword(password);
      loginPage.clickLoginButton();
      cy.url().should("not.include", "/inventory");
      loginPage.loginErrorMessage.should("be.visible");
    });
  });

  it("Log in/Log out of Swag Labs (problem_user)", () => {
    cy.visit(sauceDemoUrl);
    cy.fixture("users_and_pass").then((data) => {
      const username = data[0].usernames.find(
        (u) => u.username === "problem_user",
      ).username;
      const password = data[1].password;

      loginPage.insertUserName(username);
      loginPage.insertPassword(password);
      loginPage.clickLoginButton();
      cy.url().should("include", "/inventory");
      inventoryPage.shoppingCartContainer.should("exist");
      inventoryPage.clickLeftBurgerMenu();
      inventoryPage.clickAbout();
      // with this user, the about page shows a 404 error
      cy.url().should("include", "/404");
      cy.go('back');
      inventoryPage.clickLeftBurgerMenu();
      inventoryPage.clickLogOut();
      inventoryPage.shoppingCartContainer.should("not.exist");
    });
  });

  it("Log in/Log out of Swag Labs (performance_glitch_user)", () => {
    cy.visit(sauceDemoUrl);
    cy.fixture("users_and_pass").then((data) => {
      const username = data[0].usernames.find(
        (u) => u.username === "performance_glitch_user",
      ).username;
      const password = data[1].password;

      loginPage.insertUserName(username);
      loginPage.insertPassword(password);
      loginPage.clickLoginButton();
      cy.url().should("include", "/inventory");
      inventoryPage.shoppingCartContainer.should("exist");
      inventoryPage.clickLeftBurgerMenu();
      inventoryPage.clickLogOut();
      cy.url().should("not.include", "/inventory");
      inventoryPage.shoppingCartContainer.should("not.exist");
    });
  });
});
