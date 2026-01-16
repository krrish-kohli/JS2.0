//!====Coding Challenge: Student Grading System===
//- Description: Create a simple application that accepts student marks, calculates if the student has passed, failed, or performed exceptionally based on the defined criteria.
//  - Features:
//   - Input for total possible marks and marks obtained.
//   - Calculate if the student has passed (≥ 50%).
//   - Calculate if the student performed exceptionally (≥ 80%).
//   - Compare the student's marks against the class average.
//   - Display results in a user-friendly format.
let studentGrading = function (totalMarks, obtainedMark, classAverage) {
  let passingCriteria = totalMarks * 0.5; //50%;
  let exceptionalCriteria = totalMarks * 0.8; //80%;
  let hasPassed = obtainedMark >= passingCriteria;
  let hasPerformedExceptionally = obtainedMark >= exceptionalCriteria;
  let isAboveAverage = obtainedMark > classAverage;

  return {
    hasPassed,
    hasPerformedExceptionally,
    isAboveAverage,
  };
};

const results = studentGrading(500, 410, 350);
