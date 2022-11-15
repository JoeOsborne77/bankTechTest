# APPROACH

I used two classes for this problem. An Account class to handle deposits, withdrawals and keeping track of current balance. Plus a Statement class to handle everything in regards to display (displaying balance, transactions, statements etc.). I used key value pairs / JS objects to ensure each transaction was recorded with date, up to date balance, value of the transaction and transaction type. This enabled a lot of mobility when needing to manipulate the data for the statement. I made use of dependency injection for testing which proved effective. Given more time I would focus more on creating more mock tests and possible a third App class with UI.

# SETUP INSTRUCTIONS

1. Fork/clone repo

2. Setup environment to use node latest version with;

#### $ nvm use node

3. Add jest to dependencies with;

#### $ npm add jest

4. Install dependencies with;

#### $ NPM install

5. Run tests with;

#### $ jest

# RUN IN NODE REPL

<img src="https://github.com/JoeOsborne77/bankTechTest/blob/main/img/REPL2.gif" width="600" height="400" />

# RESULTS

<img src="https://github.com/JoeOsborne77/bankTechTest/blob/main/img/repl.jpg" width="400" height="500" />

# TEST COVERAGE - 100%

<img src="https://github.com/JoeOsborne77/bankTechTest/blob/main/img/testcoverage.jpg" width="600" height="300" />


