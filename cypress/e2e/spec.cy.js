import LoginPage from "./pages/LoginPage";

describe("template spec", () => {
  const loginPage = new LoginPage();

  it("passes", () => {
    cy.visit("https://www.saucedemo.com");
    cy.fixture('users_and_pass').then((userData) => {
      loginPage.insertUserName("standard_user");
      loginPage.insertPassword("secret_sauce");
      loginPage.clickLoginButton();
      cy.pause();
    });
  });
});
