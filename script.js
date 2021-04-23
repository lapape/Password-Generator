// Assignment Code
var generateBtn = document.querySelector("#generate");

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
var finalPassword = [];

function writePassword() {
  alert("Let's make a password!!");
  var passwordLength = prompt("How many characters long?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    continuePassword("lowercase", lowerCaseLetters);
    continuePassword("uppercase", upperCaseLetters);
    continuePassword("special characters", specialCharacters);
    continuePassword("numbers", numericCharacters);
  } else {
    alert("Error, password must be between 8 and 128 characters long.");
    writePassword();
  }
}

function continuePassword(type, arr) {
  var lowerCaseConfirm = confirm(
    "Would you like " + type + " letters in your password?"
  );
  if (lowerCaseConfirm == true) {
    for (var i of arr) {
      finalPassword.push(i);
    }
    return;
  }
  return;
}

writePassword();
console.log(finalPassword);
// Write password to the #password input
// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
