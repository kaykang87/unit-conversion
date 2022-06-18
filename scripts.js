// select dom
const len = document.querySelector("#length-convert");
const vol = document.querySelector("#volume-convert");
const mass = document.querySelector("#mass-convert");
const userInput = document.querySelector("#user-input");
userInput.value = "";
const convertBtn = document.querySelector("#convert-button");

// get user input when enter is pressed and convert the values
userInput.addEventListener("keypress", calculate);

// perform conversion on click
convertBtn.addEventListener("click", function () {
  calculateLength();
  calculateVolume();
  calculateMass();
  userInput.value = "";
  // reset();
});

// perform conversion and call each function when value is entered
function calculate(e) {
  if (e.key === "Enter") {
    calculateLength();
    calculateVolume();
    calculateMass();
    userInput.value = "";
    // reset();
  }
}

function calculateLength() {
  let lengthConvert = (userInput.value * 3.281).toFixed(3);
  let lengthConvert2 = (userInput.value * 0.305).toFixed(3);
  len.textContent = `${userInput.value} meters = ${lengthConvert} feet | ${userInput.value} feet = ${lengthConvert2} Meters`;
}

function calculateVolume() {
  let lengthConvert = (userInput.value * 0.264).toFixed(3);
  let lengthConvert2 = (userInput.value * 3.785).toFixed(3);
  vol.textContent = `${userInput.value} Liter = ${lengthConvert} Gallon | ${userInput.value} Gallon = ${lengthConvert2} Liter`;
}
function calculateMass() {
  let lengthConvert = (userInput.value * 0.454).toFixed(3);
  let lengthConvert2 = (userInput.value * 2.205).toFixed(3);
  mass.textContent = `${userInput.value} Pounds = ${lengthConvert} Kilogram | ${userInput.value} Kilogram = ${lengthConvert2} Pounds`;
}

function reset() {
  len.textContent = "1 meters = 3.281 feet | 1 feet = .305 meters";
  vol.textContent = "1 Liter = .264 Gallon | 1 gallon = 3.785 Liter";
  mass.textContent = "1 Kilogram = .454 Pounds | 1 Pound = 2.205 Kilogram";
}
