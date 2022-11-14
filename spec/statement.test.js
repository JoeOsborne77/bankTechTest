const Statement = require("../src/statement");
const Account = require("../src/account");

describe("Given new account instance", () => {
  it("displays balance", () => {
    const statement = new Statement();
    expect(statement.showDeposits(700)).toEqual([
      new Date().toLocaleDateString("en-UK"),
      700,
    ]);
  });
});
