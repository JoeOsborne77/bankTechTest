class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  creditAccount(amount) {
    if (isNaN(amount) === true) {
      return "Incorrect format type";
    } else {
      this.balance += amount;
      this.transactions.push({
        date: new Date().toLocaleDateString(),
        credit: amount,
        debit: "   ",
        transcationType: "credit",
        balance: this.balance,
      });
    }
  }

  debitAccount(amount) {
    if (isNaN(amount) === true) {
      return "Incorrect format type";
    }
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        date: new Date().toLocaleDateString(),
        credit: "   ",
        debit: amount,
        transcationType: "debit",
        balance: this.balance,
      });
    } else return "Insufficient funds";
  }
}

module.exports = Account;
