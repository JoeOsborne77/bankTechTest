const App = require("../src/app");

describe("Given new account instance", () => {
  it("displays deposits", () => {
    const app = new App();
    app.deposit(700);
    expect(app.showTransactions()).toEqual([
      {
        date: "14/11/2022",
        transcationType: "Deposit",
        val: 700,
      },
    ]);
  });

  it("displays withdrawals", () => {
    const app = new App();
    app.deposit(700);
    app.withdraw(350);
    expect(app.showTransactions()).toEqual([
      {
        date: "14/11/2022",
        transcationType: "Deposit",
        val: 700,
      },
      {
        date: "14/11/2022",
        transcationType: "Withdrawal",
        val: 350,
      },
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

  // it("returns statement header", () => {
  //   const app = new App();
  //   app.deposit(500);
  //   app.deposit(400);
  //   app.withdraw(250);
  //   expect(app.showStatement()).toEqual(
  //     "date       || credit  || debit  || balance"
  //   );
  // });
});
