// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for letters (upper and lower), special characters, and numbers
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "<", ">", "?","~", "@"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function to generate password
function generatePassword() {
  // Prompt to set length of desired password
  var passwordLength = window.prompt("Enter a password length between 8 and 128.");
  // Creates a loop to reprompt for password length if not within range
  while(passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length is invalid. Please, try again.");
    var passwordLength = window.prompt("Enter a password length between 8 and 128.");
  }
}