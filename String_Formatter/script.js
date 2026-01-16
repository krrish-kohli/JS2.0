//!====Coding Challenge: String Formatter===
//Design a tool that takes user input for a string and applies various transformations, like converting it to lowercase or uppercase, counting characters, finding a word’s index, and concatenating it with another string.

let formatString = function (text1, text2) {
  // * Lowercase
  let lowercase_result = text1.toLowerCase();

  // * Uppercase
  let uppercase_result = text2.toUpperCase();

  // * Counting
  let counting_result = text1.length;

  // * Finding Index
  let index_result = text2.indexOf(text1);

  // * Concat
  let result = text1.concat(" ", text2);
};
