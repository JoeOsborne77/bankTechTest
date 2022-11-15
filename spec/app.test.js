/* eslint-disable */

const App = require("../src/app");

describe("Given new account instance", () => {
  it("displays credits", () => {
    const app = new App();
    app.credit(700);
    expect(app.showTransactions()).toEqual([
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
    const app = new App();
    app.credit(700);
    app.debit(350);
    expect(app.showTransactions()).toEqual([
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
    const app = new App();
    app.credit(700);
    expect(app.showBalance()).toEqual("700.00");
  });

  it("displays starting balance of 0", () => {
    const app = new App();
    expect(app.showBalance()).toEqual("0.00");
  });

  it("displays balance after credits and debits", () => {
    const app = new App();
    app.credit(1000);
    app.debit(700);
    expect(app.showBalance()).toEqual("300.00");
  });

  it("displays error message if insufficient funds", () => {
    const app = new App();
    app.credit(1000);
    expect(app.debit(1200)).toEqual("Insufficient funds");
  });

  it("displays error message if non-number given", () => {
    const app = new App();
    app.credit(1000);
    expect(app.debit("money")).toEqual("Incorrect format type");
  });

  it("returns statement header", () => {
    const app = new App();
    app.credit(500);
    app.credit(400);
    app.debit(250);
    expect(app.showStatement()).toEqual(
      `   date    ||  credit  ||  debit   || balance\n${new Date().toLocaleDateString()} ||          ||  250.00  || 650.00\n${new Date().toLocaleDateString()} ||  400.00  ||          || 900.00\n${new Date().toLocaleDateString()} ||  500.00  ||          || 500.00\n`
    );
  });
});
