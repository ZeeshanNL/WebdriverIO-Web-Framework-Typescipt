import { Given, Then, When } from "@wdio/cucumber-framework";
import { BASE_URL, PASSWORD, USERNAME, WRONG_USERNAME, WRONG_PASSWORD } from "../constants/webConstants";
import LoginPage from "../pageobjects/loginPage";
import LoginHelper from "../features-helpers/login.helper";
import { WebElementActions } from "../elementActions/webElementActions";

Given(`the user is on the login page`, async () => {
  await WebElementActions.navigateToUrl(BASE_URL);
  await WebElementActions.maximizeWindow();
});
When(
  `the user enters a valid username and password and clicks the login button`,
  async () => {
    await LoginHelper.userLogin(USERNAME, PASSWORD);
  },
);
Then(`the user should be redirected to the products page`, async () => {
  await WebElementActions.getTextAndCompareExactText(
    await LoginPage.ProductsHeader,
    'Products',
  );
});
When(
  `the user enters an invalid username and password and clicks the login button`,
  async () => {
    await LoginHelper.userLogin(WRONG_USERNAME, WRONG_PASSWORD);
  },
);
Then(`the user should see an error message`, async () => {
  await WebElementActions.getTextAndCompareExactText(
    await LoginPage.errorMessage,
    'Epic sadface: Username and password do not match any user in this service',
  );
});
Then(`the user should remain on the login page`, async () => {
  await WebElementActions.verifyElementIsDisplayed(await LoginPage.loginButton);
});