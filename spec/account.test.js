const Account = require("../src/account");

describe("when user makes credit", () => {
  it("records credits with value and date", () => {
    const account = new Account();
    account.creditAccount(500);
    expect(account.transactions).toEqual([
      {
        balance: 500,
        credit: 500,
        date: new Date().toLocaleDateString(),
        debit: "",
        transcationType: "credit",
      },
    ]);
  });

  it("records debit amount and date", () => {
    const account = new Account();
    account.creditAccount(200);
    account.debitAccount(200);
    expect(account.transactions).toEqual([
      {
        balance: 200,
        credit: 200,
        date: new Date().toLocaleDateString(),
        debit: "",
        transcationType: "credit",
      },
      {
        balance: 0,
        credit: "",
        date: new Date().toLocaleDateString(),
        debit: 200,
        transcationType: "debit",
      },
    ]);
  });
});
