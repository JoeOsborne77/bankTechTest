const Account = require("../src/account");

describe("when user makes deposit", () => {
  it("records deposits with value and date", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.deposits).toEqual([{ date: "14/11/2022", value: 500 }]);
  });

  it("records withdrawal amount", () => {
    const account = new Account();
    account.makeDeposit(200);
    account.makeWithdrawal(200);
    expect(account.withdrawals).toEqual([{ date: "14/11/2022", value: 200 }]);
  });

  it("records withdrawal date", () => {
    const account = new Account();
    account.makeDeposit(200);
    account.makeWithdrawal(200);
    expect(account.withdrawals).toEqual([{ date: "14/11/2022", value: 200 }]);
  });

  it("updates balance based on deposit", () => {
    const account = new Account();
    account.makeDeposit(200);
    expect(account.balance).toEqual(200);
  });

  it("balance is 0 when withdrawal without enough funds is attempted", () => {
    const account = new Account();
    account.makeWithdrawal(200);
    expect(account.balance).toEqual(0);
  });

  it("updates balance based on deposits and withdrawals", () => {
    const account = new Account();
    account.makeDeposit(200);
    account.makeWithdrawal(50);
    expect(account.balance).toEqual(150);
  });
});
