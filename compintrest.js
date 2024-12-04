// Select input elements
const principalInput = document.querySelector("#principal");
const rateInput = document.querySelector("#rate");
const compoundingInput = document.querySelector("#compoundingTimes");
const timeInput = document.querySelector("#time");
const resultOutput = document.querySelector("#result");

// Function to calculate compound interest
function calculate() {
  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value) / 100; // Convert rate to a decimal
  const compoundingTimes = parseFloat(compoundingInput.value);
  const time = parseFloat(timeInput.value);

  if (
    isNaN(principal) ||
    isNaN(rate) ||
    isNaN(compoundingTimes) ||
    isNaN(time)
  ) {
    resultOutput.textContent = "0";
    return;
  }

  // Compound interest formula: P * (1 + r/n)^(nt)
  const amount =
    principal * Math.pow(1 + rate / compoundingTimes, compoundingTimes * time);

  // Display the result
  resultOutput.value = amount.toFixed(2);
}

// Add event listeners to inputs to calculate on input
[principalInput, rateInput, compoundingInput, timeInput].forEach((input) => {
  input.addEventListener("input", calculate);
});
