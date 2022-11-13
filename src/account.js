class Account {
  constructor() {
    this.deposits = [];
  }
  makeDeposit(amount) {
    this.deposits.push(amount);
  }

  showDeposits() {
    return this.deposits;
  }
}

module.exports = Account;
