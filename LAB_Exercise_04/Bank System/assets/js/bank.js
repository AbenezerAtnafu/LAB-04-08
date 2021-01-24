function Bank() {
  this.deposit = function (user, amount) {
    // update balance
    const currentBalance = user.getBalance() + amount;
    user.setBalance(currentBalance);
    return user.getBalance();
  };
  this.withdraw = function (user, amount) {
    const currentBalance = user.getBalance();
    if (currentBalance < amount) return false;
    user.setBalance(currentBalance - amount);
    return true;
  };
  this.transfer = function (user, receiver, amount) {
    const senderBalance = user.getBalance();
    const receiverBalance = user.getBalance();
    if (senderBalance < amount) return false;
    const balance = receiverBalance + amount;
    const remainingBalance = senderBalance - amount;
    receiver.setBalance(balance);
    user.setBalance(remainingBalance);
    return true;
  };
}
