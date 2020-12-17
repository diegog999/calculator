/**
 * Create the class Caclculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 * - Getter : History
 */
class Calculator {
  constructor() {
    this._historyArray = [];
  }

  equalsMethod(input) {
    // const test = "3+5";
    // const testResult = eval(test);
    // this._test = testResult.toString();
    // console.log(this._test);

    const result = eval(input);
    this._result = result.toString();
    console.log(this._result);
    return this._result;
  }

  // equals(expression) {
  //   const evalResult = eval(expression);
  //   this.setHistory = evalResult.toString();
  //   return evalResult;

  clearMethod() {
    calculatorScreen.innerHTML = "";
  }

  historyMethod() {
    this._historyArray.push(calculatorScreen.innerHTML);
    console.log(this._historyArray);
  }
}

const myCalc = new Calculator([]);
const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below writes the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

function printResult(val) {
  calculatorScreen.innerHTML = val;
}

//this code listens to every key on the calculator and adds the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => {
      print(e.target.innerText);
      console.log(e.target.innerText);
    });
  } else {
    key.addEventListener("click", (e) => {
      console.log("EQUALS!");
      const screenShows = calculatorScreen.innerText;
      console.log(screenShows);
      myCalc.equalsMethod(screenShows);
      console.log(screenShows);
      printResult(myCalc._result);
      console.log(screenShows);
      myCalc.historyMethod(screenShows);
    });
  }
});

// {
//   key.addEventListener("click", (e) => {
//     const screenResult = calculator1.equals(calculatorScreen.innerText);
//     console.log(screenResult);
//   });
// }

// clear event
document
  .querySelector("#calculator .clear")
  .addEventListener("click", () => myCalc.clearMethod);

// memory event
document.querySelector("#calculator .memory").addEventListener("click", () => {
  myCalc.clearMethod;
  printResult(myCalc._historyArray);
});

// Implement here the event when the = key is pressed

// document.querySelectorAll("#calculator span").forEach((key) => {
//   if (key.innerText == "=") {
//     key.addEventListener("click", (e) => {

//       console.log("EQUALS!");
//       myCalc.historyMethod(e.target.innerText);

//       printResult(e.target.innerText);
//       console.log(myCalc._historyArray);
//     });
//   }
