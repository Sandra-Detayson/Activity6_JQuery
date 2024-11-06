function displayName(name = null) {
   return name;
}

function computeTwoNumbers(num1, num2) {
  return num1 + num2;
}

function confirmSubmission() {
  if (confirm("Do you really want to submit?")) {
    alert(computeTwoNumbers(12, 3));
  }
}

//FUNCTION TO COMPUTE 2 NUMBERS AND DISPLAY THE RESULT
function inputTwoNumbers() {
  var firstNumber = parseInt(prompt("Enter first number"));
  var secondNumber = parseInt(prompt("Enter second number"));
  alert(computeTwoNumbers(firstNumber, secondNumber));
}

//FUNCTION TO CHECK IF THE GRADE IS PASS OR FAIL
function checkGrade() {
  var grade = parseInt(prompt("Enter your grade"));
  if (grade >= 50) {
    alert("You passed");
  } else {
    alert("You failed");
  }
  //OTHER APPROACH
  // alert(grade >= 50 ? "You passed" : "You failed");
}


function ComputeGrade(){
  var totalItem = parseInt(prompt("Enter Total Item: "));
  var totalScore = parseInt(prompt("Enter Total Score:"));
  var result = formula(totalItem, totalScore);

  alert(result + " " + checkResult(result));
}

function formula(totalItem, totalScore) {
  return -4 * (totalScore / totalItem) + 5;
}

function checkResult(grade){
 
  //TERNARY OPERATOR
  return grade > 3.0 ? "You failed" : "You passed";

}






function loopNumbers(){
  var loop = prompt("Enter a number to loop to: ");

  for (var i = 1; i <= loop; i++) {
    document.write(i + "<br>");
  }
}























// //DISPLAY NAME
// function displayName(name) {
//   document.write(name);
// }
// //BUTTON ALERT
// function buttonAlert() {
//   alert("You clicked the button!");
// }
// function changeColor() {
//   document.getElementById("color").style.color = "red";
// }
// function productOfTwoNumbers(firstNumber, secondNumber, outputDisplay) {
//     var product = firstNumber * secondNumber;
//     document.getElementById(outputDisplay).innerHTML = product;

// }
// function fullname(fname, namedisplay){
//     document.getElementsByClassName(namedisplay)[0].innerHTML = fname;

// }

