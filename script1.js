const generateButton = document.getElementById("generateButton");
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const passwordInput = document.getElementById("password");

generateButton.addEventListener("click", generatePassword);

function generatePassword() {
  const length = +lengthInput.value;
  const includeUppercase = uppercaseInput.checked;
  const includeNumbers = numbersInput.checked;
  const includeSymbols = symbolsInput.checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+=<>?";

  let chars = lowercaseChars;
  if (includeUppercase) chars += uppercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  passwordInput.value = password;
}
