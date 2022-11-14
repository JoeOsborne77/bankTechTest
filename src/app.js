const Account = require("./account");
class App {
  constructor() {
    this.account = new Account();
  }

  credit(amount) {
    this.account.creditAccount(amount);
  }

  debit(amount) {
    if (this.showBalance() >= amount) {
      this.account.debitAccount(amount);
    } else return "Insufficient funds";
  }

  showBalance() {
    return this.account.balance;
  }

  showStatement() {
    let header = "date       || credit || debit || balance\n";
    const statement = this.account.transactions.map((transaction) => {
      header += `${transaction.date} ||   ${transaction.credit}  ||  ${transaction.debit}  ||    ${transaction.balance}\n`;
    });

    return header;
  }

  showTransactions() {
    return this.account.transactions;
  }
}

module.exports = App;
