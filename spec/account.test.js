const Account = require("../src/account");

describe("when user makes deposit", () => {
  it("records deposits with val and date", () => {
    const account = new Account();
    account.makeDeposit(500);
    expect(account.transactions).toEqual([
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
    expect(account.transactions).toEqual([
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
    expect(account.transactions).toEqual([
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
});
