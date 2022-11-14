# USER STORIES

1. As a user I want to be able to make a deposit

2. As a user I want to be able to make a withdrawal

3. As a user I want to be able to print my bank statement, which should include date, credit, debit and balance

# DESIGN CLASS INTERFACES

class App = () => {

}

class Deposit extends App {
this.deposits = []

makeDeposit(amount){
deposits.push(amount)
(new Date()).toLocaleDateString('en-UK');

}

}

class Withdraw extends App {

}

class Display extends App {

}

# WRITE TESTS

const Display = require('./display')
before each do
const display = new Display

describe('when user clicks display', () => {
const display = new Display
it('shows the current date', () => {
expect(display.showDisplay).toInclude(13/11/202) })
})

describe('when user makes a deposit ', () => {
const deposit = new Deposit
deposit.makeDeposit(500)
it('shows the current balance', () => {
expect(display.showDisplay).toInclude(500) })
})

describe('when user makes a deposit ', () => {
const deposit = new Deposit
deposit.makeDeposit(500)
it('shows the current balance', () => {
expect(display.showDisplay).toInclude(500) })
})

# IMPLEMENT BEHAVIOUR
