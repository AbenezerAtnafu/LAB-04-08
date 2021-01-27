let add = function () {
  const list = prompt("Enter the numbers like this 1 + 22").split("+");
  let sum = 0;
  list.forEach(function (num) {
    sum += parseInt(num);
  });
  alert(`The sum is ${sum}`);
};

let sub = function () {
  const list = prompt("Enter the numbers like this 1 + 22").split("+");
  let sub = list[0];
  list.forEach(function (num) {
    sub -= parseInt(num);
  });
  alert(`The difference is ${sub}`);
};

let multiply = function () {
  const list = prompt("Enter the numbers like this 1 + 22").split("+");
  let multiply = list[0];
  list.forEach(function (num) {
    multiply += parseInt(num);
  });
  alert(`The result is ${multiply}`);
};

let divide = function () {
  const list = prompt("Enter the numbers like this 1 / 22").split("/");

  if (list[1] === 0) {
    alert("Denominator can't be zero");
    return;
  } else {
    alert((list[0] / list[1]).toFixed(2));
  }
};

let max = function () {
  const list = prompt("Enter the numbers like this 1,22").split(",");
  alert(
    `The max is ${list.reduce(function (a, b) {
      return Math.max(a, b);
    })}`
  );
};

let min = function () {
  const list = prompt("Enter the numbers like this 1,22").split(",");
  alert(
    `The min is ${list.reduce(function (a, b) {
      return Math.min(a, b);
    })}`
  );
};

let average = function () {
  const list = prompt("Enter the numbers like this 1,22").split(",");
  alert(
    `The average is ${
      list.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 0) / list.length
    }`
  );
};

(function () {
  let check = true;
  do {
    let user = prompt(
      "Enter the service you want! \n 1.Add \n 2.Sub \n 3.Multiply \n 4.Division \n 5.Max \n 6.Min \n 7.Average"
    );

    switch (user) {
      case "1":
        add();
        break;
      case "2":
        sub();
        break;
      case "3":
        multiply();
        break;
      case "4":
        divide();
        break;
      case "5":
        max();
        break;
      case "6":
        min();
        break;
      case "7":
        average();
        break;
      case "8":
        check = false;
        break;
    }
  } while (check);
})();
