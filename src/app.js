const Account = require("./account");

class App {
  constructor() {
    this.account = new Account();
    this.statement = "     date    ||  credit   ||  debit  || balance\n";
  }

  credit(amount) {
    if (isNaN(amount) === true) {
      return "Incorrect format type";
    }
    this.account.creditAccount(amount);
  }

  debit(amount) {
    if (isNaN(amount) === true) {
      return "Incorrect format type";
    }
    if (this.showBalance() >= amount) {
      this.account.debitAccount(amount);
    } else return "Insufficient funds";
  }

  showBalance() {
    return this.account.balance.toFixed(2);
  }

  showStatement() {
    this.statementFormatting();
    return this.statement;
  }

  showTransactions() {
    return this.account.transactions;
  }

  statementFormatting() {
    const reverseStatement = [...this.account.transactions].reverse();
    reverseStatement.map((transaction) => {
      this.statement += `${transaction.date} ||  ${
        transaction.credit == 0
          ? "       "
          : Number(transaction.credit).toFixed(2)
      }  ||  ${
        transaction.debit == 0 ? "      " : Number(transaction.debit).toFixed(2)
      } || ${transaction.balance.toFixed(2)}\n`;
    });
  }
}

module.exports = App;
