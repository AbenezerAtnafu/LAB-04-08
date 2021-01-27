function Bank() {
  /**
   * @param {User} amount
   * @returns {integer}
   */
  this.deposit = function (user, amount) {
    // update balance
    const currentBalance = user.getBalance() + parseInt(amount);
    user.setBalance(currentBalance);
    return user.getBalance();
  };
  /**
   * @param {User} amount
   * @returns {boolean}
   */
  this.withDraw = function (user, amount) {
    const currentBalance = user.getBalance();
    if (currentBalance < parseInt(amount)) return false;
    user.setBalance(currentBalance - parseInt(amount));
    return true;
  };

  /**
   * @param {User} amount
   * @returns {boolean}
   */

  this.transfer = function (user, receiver, amount) {
    const senderBalance = user.getBalance();
    const receiverBalance = receiver.getBalance();
    if (senderBalance < parseInt(amount)) return false;

    const balance = receiverBalance + parseInt(amount);
    const remainingBalance = senderBalance - parseInt(amount);

    console.log(`${senderBalance} - sender's balance before update `);
    console.log(`${receiverBalance} - receiver's balance before update `);

    receiver.setBalance(balance);
    user.setBalance(remainingBalance);

    console.log(`${user.getBalance()} - sender's balance after update`);
    console.log(`${receiver.getBalance()} - receiver's balance after update`);
    return true;
  };
}
