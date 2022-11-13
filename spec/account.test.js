const Account = require("../src/account");

describe("when user displays statement", () => {
  it("records deposits ", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.showDeposits()).toContain(500);
  });

  it("records date of deposits ", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.showDeposits()).toContain("13/11/2022");
  });

  it("records withdrawals ", () => {
    const account = new Account();
    account.makeWithdrawal(200);
    expect(account.showWithdrawals()).toContain(200);
  });
});
