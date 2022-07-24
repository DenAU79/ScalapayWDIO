/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Common {
  // Base URL for API
  get baseApiUrl() {
    return "https://integration.api.scalapay.com/v2/";
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`https://staging.partner.scalapay.com/${path}`);
  }
}
