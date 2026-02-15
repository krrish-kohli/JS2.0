// Step 1: Initialize Feather icons for any elements that need icons
//   - Use feather.replace() to replace placeholders with actual icons
feather.replace();
// Step 2: Initialize the application by selecting necessary DOM elements
//   - Select elements for amount input, currency dropdowns, convert button, result display, base currency, get rates button, exchange rates display, mode toggles, and mode sections
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const baseCurrency = document.getElementById("base-currency");
const getRatesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");
const convertMode = document.getElementById("convert-mode");
const exchangeMode = document.getElementById("exchange-mode");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Step 3: Define the API key for accessing the ExchangeRate-API
//   - Set the apiKey variable to your ExchangeRate-API key

// Step 4: Set up event listeners for toggling between conversion and exchange modes

// Step 5: Implement the currency conversion functionality
//   - Step 5a: Add a click event listener to the convert button
//   - Step 5b: Get the amount, from-currency, and to-currency values from the user

//   - Step 5c: Fetch the conversion rate from the API using the selected currencies
//   - Step 5d: Calculate the converted amount and update the result display with the converted value and currency symbol

//   - Step 5e: Handle any errors that occur during the API request and provide feedback to the user

// Step 6: Implement the exchange rates retrieval functionality
//   - Step 6a: Add a click event listener to the get rates button
//   - Step 6b: Get the base currency from the user
//   - Step 6c: Fetch the exchange rates from the API based on the selected base currency
//   - Step 6d: Display the fetched exchange rates in a list format within the exchange rates section
//   - Step 6e: Handle any errors that occur during the API request and provide feedback to the user

// Step 7: Create a helper function to return the appropriate currency symbol based on the currency code
//   - Define a getCurrencySymbol function that maps common currency codes to their symbols

// Step 8: Test the application to ensure all functionality works as expected
//   - Verify that feather.replace() correctly replaces placeholders with icons
//   - Check that the mode toggling works as intended
//   - Ensure that currency conversion is accurate and displayed properly
//   - Validate that exchange rates are correctly retrieved and displayed

// Step 9: Implement error handling to provide user feedback in case of issues with API requests
//   - Ensure that all fetch requests handle errors gracefully and update the UI accordingly

// Step 10: Consider future enhancements, such as adding more currency symbols, improving the UI with animations, or integrating additional features like historical exchange rates or comparison tools
