import { ETimeout } from "../constants/webConstants";

export class webElementActions {
    /**
     * Navigate to a URL.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async navigateToUrl(url: any, waitTimeOut = ETimeout.TIMEOUT_S) {
      await driver.pause(waitTimeOut || ETimeout.TIMEOUT_XXS);
      await browser.url(url);
    }

   /**
   * Maximize the Window
   */
  static async maximizeWindow() {
    await browser.maximizeWindow();
  }

  /**
   * Refresh the Browser
   */
  static async refreshBrowser() {
    await browser.refresh();
  }

  /**
   * Go back in the browser
   */
  static async backBrowser() {
    await browser.back();
  }

  /**
   * Click on an element.
   * @param elementPath - The element to click on.
   * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
   */
  static async clickElement(
    elementPath: any,
    waitTimeOut = ETimeout.TIMEOUT_S,
  ) {
    await elementPath.waitForDisplayed({ timeout: waitTimeOut });
    await (await elementPath).waitForClickable({ timeout: waitTimeOut });
    await (await elementPath).click();
  }

  /**
   * Input text into a textbox.
   * @param elementPath - The element representing the textbox.
   * @param inputText - The text to input.
   * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
   */
  static async inputText(
    elementPath: any,
    inputText: string,
    waitTimeOut = ETimeout.TIMEOUT_L,
  ) {
    await elementPath.waitForDisplayed({ timeout: waitTimeOut });
    await expect(await elementPath).toBeDisplayed();
    await elementPath.clearValue();
    await elementPath.setValue(inputText);
  }

  /**
   * Get the text of an element and compare it with the exact expected text.
   * @param elementPath - The element to get the text from.
   * @param expectedText - The expected text to compare.
   * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
   */
  static async getTextAndCompareExactText(
    elementPath: any,
    expectedText: string,
    waitTimeOut = ETimeout.TIMEOUT_S,
  ) {
    await elementPath.waitForDisplayed({ timeout: waitTimeOut });
    await expect(await elementPath).toBeDisplayed();
    await expect(await elementPath.getText()).toEqual(expectedText);
  }

   /**
   * Verify if an element is displayed.
   * @param elementPath - The element to verify.
   */
   static async verifyElementIsDisplayed(
    elementPath: any,
  ) {
    await expect(elementPath).toBeDisplayed();
  }

}
export default webElementActions;