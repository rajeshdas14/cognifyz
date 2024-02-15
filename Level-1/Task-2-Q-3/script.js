// Get the input elements and the result element
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

// Add the event listener to the Add button
document.getElementById('add').addEventListener('click', () => {
  // Parse the input values as numbers
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);

  // Check if the input values are numbers
  if (isNaN(number1) || isNaN(number2)) {
    result.innerText = 'Please enter valid numbers.';
    return;
  }

  // Calculate the sum and display the result
  const sum = number1 + number2;
  result.innerText = `Result: ${sum}`;
});