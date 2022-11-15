class Statement {
  constructor(account) {
    this.account = account;
    this.statement = "     date    ||  credit   ||  debit  || balance\n";
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

module.exports = Statement;
