const { expect } = require("chai");
const PaymentsApi = require("../../pageobjects/apihelpers/paymentsApi/paymentsApi");
import Dataset from "../../../dataset/credentials.json";
let payments;

describe("Payments API endpoint", async () => {
  it("Verify request status ", async () => {
    payments = await PaymentsApi.default.getPayments(
      Dataset.token,
      Dataset.bearerToken
    );

    expect(payments.status).to.equal(200);
  });

  it("Verify payments 'status'", async () => {
    expect(payments.data.status).to.equal("charged");
  });

  it("Verify payments 'captureStatus'", async () => {
    expect(payments.data.captureStatus).to.equal("captured");
  });

  it("Verify payments amount to be a number", async () => {
    expect(payments.data.totalAmount)
      .to.have.property("amount")
      .that.is.a("number");
  });

  it("Verify payments amount to be equal", async () => {
    const orderDetails = payments.data.orderDetails;
    expect(+orderDetails.totalAmount.amount).to.equal(
      payments.data.totalAmount.amount
    );
  });

  it("Verify currency value is a string", async function () {
    expect(payments.data.totalAmount)
      .to.have.property("currency")
      .that.is.a("string");
  });
  it("Verify currency is EUR", async function () {
    expect(payments.data.totalAmount.currency).to.equal("EUR");
  });
});
