// Reference to the display element
var display = document.getElementById("display");

// Function to add the pressed key to the display
function pressKey(value) {
  display.value += value; // Add the button's value to the display
}

// Function to clear the display
function clearDisplay() {
  display.value = ""; // Set the display to an empty string
}

// Function to calculate the result
function calculate() {
  display.value = eval(display.value); // Evaluate the mathematical expression
}
