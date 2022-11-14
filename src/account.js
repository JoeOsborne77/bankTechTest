class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  creditAccount(amount) {
    this.balance += amount;
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      credit: amount,
      debit: "   ",
      transcationType: "credit",
      balance: this.balance,
    });
  }

  debitAccount(amount) {
    this.balance -= amount;
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      credit: "   ",
      debit: amount,
      transcationType: "debit",
      balance: this.balance,
    });
  }
}

module.exports = Account;
