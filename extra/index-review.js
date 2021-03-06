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
    this._equalsTriggered = false;
  }

  equalsMethod(input) {
    // const test = "3+5";
    // const testResult = eval(test);
    // this._test = testResult.toString();
    // console.log(this._test);

    const result = eval(input);
    this._result = result.toString();
    return this._result;
  }

  toggleEquals() {
    this._equalsTriggered = !this._equalsTriggered;
  }

  // equals(expression) {
  //   const evalResult = eval(expression);
  //   this.setHistory = evalResult.toString();
  //   return evalResult;

  clearMethod() {
    console.log("clear called");
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
  if (key.innerText !== "=" && key.innerText !== "M" && key.innerText !== "C") {
    key.addEventListener("click", (e) => {
      if (myCalc._equalsTriggered) {
        myCalc.toggleEquals();
        myCalc.clearMethod();
      }
      print(e.target.innerText);
    });
  } else if (key.innerText === "=") {
    key.addEventListener("click", (e) => {
      console.log("EQUALS!");
      const screenShows = calculatorScreen.innerText;
      myCalc.equalsMethod(screenShows);
      myCalc.toggleEquals();
      printResult(myCalc._result);
      myCalc.historyMethod(myCalc._result);
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
  .addEventListener("click", () => myCalc.clearMethod());

// memory event
document.querySelector("#calculator .memory").addEventListener("click", () => {
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
