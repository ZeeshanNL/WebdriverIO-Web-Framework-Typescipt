class LoginPage {
  public get usernameField() {
    return $(`//input[@id="user-name"]`);
  }
  public get passwordField() {
    return $(`//input[@id="password"]`);
  }
  public get loginButton() {
    return $(`//input[@id="login-button"]`);
  }
  public get errorMessage() {
    return $(`//h3[@data-test="error"]`);
  }
  public get ProductsHeader() {
    return $(`//span[@class="title"]`);
  }
}
export default new LoginPage();