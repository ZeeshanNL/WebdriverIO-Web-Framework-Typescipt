import { Given, Then, When } from "@wdio/cucumber-framework";
import { URL, PASSWORD, USERNAME, WRONGUSERNAME, WRONGPASSWORD } from "../constants/webConstants";
import LoginPage from "../pageobjects/loginPage";
import LoginHelper from "../feature-helper.ts/login.helper";
import webElementActions from "../elememtActions/webElementActions";


Given(`the user is on the login page`, async () => {
    await webElementActions.navigateToUrl(URL);
    await browser.maximizeWindow();
});
When(`the user enters a valid username and password and clicks the login button`, async () => {
    await LoginHelper.userLogin(USERNAME, PASSWORD);
});
Then(`the user should be redirected to the products page`, async () => {
    await webElementActions.getTextAndCompareExactText(await LoginPage.ProductsHeader, "Products");
});
When(`the user enters an invalid username and password and clicks the login button`, async () => {
    await LoginHelper.userLogin(WRONGUSERNAME, WRONGPASSWORD);
});
Then(`the user should see an error message`, async () => {
    await webElementActions.getTextAndCompareExactText(await LoginPage.errorMessage, "Epic sadface: Username and password do not match any user in this service");
});
Then(`the user should remain on the login page`, async () => {
    await webElementActions.verifyElementIsDisplayed(await LoginPage.loginButton);
});
