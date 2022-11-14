const Account = require("./account");

class App {
  constructor() {
    this.account = new Account();
  }

  deposit(amount) {
    this.account.makeDeposit(amount);
  }

  withdraw(amount) {
    if (this.showBalance() >= amount) {
      this.account.makeWithdrawal(amount);
    } else return "Insufficient funds";
  }

  showBalance() {
    let depositsTotal = 0;
    let withdrawalsTotal = 0;
    const deposits = [];
    const withdrawals = [];

    this.account.transactions.map((tran) => {
      if (tran.transcationType === "Deposit") {
        deposits.push(tran.val);
      }
      if (tran.transcationType === "Withdrawal") {
        withdrawals.push(tran.val);
      }
    });

    deposits.forEach((num) => (depositsTotal += num));
    withdrawals.forEach((num) => (withdrawalsTotal += num));

    return (depositsTotal -= withdrawalsTotal);
  }

  showTransactions() {
    return this.account.transactions;
  }

  showStatement() {
    const header = "date       || credit  || debit  || balance  ";
  }
}

module.exports = App;
