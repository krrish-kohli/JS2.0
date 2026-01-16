//!====Coding Challenge: BMI Calculator===
//Develop a function-based project where users input their height and weight, and the app calculates their BMI using a function that returns the result. Add conditional statements to display health status based on the BMI value.

const calculateBMI = (weight, height) => {
  let bmi = weight / (height * height);
  let status;
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal Weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  return status;
};

const bmiResult = calculateBMI(68, 1.75);
