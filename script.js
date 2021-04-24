var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacters = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "\\",
  "^",
  "_",
  "{",
  "}",
  "|",
  "~",
  '"',
];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passwordBank = [];
var finalPassword = [];

//Starts the prompts.  First it checks the if the length is appropriate, then it continues to the next function
function startPassword() {
  alert("Let's make a password!!");
  var passwordLength = prompt("How many characters long?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    continuePassword("lowercase", lowerCaseLetters);
    continuePassword("uppercase", upperCaseLetters);
    continuePassword("special characters", specialCharacters);
    continuePassword("numbers", numericCharacters);
    grabRandomElement(passwordLength);
  } else {
    alert("Error, password must be between 8 and 128 characters long.");
    startPassword();
  }
}

//checks user response, and adds the character type to the main array if they chose it.
function continuePassword(type, arr) {
  var lowerCaseConfirm = confirm(
    "Would you like " + type + " letters in your password?"
  );
  if (lowerCaseConfirm == true) {
    for (var i of arr) {
      passwordBank.push(i);
    }
    return;
  }
  return;
}

//randomly choose characters from the passwordBank and add each randomly generated character to a new array until it reaches the length of passwordLenth
function grabRandomElement(x) {
  for (var i = 0; i < x; i++) {
    randomValue = passwordBank[Math.floor(Math.random() * passwordBank.length)];
    finalPassword.push(randomValue);
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = startPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
