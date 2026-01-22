// ! ===== Temperature Converter =====
// Create a project that converts Celsius to Fahrenheit (or vice versa). Use if statements to validate input (e.g., it should be a number).
document.getElementById("convertButton").addEventListener("click", function () {
  // get the value from temp input
  const temperature = parseInt(
    document.getElementById("temperatureInput").value
  );
  // get the value from the select input
  const conversionType = document.getElementById("conversionType").value;
  // select where to display the result
  const resultDiv = document.getElementById("result");

  // clear the previous text in the result div
  resultDiv.innerHTML = "";
  // Validate the user input
  if (isNaN(temperature)) {
    resultDiv.innerHTML = "Please enter a valid number for the temperature";
    return;
  }
  // conversion logic
  let convertedTemperature;
  if (conversionType === "toCelsius") {
    convertedTemperature = (temperature - 32) * (5 / 9);
    resultDiv.innerHTML = `${temperature}°F is equal to ${convertedTemperature.toFixed(
      2
    )}°C`;
  } else if (conversionType === "toFahrenheit") {
    convertedTemperature = temperature * (9 / 5) + 32;
    resultDiv.innerHTML = `${temperature}°C is equal to ${convertedTemperature.toFixed(
      2
    )}°F`;
  }
});
