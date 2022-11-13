const Account = require("../src/account");

describe("when user displays statement", () => {
  it("records deposits ", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.showDeposits()).toContain(500);
  });
});
