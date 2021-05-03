// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Create a function that checks if the string is a Palindrome
// Hint: Palindrome is a word that is the same backwords
// Ex: "racecar" -> "racecar"

const isPalindrome = string => {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  if (reversed === string) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("madam"));
