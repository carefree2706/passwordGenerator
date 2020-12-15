// Assignment Code
var passwordLength
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;



character = ["!", "%", "&", "(", ")", "*"];
number = ["1", "2", "3", "4", "5", "6", "8", "9", "0"];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = lowercase.map(toUpper)
console.log(uppercase)

var options = [];
function toUpper(x) {
  return x.toUpperCase();
}
alphabetUpper = lowercase.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  console.log("generateBtn")
  var ps = generatePassword();
  document.querySelector("#password").placeholder = ps;

});



// Write password to the #password input
function generatePassword() {

  var passwordLength = parseInt(prompt("How many character would you require for your password ? Select between 8-128"));
  console.log(passwordLength)

  if (!passwordLength) {
    alert("This needs a value");
    return //stop the function//
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("please enter password length should be between 8-128")
    return
  }

  confirmNumber = confirm("Would you like to contain numbers?");
  confirmCharacter = confirm("Would you like to contain Character?");
  confirmUppercase = confirm("WWould you like to contain Uppercase?");
  confirmLowercase = confirm("Would you like to contain Lowercase?");

  if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
    alert("Please select again!");
    return
  }
  var options = [];

  if (confirmNumber) {
    options = options.concat(number);
  }
  if (confirmCharacter) {
    options = options.concat(character);
  }
  if (confirmLowercase) {
    options = options.concat(lowercase);
  }
  if (confirmUppercase) {
    options = options.concat(uppercase);
  }
  console.log(options)

  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < passwordLength; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
    console.log(pickOptions)
  }

  //join is combo array into string
  var ps = password.join("");
  // UserInput(ps);

  return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}


