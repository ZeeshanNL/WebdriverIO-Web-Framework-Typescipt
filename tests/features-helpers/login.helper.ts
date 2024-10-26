import webElementActions from "../elememtActions/webElementActions";
import LoginPage from "../pageobjects/loginPage";

class LoginHelper {

    public async userLogin(username: string, password: string) {
    await webElementActions.inputText(await LoginPage.usernameField, username);
    await webElementActions.inputText(await LoginPage.passwordField, password);
    await webElementActions.clickElement(await LoginPage.loginButton);
    }
}
export default new LoginHelper();