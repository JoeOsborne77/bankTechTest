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
});
