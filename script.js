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

// Write password to the #password input
// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;
function writePassword() {
  alert("Let's make a password!!");
  var passwordLength = prompt("How many characters long?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCaseConfirm = confirm(
      "Would you like lowercase letters in your password?"
    );

    continuePassword();
  } else {
    alert("Error, password must be between 8 and 128 characters long.");
    writePassword();
  }
}

function continuePassword() {
  if (writePassword.lowerCaseConfirm) {
    Array.prototype.push.apply(finalPassword, lowerCaseLetters);
    var upperCaseConfirm = confirm(
      "Would you like uppercase letters in your password?"
    );
  } else {
    alert("yousuck");
  }
}

writePassword();
console.log(finalPassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
