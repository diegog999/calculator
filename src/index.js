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
    const result = eval(input);
    this._result = result.toString();
    console.log(this._result);
    return this._result;
  }

  clearMethod() {
    console.log("clear called");
    calculatorScreen.innerHTML = "";
  }

  historyMethod(input) {
    this._historyArray = [];
    this._historyArray.push(input);
  }

  equalsToggle() {
    console.log("toggle called");
    this._equalsTriggered = !this._equalsTriggered;
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
  if (
    key.innerText !== "=" &&
    key.innerText !== "M" &&
    key.innerText !== "R" &&
    key.innerText !== "C"
  ) {
    key.addEventListener("click", (e) => {
      //clears screen if = has been clicked before typing next
      if (myCalc._equalsTriggered) {
        myCalc.equalsToggle();
        myCalc.clearMethod();
      }
      print(e.target.innerText);
      console.log(e.target.innerText);
    });

    //equals event
  } else if (key.innerText === "=") {
    key.addEventListener("click", (e) => {
      console.log("EQUALS!");
      const screenShows = calculatorScreen.innerText;
      console.log(screenShows);
      myCalc.equalsMethod(screenShows);
      console.log(screenShows);
      printResult(myCalc._result);
      myCalc.equalsToggle();
      console.log(screenShows);
      console.log(myCalc._result);
    });
  }
  // clear event
  else if (key.innerText === "C") {
    key.addEventListener("click", () => myCalc.clearMethod());
  }

  // memory store event
  else if (key.innerText === "M") {
    key.addEventListener("click", () => {
      myCalc.historyMethod(calculatorScreen.innerText);
    });
  }

  // memory recall event
  else if (key.innerText === "R") {
    key.addEventListener("click", () => {
      console.log(myCalc._historyArray);
      print(myCalc._historyArray);
    });
  }
});
