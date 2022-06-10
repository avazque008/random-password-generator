// Criteria Checkboxes
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const specialCharacters = document.getElementById('special-characters');
const length = document.getElementById('length');

// Criteria Array

const uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseArr = uppercaseArr.map(letter => letter.toLowerCase());
const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharArr = ['"', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~'];


// Generate Password Array

function generatePasswordArr() {

  let passwordArr = [];

  if (!lowercase.checked && !uppercase.checked && !numbers.checked && !specialCharacters.checked) {
    alert('Choose what to include in your password, please!');
    return;
  }

  if (lowercase.checked) {
    lowercaseArr.forEach(letter => passwordArr.push(letter));
  }

  if (uppercase.checked) {
    uppercaseArr.forEach(letter => passwordArr.push(letter));
  }

  if (numbers.checked) {
    numbersArr.forEach(letter => passwordArr.push(letter));
  }

  if (specialCharacters.checked) {
    specialCharArr.forEach(letter => passwordArr.push(letter));

  }

  return passwordArr;
};

// Generate Password
function generatePassword() {

  const criteriaArray = generatePasswordArr();

  if (criteriaArray) {
    let passwordLength = parseInt(length.value);
    let password = '';

    if (passwordLength < 8 || !passwordLength) {
      passwordLength = 8;
    } else if (passwordLength > 128) {
      passwordLength = 128;
    }

    for (let i = 0; i < passwordLength; i++) {
      let randIndex = Math.floor(Math.random() * criteriaArray.length);

      let randomLetter = criteriaArray[randIndex];

      password += randomLetter;
    }

    return password;
  } else {
    return 'Select a Criteria!'
  }
}

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
