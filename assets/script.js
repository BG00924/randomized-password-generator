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

// Instructions alert
window.alert("Welcome! To generate your randomized password, please, answer the following prompts then click the button!");
// Prompt to set length of desired password
var passwordLength = window.prompt("Enter a password length between 8 and 128.");
// Creates a loop to reprompt for password length if not within range
while(passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length is invalid. Please, try again.");
  var passwordLength = window.prompt("Enter a password length between 8 and 128.");
}
// Prompt to determine if lower case characters will be used
var confirmLowerCase = window.confirm("Would you like to include lower case characters in your password?");
// Prompt to determine if upper case characters will be used
var confirmUpperCase = window.confirm("Would you like to include upper case characters in your password?");
// Prompt to determine if special characters will be used
var confirmSpecialCharacters = window.confirm("Would you like to include special characters in your password?");
// Prompt to determine if numbers will be used
var confirmNumbers = window.confirm("Would you like to include numbers in your password?")
// Loop that forces at least one parameter to be used so that a password can actually be generated
while(confirmLowerCase === false && confirmUpperCase === false && confirmSpecialCharacters === false && confirmNumbers === false) {
  window.alert("Choose one or more criteria in order to generate a password.");
  var confirmLowerCase = window.confirm("Would you like to include lower case characters in your password?");
  var confirmUpperCase = window.confirm("Would you like to include upper case characters in your password?");
  var confirmSpecialCharacters = window.confirm("Would you like to include special characters in your password?");
  var confirmNumbers = window.confirm("Would you like to include numbers in your password?")
}

// Function to generate password
function generatePassword() {
  // Array created by merging critera arrays
  var passwordChars = []
    // conditional statements that merge criteria arrays into a single array in order to generate the password
    if (confirmLowerCase) {
      passwordChars = passwordChars.concat(lowerCase);
    };
    if (confirmUpperCase) {
      passwordChars = passwordChars.concat(upperCase);
    };
    if (confirmSpecialCharacters) {
      passwordChars = passwordChars.concat(specialCharacters);
    };
    if (confirmNumbers) {
      passwordChars = passwordChars.concat(number);
    }
    console.log(passwordChars);

}