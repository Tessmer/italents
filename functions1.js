function Account(accountNumber, agency, cpfHolder, balance) {
  (this.accountNumber = accountNumber),
    (this.agency = agency),
    (this.cpfHolder = cpfHolder),
    (this.balance = balance),
    (this.deposit = function (value) {
      this.balance += value;
      return `Saldo atual: R$${this.balance}`;
    }),
    (this.toWithdraw = function (value) {
      if (this.balance < value) {
        return `R$${value} é maior que o saldo disponível.`;
      } else {
        this.balance -= value;
        return `Saldo atual: R$${this.balance}. Valor sacado: R$${value}`;
      }
    });
}

module.exports = {
  Account,
};
