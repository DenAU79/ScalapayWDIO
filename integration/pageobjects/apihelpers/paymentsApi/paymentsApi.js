import Common from "../../common/common";
const axios = require("axios").default;

// sub page containing specific selectors and methods

class PaymentsApi extends Common {
  async getPayments(token, bearerToken) {
    try {
      const headers = {
        authorization: "Bearer " + bearerToken,
        accept: "application/json",
      };
      const response = await axios({
        method: "get",
        url: super.baseApiUrl + "payments/" + token,
        headers: headers,
      });
      return response;
    } catch (error) {
      console.log(
        ("Failed to execute GET request" + url) & " Found Error as ",
        error
      );
    }
  }
}

export default new PaymentsApi();
