const Account = require("./account");

class App {
  constructor() {
    this.account = new Account();
  }

  deposit(amount) {
    this.account.makeDeposit(amount);
  }

  withdraw(amount) {
    this.account.makeWithdrawal(amount);
  }

  showDeposits() {
    return this.account.deposits;
  }

  showWithdrawals() {
    return this.account.withdrawals;
  }
}

module.exports = App;
