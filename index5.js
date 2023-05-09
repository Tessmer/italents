const { Account } = require("./functions1");

const newAccount = new Account(12345, "0001", "123.123.123-12", 100);

console.log(newAccount.balance);

newAccount.deposit(250);
console.log(newAccount.balance);

const message = newAccount.toWithdraw(500);
console.log(message);
