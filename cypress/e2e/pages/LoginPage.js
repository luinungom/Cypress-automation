class LoginPage {
  //locators
  get usernameInputId() {
    return cy.get("#user-name");
  }

  get passwordInputId() {
    return cy.get("#password");
  }

  get loginButtonId() {
    return cy.get("#login-button");
  }

  //actions
  insertUserName(username) {
    this.usernameInputId.type(username);
  }

  insertPassword(password) {
    this.passwordInputId.type(password);
  }

  clickLoginButton() {
    this.loginButtonId.click();
  }
}
export default LoginPage;
