import Common from "../common/common";

// sub page containing specific selectors and methods for a Login page

class LoginPage extends Common {
  // selectors using getter methods

  get inputUsername() {
    return $("#email");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  // Login using username and password

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
