const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numerics = "0123456789";
const symbols = "!@#$%^&*()_+-{}:<>]/|[.,";

const allChars = upperCase + lowerCase + numerics + symbols;

function getPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numerics[Math.floor(Math.random() * numerics.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyFunc() {
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordBox.value);
}
