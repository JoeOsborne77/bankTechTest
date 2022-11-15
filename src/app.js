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
    return this.account.balance.toFixed(2);
  }

  showStatement() {
    let statement = "   date    ||  credit  ||  debit   || balance\n";

    const reverseStatement = [...this.account.transactions].reverse();
    reverseStatement.map((transaction) => {
      statement += `${transaction.date} ||  ${
        transaction.credit == 0
          ? "      "
          : Number(transaction.credit).toFixed(2)
      }  ||  ${
        transaction.debit == 0 ? "      " : Number(transaction.debit).toFixed(2)
      }  || ${transaction.balance.toFixed(2)}\n`;
    });

    return statement;
  }

  showTransactions() {
    return this.account.transactions;
  }
}

module.exports = App;
