let calcbmi = function (weight, height) {
  let bmi = weight / Math.pow(height, 2);
  return bmi.toFixed(2);
};

const rangebmi = function (bmi) {
  if (this.bmi <= 0) {
    return "bmi can't be under zero";
  } else if (this.bmi < 18.5) {
    return "UnderWeight";
  } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
    return "Normal";
  } else if (this.bmi >= 24.9 && this.bmi < 29.9) {
    return "OverWeight";
  } else {
    return "Obese";
  }
};

const error = function (input) {
  if (isNaN(input)) {
    return "Please Provide a number";
  } else if (input <= 0) {
    return "Can't be zero or negative numbers";
  }
  return false;
};

function main() {}

(function () {
  let weight = prompt("Your Weight in Kg  ? ");
  if (error(weight)) {
    alert(error(weight));
    return;
  }
  let height = prompt("Your Height in M  ? ");
  if (error(height)) {
    alert(error(height));
    return;
  }
  let bmi = calcbmi(weight, height);
  let status = rangebmi(bmi);
  alert(`Your BMI is ${bmi} and your are ${status}`);
})();
