function User(name, accountNumber, balance) {
  this.name = name;
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.getName = function () {
    return this.name;
  };
  this.getAccountNumber = function () {
    return this.accountNumber;
  };
  this.getBalance = function () {
    return this.balance;
  };
  this.setBalance = function (amount) {
    this.balance = amount;
  };
}
