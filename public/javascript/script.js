// Criteria Checkboxes
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const specialCharacters = document.getElementById('special-characters');

// Criteria Array

const uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseArr = uppercaseArr.map(letter => letter.toLowerCase());
const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharArr = ['"', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~'];


// Generate Password

let generatePasswordText = '';

function generatePassword() {

  return uppercaseArr.concat(lowercaseArr).concat(numbersArr).concat(specialCharArr);
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
