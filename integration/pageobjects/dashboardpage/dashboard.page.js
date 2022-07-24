import Common from "../common/common";

// sub page containing specific selectors and methods for a Login page

class DashboardPage extends Common {
  // selectors using getter methods
  get $$dataAutomation() {
    return $$("[data-automation]");
  }
  get $sidebar() {
    return $("[data-automation='sidebar-main-div']");
  }
  get $btnLogout() {
    return $("[data-automation='sidebar-logout']");
  }
  get $dashboardTable() {
    return $("[data-automation='order-table']");
  }
  get $amountTransferredLastWeek() {
    return $("[data-automation='amount-transferred-last-week']");
  }
}

export default new DashboardPage();
