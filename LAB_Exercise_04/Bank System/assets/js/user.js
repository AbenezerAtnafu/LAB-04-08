function User(name, accountNumber, balance, isAdmin = false) {
  // properties
  this.name = name;
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.isAdmin = isAdmin;

  // getters
  this.getIsAdmin = function () {
    return this.isAdmin;
  };
  this.getName = function () {
    return this.name;
  };
  this.getAccountNumber = function () {
    return this.accountNumber;
  };
  this.getBalance = function () {
    return this.balance;
  };

  // setters
  this.setBalance = function (amount) {
    this.balance = amount;
  };
}
