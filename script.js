// enter button
let bmiAnswerButton = document.querySelector("#bmiAnswerButton");
//  height input
let height = document.querySelector("#height");
// weight input
let weight = document.querySelector("#weight");
// When the button is clicked, the getvalue function is executed
bmiAnswerButton.addEventListener("click", getvalue);
let bmi 
// A function that performs bmi calculations
function getvalue() {
  // By creating a variable and giving = parseFloat, we convert the value that the user enters into a number
  let bmiHeight = parseFloat(height.value);
  // By creating a variable and giving = parseFloat, we convert the value that the user enters into a number
  let bmiWeight = parseFloat(weight.value);
}

function results() {
  // By creating a variable, we multiply the height to the power of 2 and divide it by the weight to get the body mass index.

  bmi = weight.value / (height.value * height.value).toFixed(4).slice(4);
}
