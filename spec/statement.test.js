/* eslint-disable */

const Account = require("../src/account");
const Statement = require("../src/statement");
const account = new Account();
const statement = new Statement(account);

describe("Given new account instance", () => {
  beforeEach(() => {
    account.balance = 0;
    account.transactions = [];
  });

  it("displays statement with mocked credit transaction", () => {
    account.transactions = [
      // mock transactions
      {
        balance: 700,
        credit: 700,
        date: new Date().toLocaleDateString(),
        debit: "   ",
        transcationType: "credit",
      },
    ];
    expect(statement.showTransactions()).toEqual([
      {
        balance: 700,
        credit: 700,
        date: new Date().toLocaleDateString(),
        debit: "   ",
        transcationType: "credit",
      },
    ]);
  });

  it("displays statement with mocked debit transaction", () => {
    account.transactions = [
      // mock transactions
      {
        balance: 0,
        credit: "   ",
        date: new Date().toLocaleDateString(),
        debit: 700,
        transcationType: "debit",
      },
    ];
    expect(statement.showTransactions()).toEqual([
      {
        balance: 0,
        credit: "   ",
        date: new Date().toLocaleDateString(),
        debit: 700,
        transcationType: "debit",
      },
    ]);
  });

  it("displays credits", () => {
    account.creditAccount(700);
    expect(statement.showTransactions()).toEqual([
      {
        balance: 700,
        credit: 700,
        date: new Date().toLocaleDateString(),
        debit: "   ",
        transcationType: "credit",
      },
    ]);
  });

  it("displays debits", () => {
    account.creditAccount(700);
    account.debitAccount(350);
    expect(statement.showTransactions()).toEqual([
      {
        balance: 700,
        credit: 700,
        date: new Date().toLocaleDateString(),
        debit: "   ",
        transcationType: "credit",
      },
      {
        balance: 350,
        credit: "   ",
        date: new Date().toLocaleDateString(),
        debit: 350,
        transcationType: "debit",
      },
    ]);
  });

  it("displays balance", () => {
    account.creditAccount(700);
    expect(statement.showBalance()).toEqual("700.00");
  });

  it("displays starting balance of 0", () => {
    expect(statement.showBalance()).toEqual("0.00");
  });

  it("displays balance after credits and debits", () => {
    account.creditAccount(1000);
    account.debitAccount(700);
    expect(statement.showBalance()).toEqual("300.00");
  });

  it("displays error message if insufficient funds", () => {
    account.creditAccount(1000);
    expect(account.debitAccount(1200)).toEqual("Insufficient funds");
  });

  it("displays error message if non-number given", () => {
    expect(account.debitAccount("money")).toEqual("Incorrect format type");
  });

  it("displays error message if non-number given", () => {
    expect(account.creditAccount("Money")).toEqual("Incorrect format type");
  });

  it("returns statement header", () => {
    account.creditAccount(500);
    account.creditAccount(500);
    account.debitAccount(250);
    expect(statement.showStatement()).toContain(
      `     date    ||  credit   ||  debit  || balance\n`
    );
    expect(statement.showStatement()).toContain(
      new Date().toLocaleDateString()
    );
    expect(statement.showStatement()).toContain(
      "||  500.00  ||         || 500.00"
    );
  });
});
