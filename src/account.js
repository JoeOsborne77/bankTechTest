class Account {
  constructor() {
    this.transactions = [];
  }

  makeDeposit(amount) {
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      val: amount,
      transcationType: "Deposit",
    });
  }

  makeWithdrawal(amount) {
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      val: amount,
      transcationType: "Withdrawal",
    });
  }
}

module.exports = Account;
