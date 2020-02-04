/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = []
// Variable for store the correct random number 
let correctNumber = getRandomNumber() //this has to be global, before the function getRandomNumber() or it won't get called.


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
   
    }


//  * Functionality for playing the whole game
//  getElementById is an internal JS function. the value attribute allows us to get the value of the text the user types in.

function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess)
  displayHistory()
  }
 
 

// above what it has done is listened to the click that tells it to run the playGame function. It's getting the value of the input, andit's outputting through the console.log
/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
  if (numberGuess < correctNumber){ 
  showNumberBelow()
} else if (numberGuess > correctNumber) {showNumberAbove()}
  else {showYouWon()}
} 
//always remember to put parens after functions
// we turned the if else results into it's own function because it has its own purpose, which is to display the results. But each function is its own little world that doesn't know what variables that don't get defined there. It knows what the variable correctNumber is because it is listed globally at the top. Any function can understand that variable, but the function does not know numberGuess, so we pass it in as a parameter of the displayResult function. The variable numberGuess was defined in the function playGame. Before we created the function, we just had these in playGame as if else statements. It works the same way either way, but it's best to turn the if else into a function with a specific task.

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  correctNumber = getRandomNumber()
  document.getElementById("result").innerHTML = "";
  guesses =[]
  displayHistory()
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive), meaning that Math.random will never reach the number one, so we need to multiply it. Also it will rarely give whole numbers. When we only want numbers with no decimals, we need to use math.random with Math.floor. Always use a capital M or it will not be recognized.
function getRandomNumber(){
  return Math.floor((Math.random() * 100) + 1);
}// let randomNumber = Math.random(); //default is a random # between 0 and not ever quite reaching 1.
  // let largeNumber = randomNumber *100; //this moves the decimal over, allowing numbers zero to not quite 100.
  //let wholeNumber = Math.floor(Math.random() * 100 + 1);
 //this moves the decimal two places to allow numbers one to 100. We have to add the plus one, otherwise 100 would never actually be an option.
  
  // console.log(randomNumber) 
  // console.log(largeNumber)
  // console.log(wholeNumber)
  // the console log showed decimal numbers up to one for randomNumber and decimal numbers up to not quite 100 for largNumbers, and whole numbers up to 100 for wholenumbers each time the page was refreshed, Examples
//  first run
//  0.0507452716540322
//  30.70380839865814
//  6
// when refreshed:
// 0.4439899923726287
// 32.41965521761403
// 86

// when refreshed again:
// 0.9202824245543533
// 69.43935069818619
// 93

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  guesses.push(guess)//we created an empty array because we don't know what the guesses will be. We have the saveGuessHistory above in the playGame function, and that takes in the numberGuesses and then the push function just adds each new guess to an arrary. the console showed this during my test
console.log(guesses)
}
/*
["45"]
(2) ["45", "34"]
(3) ["45", "34", "25"]
(4) ["45", "34", "25", "20"]
(5) ["45", "34", "25", "20", "18"]
(6) ["45", "34", "25", "20", "18", "10"]
(7) ["45", "34", "25", "20", "18", "10", "15"]
<div class='alert alert-success' role='alert'>Awesome job, you got it!</div>
(8) ["45", "34", "25", "20", "18", "10", "15", "17"]
*/
/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length -1; // TODO
  let list = "<ul class='list-group'>";
  while (index >= 0){
    list += "<li class='list-group-item'>" +
    'You guessed ' + guesses[index] + "</li>";
    index -=1
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
  }



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won', text);
  console.log(dialog)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
