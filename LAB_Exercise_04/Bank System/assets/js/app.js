const abene = new User("Abene", 12345, 20000, true);
const semere = new User("Semere", 67890, 10);
const fre = new User("Fre", 88955, 24000);

const users = [abene, semere, fre];
const bank = new Bank();

let loggedInUserAcc;
let choice = "";

const getUser = function (accountNumber) {
  return users.find(function (user) {
    return user.accountNumber == parseInt(accountNumber);
  });
};

/**
 * @param accountNumber
 * @return User
 */

const checkAdmin = function (accountNumber) {
  const user = getUser(accountNumber);
  if (user) {
    return user.getIsAdmin();
  }
};

const doesAccountNumberExist = function (accountNumber) {
  let exist = false;
  users.forEach(function (user) {
    if (user.accountNumber === accountNumber) exist = true;
  });
  return exist;
};

const createUser = function () {
  let accountNumber;
  let found;
  let initialAmount;
  const name = prompt("Enter your name: ");
  do {
    initialAmount = prompt("Enter your initial amount: ");
  } while (isNaN(initialAmount));
  do {
    accountNumber = parseInt(Math.random() * (999999 - 9999 + 1) + 9999); // to get random 4-6 digit numbers
    found = doesAccountNumberExist(accountNumber);
  } while (found);
};

/**
 *  Users function
 **/

function checkBalance() {
  alert(
    `Dear ${loggedInUserAcc.getName()}, your current balance is ${loggedInUserAcc.getBalance()}`
  );
}

function transfer() {
  const receiverNumber = prompt("Enter receiver's account number: ");
  const receiver = getUser(receiverNumber);
  if (receiver) {
    const amount = prompt(
      `Enter the amount that you want to transfer to : ${receiver.getName()}`
    );
    const transfer = bank.transfer(loggedInUserAcc, receiver, amount);
    if (transfer) {
      alert(
        `You transferred ${amount} birr for ${receiver.getName()} and your remaining balance is ${receiver.getBalance()}.`
      );
    } else {
      alert(
        `Insufficient Balance. Your Balance is ${loggedInUserAcc.getBalance()}`
      );
    }
  } else {
    alert(`There is no such kind of account number. ${receiverNumber}`);
  }
}

function withDraw() {
  const amount = prompt(
    `Dear ${loggedInUserAcc.getName()} your balance is ${loggedInUserAcc.getBalance()} Enter the amount you want to withdraw: `
  );
  const leftBalance = bank.withDraw(loggedInUserAcc, amount);
  if (leftBalance) {
    alert(
      `Your account has ben debited ${amount} and your current balance is ${loggedInUserAcc.getBalance()}`
    );
  } else {
    alert(
      `Insufficient Balance. Your Balance is ${loggedInUserAcc.getBalance()}`
    );
  }
}

function deposit() {
  const amount = prompt(
    `Enter the amount you want to withdraw: (Your balance is ${loggedInUserAcc.getBalance()})`
  );
  const currentBalance = bank.deposit(loggedInUserAcc, amount);
  alert(
    `Dear ${loggedInUserAcc.getName()} Your account has been credited ${amount} and your balance is ${loggedInUserAcc.getBalance()}`
  );
}

/**
 *  Admins function
 **/
const adminCheckBalance = function () {
  const accountNumber = prompt("Enter customer's bank account: ");
  const user = getUser(accountNumber);
  if (user) {
    alert(`${user.getName()}'s current balance is ${user.getBalance()}`);
  }
};

const adminTransfer = function () {
  let sender;
  let receiver;
  let check = false;

  // checking user
  do {
    const senderAccount = parseInt(prompt("Enter sender's address: "));
    if (isNaN(senderAccount)) {
      check = true;
      alert("Please Provide correct account number");
      continue;
    } else {
      check = false;
    }
    let user = getUser(senderAccount);
    if (user) {
      sender = user;
      check = false;
    } else {
      check = true;
      alert("Account Number doesn't exist. Try again!");
    }
  } while (check);

  do {
    const receiverAccount = parseInt(prompt("Enter receiver's address:"));
    // checking
    if (isNaN(receiverAccount)) {
      check = true;
      alert("Please Provide correct account number");
      continue;
    } else {
      check = false;
    }
    let user = getUser(receiverAccount);
    if (!user) {
      check = true;
      alert("Account Number doesn't exist. Try again!");
    } else if (user) {
      receiver = user;
      check = false;
    }
    if (receiver.getAccountNumber() === sender.getAccountNumber()) {
      check = true;
      alert("Can't make transfer between same accounts.");
    } else {
      check = false;
    }
  } while (check);

  const amount = prompt(
    `Enter the amount that you want to transfer to : ${receiver.getName()}`
  );
  let transfer = bank.transfer(sender, receiver, amount);
  do {
    if (transfer) {
      alert(
        `${sender.getName()} transferred ${amount} birr for ${receiver.getName()} and your remaining balance is ${sender.getBalance()}.`
      );
    } else {
      transfer = false;
      alert(`Insufficient Balance. Your Balance is ${sender.getBalance()}`);
    }
  } while (transfer);
};

const adminWithdraw = function () {
  let user;
  let accountNumber;
  do {
    accountNumber = prompt("Enter customer's bank account: ");
    user = getUser(accountNumber);
    if (!user) alert("There is no account. Try again.");
  } while (!user);

  const amount = prompt(
    `This account belongs to ${user.getName()} and its balance is ${user.getBalance()} Enter the amount you want to withdraw: `
  );

  const leftBalance = bank.withDraw(user, amount);
  if (leftBalance) {
    alert(
      `The account has ben debited ${amount} and your current balance is ${user.getBalance()}`
    );
  } else {
    alert(`Insufficient Balance. The current Balance is ${user.getBalance()}`);
  }
};

const adminDeposit = function () {
  let user;
  let accountNumber;
  do {
    accountNumber = prompt("Enter customer's bank account or 1 to exit: ");
    user = getUser(accountNumber);
    if (accountNumber == "1") continue;
    if (!user) alert("There is no account. Try again.");
  } while (!user);

  const amount = prompt(
    `This account belongs to ${user.getName()} and its balance is ${user.getBalance()} Enter the amount you want to withdraw: `
  );
  bank.deposit(user, amount);

  alert(
    `${user.getName()} credited ${amount} br and it's current balance is ${user.getBalance()}`
  );
};

/**
 *  Starter function
 **/
const loggedInUser = function (user) {
  do {
    choice = prompt(
      `Welcome ${user.getName()} Enter your choice. \n 1. Check your balance \n 2. Transfer to other account \n 3. Withdraw \n 4. Deposit \n 5. Logout`
    );
    switch (choice) {
      case "1":
        checkBalance();
        console.log(choice);
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
  } while (choice !== "5");
};

const loggedInAdmin = function (user) {
  do {
    choice = prompt(
      `Welcome ${user.getName()} Enter your choice. \n 1. Check balance \n 2. Transfer from one account to other account \n 3. Withdraw \n 4. Deposit \n 5. Logout`
    );
    switch (choice) {
      case "1":
        adminCheckBalance();
        break;
      case "2":
        adminTransfer();
        break;
      case "3":
        adminWithdraw();
        break;
      case "4":
        adminDeposit();
        break;
    }
  } while (choice !== "5");
};

(function () {
  let accountNumber;
  do {
    accountNumber = prompt(
      "Hint: Use this Account numbers \n 1. 12345(Admin) \n 2. 67890 \n 3. 88955 \n 4. To Exit \n \n Login page \n Enter your account number"
    );
    if (accountNumber === "4") continue;
    const user = getUser(accountNumber);
    if (user) {
      if (user.getIsAdmin()) {
        //const choice = prompt("Choose account: ")
        loggedInAdmin(user);
      } else {
        loggedInUserAcc = user;
        loggedInUser(loggedInUserAcc);
      }
    } else {
      alert(`Account number "${accountNumber}" number doesn't exist.`);
    }
  } while (accountNumber !== "4" || choice === "5");
})();
