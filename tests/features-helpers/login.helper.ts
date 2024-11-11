import { WebElementActions } from '../elementActions/webElementActions';
import LoginPage from '../pageobjects/loginPage';

class LoginHelper {
  public async userLogin(username: string, password: string) {
    await WebElementActions.inputText(await LoginPage.usernameField, username);
    await WebElementActions.inputText(await LoginPage.passwordField, password);
    await WebElementActions.clickElement(await LoginPage.loginButton);
  }
}
export default new LoginHelper();
