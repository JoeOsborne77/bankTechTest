# APPROACH

I used two classes for this problem. An Account class to handle deposits, withdrawals and keeping track of current balance. Plus a Statement class to handle everything in regards to display (displaying balance, transactions, statements etc.). I used key value pairs / JS objects to ensure each transaction was recorded with date, up to date balance, value of the transaction and transaction type. This enabled a lot of mobility when needing to manipulate the data for the statement. I made use of dependency injection for testing which proved effective. Given more time I would focus more on creating more mock tests and possibly a third App class with UI. Throughout the process I tried to adhere to the five SOLID deisgn principles where necessary (no UI, no parent / child classes). 

### SINGLE RESPONSIBILITY PRINCIPLE
- Both my classes have one responsibility; Account class to handle input (i.e. transactions) and Statement class to handle output (i.e. displays) 

#### OPEN / CLOSED PRINCIPLE
- Exisiting code didn't have to be modified for extension. This meant adding more methods was straight forward and easy

#### LISKOV SUBSTITUION PRINCIPLE 
- N/A no parent / child class relationships

#### INTERFACE SEGREGATION PRINCICPLE 
- N/A no UI interface

#### DEPENDENCY INVERSION PRINCIPLE 
- High level modules are not dependent on low level modules. I used dependency injection to inject the Account class into the Statement class.

# SETUP INSTRUCTIONS
```
1. git clone https://github.com/JoeOsborne77/bankTechTest

2. Setup environment to use node latest version with;

$ nvm use node

3. Add jest to dependencies with;

$ npm add jest

4. Install dependencies with;

$ NPM install

5. Run tests with;

$ jest

```

# RUN IN NODE REPL
```
const Statement = require('./src/statement')
const Account = require('./src/account')
const account = new Account
const statement = new Statement(account)
account.creditAccount(1000)
account.creditAccount(2000)
account.debitAccount(500)
statement.showStatement()

```

<img src="https://github.com/JoeOsborne77/bankTechTest/blob/main/img/REPL3.gif" width="600" height="400" />

# RESULTS

<img src="https://github.com/JoeOsborne77/bankTechTest/blob/main/img/screenshot-REPL.jpg" width="400" height="500" />

# TEST COVERAGE - 100%

<img src="https://github.com/JoeOsborne77/bankTechTest/blob/main/img/testcoverage.jpg" width="600" height="300" />


