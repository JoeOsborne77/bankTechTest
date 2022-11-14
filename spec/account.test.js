const Account = require("../src/account");

describe("when user makes deposit", () => {
  it("records deposits with val and date", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.transations).toEqual([
      {
        date: "14/11/2022",
        transcationType: "Deposit",
        val: 500,
      },
    ]);
  });

  it("records withdrawal amount", () => {
    const account = new Account();
    account.makeDeposit(200);
    account.makeWithdrawal(200);
    expect(account.transations).toEqual([
      {
        date: "14/11/2022",
        transcationType: "Deposit",
        val: 200,
      },
      { date: "14/11/2022", transcationType: "Withdrawal", val: 200 },
    ]);
  });

  it("records withdrawal date", () => {
    const account = new Account();
    account.makeDeposit(200);
    account.makeWithdrawal(200);
    expect(account.transations).toEqual([
      {
        date: "14/11/2022",
        transcationType: "Deposit",
        val: 200,
      },
      {
        date: "14/11/2022",
        transcationType: "Withdrawal",
        val: 200,
      },
    ]);
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
