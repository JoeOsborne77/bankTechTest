const Account = require("../src/account");

describe("when user makes deposit", () => {
  it("records deposits", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.showDeposits()).toContain(500);
  });

  it("records date of deposits", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.showDeposits()).toContain(
      new Date().toLocaleDateString("en-UK")
    );
  });

  it("records withdrawal amount", () => {
    const account = new Account();
    account.makeWithdrawal(200);
    expect(account.showWithdrawals()).toContain(200);
  });

  it("records withdrawal date", () => {
    const account = new Account();
    account.makeWithdrawal(200);
    expect(account.showWithdrawals()).toContain(
      new Date().toLocaleDateString("en-UK")
    );
  });

  it("updates balance based on deposit", () => {
    const account = new Account();
    account.makeDeposit(200);
    expect(account.showBalance()).toEqual(200);
  });

  it("gives balance 0 when withdrawal without enough funds is attempted", () => {
    const account = new Account();
    account.makeWithdrawal(200);
    expect(account.showBalance()).toEqual(0);
  });
});
