//!====Coding Challenge: Character Counter Tool===
//Build a small application where users can input text, and the tool displays the length of the text, converts it to uppercase and lowercase, and slices or replaces parts of the text.

// Length
let textLength = (inputText) => inputText.length;
// const result = console.log(textLength("Hello"));

// Covert to uppercase
let upperText = (inputText) => inputText.toUpperCase();
// const result = console.log(upperText("Hello"));

// Convert to lowercase
let lowerText = (inputText) => inputText.toLowerCase();
// const result = console.log(lowerText("Hello"));

// Slice
let slicedText = (inputText, start, end) => inputText.slice(start, end);
// const result = console.log(slicedText("Hello", 0, 2));

// Replace
let replaceText = (inputText, originalText, replacedText) =>
  inputText.replace(originalText, replacedText);
