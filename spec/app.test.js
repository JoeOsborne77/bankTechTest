const App = require("../src/app");

describe("Given new account instance", () => {
  it("displays deposits", () => {
    const app = new App();
    app.deposit(700);
    expect(app.showDeposits()).toEqual([
      new Date().toLocaleDateString("en-UK"),
      700,
    ]);
  });

  it("displays withdrawals", () => {
    const app = new App();
    app.deposit(700);
    app.withdraw(350);
    app.withdraw(5);
    app.withdraw(50);
    app.withdraw(10);
    app.withdraw(10);

    expect(app.showWithdrawals()).toEqual([
      new Date().toLocaleDateString("en-UK"),
      350,
    ]);
  });

  it("displays balance", () => {
    const app = new App();
    app.deposit(700);
    expect(app.showBalance()).toEqual(700);
  });

  it("displays starting balance of 0", () => {
    const app = new App();
    expect(app.showBalance()).toEqual(0);
  });

  it("displays balance after deposits and withdrawals", () => {
    const app = new App();
    app.deposit(1000);
    app.withdraw(700);
    expect(app.showBalance()).toEqual(300);
  });

  it("displays error message if insufficient funds", () => {
    const app = new App();
    app.deposit(1000);
    app.withdraw(1200);
    expect(app.withdraw(1200)).toEqual("Insufficient funds");
  });

  it("returns statement header", () => {
    const app = new App();
    expect(app.showStatement(1200)).toEqual(
      "date       || credit  || debit  || balance"
    );
  });
});
