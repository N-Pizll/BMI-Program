// enter button
let bmiAnswerButton = document.querySelector("#enterBtn"); // Corrected the button id
// height input
let height = document.querySelector("#Height"); // Corrected the input id
// weight input
let weight = document.querySelector("#Weight"); // Corrected the input id
// All calculations are put into this variable
let bmi;
// Any value that the user gives us is put into this variable
let result = document.getElementById("bmiResults"); // Corrected the div id

// This variable stores the description of the body mass index inside itself
let textresult = document.getElementById("bmitextresults");

// When the button is clicked, the getvalue function is executed
bmiAnswerButton.addEventListener("click", getvalue);

// A function that performs bmi calculations
function getvalue() {
  // By creating a variable and giving = parseFloat, we convert the value that the user enters into a number
  let bmiHeight = parseFloat(height.value);
  // By creating a variable and giving = parseFloat, we convert the value that the user enters into a number
  let bmiWeight = parseFloat(weight.value);
  // By creating a variable, we multiply the weight by 703 and divide it by the square of the height to get the body mass index.
  bmi = (bmiWeight / (bmiHeight * bmiHeight)).toFixed(4).slice(4);
  showResults();
}
// This function shows the values that the user needs
function showResults() {
  result.innerHTML += bmi;
  textresult.innerHTML += info(bmi);
}
// With this function, we apply the body mass index in a standard way
function info(nima) {
  console.log(bmi);
  let Weightindex;
  if (bmi < 18.5) {
    Weightindex = "کمبود وزن	از ۱۶ تا ۱۸٫۵";
  } else if (bmi <= 24.9) {
    Weightindex = "عادی	از ۱۸٫۵ تا ۲۵";
  } else if (bmi <= 29.9) {
    Weightindex = "اضافه وزن	از ۲۵ تا ۳۰";
  } else if (bmi <= 34.9) {
    Weightindex = "چاقی کلاس ۱	از ۳۰ تا ۳۵";
  } else if (bmi <= 39.9) {
    Weightindex = "چاقی کلاس ۲	از ۳۵ تا ۴۰";
  } else if (bmi >= 40) {
    Weightindex = "چاقی کلاس ۳	بیش از ۴۰";
  }
  return Weightindex;
}
