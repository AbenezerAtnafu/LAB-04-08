function Bank() {
  this.deposit = function (user, amount) {
    // update balance
    const currentBalance = user.getBalance() + parseInt(amount);
    user.setBalance(currentBalance);
    return user.getBalance();
  };
  this.withDraw = function (user, amount) {
    const currentBalance = user.getBalance();
    if (currentBalance < parseInt(amount)) return false;
    user.setBalance(currentBalance - parseInt(amount));
    return true;
  };
  this.transfer = function (user, receiver, amount) {
    const senderBalance = user.getBalance();
    const receiverBalance = user.getBalance();
    if (senderBalance < parseInt(amount)) return false;
    const balance = receiverBalance + parseInt(amount);
    const remainingBalance = senderBalance - parseInt(amount);
    receiver.setBalance(balance);
    user.setBalance(remainingBalance);
    return true;
  };
}
