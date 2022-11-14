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
        debit: "",
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
        debit: "",
        transcationType: "credit",
      },
      {
        balance: 350,
        credit: "",
        date: new Date().toLocaleDateString(),
        debit: 350,
        transcationType: "debit",
      },
    ]);
  });

  it("displays balance", () => {
    const app = new App();
    app.credit(700);
    expect(app.showBalance()).toEqual(700);
  });

  it("displays starting balance of 0", () => {
    const app = new App();
    expect(app.showBalance()).toEqual(0);
  });

  it("displays balance after credits and debits", () => {
    const app = new App();
    app.credit(1000);
    app.debit(700);
    expect(app.showBalance()).toEqual(300);
  });

  it("displays error message if insufficient funds", () => {
    const app = new App();
    app.credit(1000);
    app.debit(1200);
    expect(app.debit(1200)).toEqual("Insufficient funds");
  });

  xit("returns statement header", () => {
    const app = new App();
    app.credit(500);
    app.credit(400);
    app.debit(250);
    expect(app.showStatement()).toEqual(
      "date       || credit  || debit  || balance"
    );
  });
});
