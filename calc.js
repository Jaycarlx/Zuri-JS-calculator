let FirstNo = prompt("Enter First Number", "");
let SecondNo = prompt("Enter Second Number", "");
let operator = prompt(
  "Choose Operator :  1) Plus (+)    |   2) Minus (-)   |    3) Multiply (*)    |    4) Divide (/)  |    5) Plus (%)",
  ""
);
let totalAdd = Number(FirstNo) + Number(SecondNo);
let totalSub = Number(FirstNo) - Number(SecondNo);

if (operator == "1" || operator == "+") {
  text = "Your answer is " + totalAdd;
} else if (operator == "2" || operator == "-") {
  text = "Your answer is " + totalSub;
} else if (operator == "3" || operator == "*") {
  text = "Your answer is " + FirstNo * SecondNo;
} else if (operator == "4" || operator == "/") {
  text = "Your answer is " + FirstNo / SecondNo;
} else if (operator == "5" || operator == "%") {
  text = "Your answer is " + (FirstNo % SecondNo);
} else {
  text = "Enter a valid input";
}
alert(text);
