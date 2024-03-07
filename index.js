const radioNumber = document.getElementById("numbers");
const radioUpper = document.getElementById("uppercase");
const radioLower = document.getElementById("lowercase");
const radioCharacter = document.getElementById("characters");
const myInput = document.getElementById("myInput");
const finalResult = document.getElementById("result");
const button = document.getElementById("generateBtn");

//console.log(passwordLength);

// passwordGenerator(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeCharacters
// );

button.onclick = function () {
  let passwordLength = myInput.value;
  passwordLength = Number(passwordLength);

  const includeLowercase = radioLower.checked;
  console.log(includeLowercase);
  const includeUppercase = radioUpper.checked;
  const includeNumbers = radioNumber.checked;
  const includeCharacters = radioCharacter.checked;

  let password = passwordGenerator(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeCharacters
  );

  finalResult.textContent = `${password}`;
};

function passwordGenerator(
  passLength,
  lowerCase,
  uppercase,
  numbers,
  characters
) {
  let lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbersValues = "0123456789";
  let charactersValues = "!@#$%^&*";

  let allowedCharacters = "";
  let finalPassword = "";

  allowedCharacters += lowerCase ? lowercaseValues : "";
  allowedCharacters += uppercase ? uppercaseValues : "";
  allowedCharacters += numbers ? numbersValues : "";
  allowedCharacters += characters ? charactersValues : "";

  //console.log(allowedCharacters);

  if (passLength <= 0) {
    return `Invalid password. Password must be atleast one.`;
  }
  //if (allowedCharacters.length === 0)
  if (allowedCharacters.length === 0) {
    return `Invalid password. choose atleast one option.`;
  }

  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    finalPassword += allowedCharacters[randomIndex];
  }

  return finalPassword;
}
