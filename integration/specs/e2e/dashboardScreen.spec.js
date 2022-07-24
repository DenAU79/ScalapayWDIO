import LoginPage from "../../pageobjects/loginpage/login.page";
import DashboardPage from "../../pageobjects/dashboardpage/dashboard.page";
import Dataset from "../../../dataset/credentials.json";

describe("Merchant Portal Dashboard screen", () => {
  it("Should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login(
      Dataset.merchantPortalLogin.username,
      Dataset.merchantPortalLogin.password
    );
    await expect(browser).toHaveUrl(
      "https://staging.partner.scalapay.com/account/merchant/dashboard"
    );
    await expect(DashboardPage.$btnLogout).toBeExisting();
  });

  it("Validate that browser title is correct", async () => {
    await expect(browser).toHaveTitle("Sales - Scalapay");
  });

  it("Validate that all data automation elements are visible", async () => {
    // Wait for calendar is opened and pick dates are visible
    browser.waitUntil(
      () => {
        return (DashboardPage.$$dataAutomation.map((elem) =>
          elem.isDisplayed()
        ).length = 34);
      },
      { timeout: 10000, timeoutMsg: "34 automation elements were not visible" }
    );
  });

  it("Validate that sidebar is displayed", async () => {
    await expect(DashboardPage.$sidebar).toBeDisplayed();
  });

  it("Validate that amount transferred last week element exists and has €", async () => {
    await expect(DashboardPage.$amountTransferredLastWeek).toBeDisplayed();
    await expect(DashboardPage.$amountTransferredLastWeek).toHaveTextContaining(
      "€"
    );
  });
});
