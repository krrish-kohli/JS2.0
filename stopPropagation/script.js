// Add event listener to the outer div
document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("Outer div clicked! Event Phase " + event.eventPhase);
  },
  false
); // Bubbling phase

// Add event listener to the middle div
document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("Middle div clicked! Event Phase " + event.eventPhase);
    event.stopPropagation(); // stop the event propagation
  },
  false
); // Bubbling phase

// Add event listener to the inner div
document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("Inner div clicked! Event Phase " + event.eventPhase);
    // event.stopPropagation(); // stop the event propagation
  },
  false
); // Bubbling phase
