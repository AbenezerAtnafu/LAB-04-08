const abene = new User("Abene", 1234, 20000);
const semere = new User("Semere", 456, 10);
const fre = new User("Fre", 8895, 24000);

const users = [abene, semere, fre];
const bank = new Bank();

let loggedInUser;

const getUser = function (accountNumber) {
  return users.find(function (user) {
    return user.accountNumber == accountNumber;
  });
};

function checkBalance() {
  alert(
    `Dear ${loggedInUser.getName()}, your current balance is ${loggedInUser.getBalance()}`
  );
}

function transfer() {
  const receiverNumber = prompt("Enter receiver's account number: ");
  const receiver = getUser(receiverNumber);
  if (receiver) {
    const amount = prompt(
      `Enter the amount that you want to transfer to : ${receiver.getName()}`
    );
    const transfer = bank.transfer(loggedInUser, receiver, amount);
    if (transfer) {
      alert(
        `You transferred ${amount} birr for ${receiver.getName()} and your remaining balance is ${receiver.getBalance()}.`
      );
    } else {
      alert(
        `Insufficient Balance. Your Balance is ${loggedInUser.getBalance()}`
      );
    }
  } else {
    alert(`There is no such kind of account number. ${receiverNumber}`);
  }
}

function withDraw() {
  const amount = prompt("Enter the amount you want to withdraw: ");
  const leftBalance = bank.withDraw(loggedInUser, loggedInUser.getBalance());
  if (leftBalance) {
    alert(
      `Your account has ben debited ${amount} and your current balance is ${loggedInUser.getBalance()}`
    );
  } else {
    alert(`Insufficient Balance. Your Balance is ${loggedInUser.getBalance()}`);
  }
}

function deposit() {
  const amount = prompt(
    `Enter the amount you want to withdraw: (Your balance is ${loggedInUser.getBalance()})`
  );
  const currentBalance = bank.deposit(loggedInUser, amount);
  alert(
    `Dear ${loggedInUser.getName()} Your account has been credited ${amount} and your balance is ${loggedInUser.getBalance()}`
  );
}

const loggedIn = function (user) {
  const choice = prompt(
    `Welcome ${user.getName()} Enter your choice. \n 1. Check your balance \n 2. Transfer to other account \n 3. Withdraw \n 4. Deposit`
  );
  switch (choice) {
    case "1":
      checkBalance();
      break;
    case "2":
      transfer();
      break;
    case "3":
      withDraw();
      break;
    case "4":
      deposit();
      break;
  }
};

(function () {
  const accountNumber = prompt(
    "Hint: Use this Account numbers \n 1. 1234 \n 2. 456 \n 3. 8895 \n Login page \n Enter your account number"
  );
  const user = getUser(accountNumber);
  if (user) {
    loggedInUser = user;
    loggedIn(loggedInUser);
  } else {
    alert(`Account number "${accountNumber}" number doesn't exist.`);
  }
})();
