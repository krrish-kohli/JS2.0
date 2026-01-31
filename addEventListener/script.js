// -----Mouse Event -----
document
  .getElementById("clickButton")
  .addEventListener("click", function clickHandler() {
    console.log("Click event is called");
  });

document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", (e) => {
    console.log("Double click event is called");
    // console.log(this);
    console.log(e);
  });

document
  .getElementById("hoverDiv")
  .addEventListener("mouseover", function onMouseOverHandler() {
    console.log("Mouse over event is called");
  });

document
  .getElementById("hoverDiv")
  .addEventListener("mouseout", function onMouseOutHandler() {
    console.log("Mouse out event is called");
  });

// -----Keyboard Event -----
document
  .getElementById("keyInput")
  .addEventListener("keydown", function onKeyDownHandler() {
    // console.log("Key down event is called");
  });

document
  .getElementById("keyInput")
  .addEventListener("keyup", function onKeyUpHandler() {
    // console.log("Key up event is called");
  });

document
  .getElementById("keyInput")
  .addEventListener("keypress", function onKeyPressHandler() {
    console.log("Key press event is called");
  });

// -----Form Event -----
document
  .getElementById("myForm")
  .addEventListener("submit", function onSubmitHandler() {
    console.log("Form submit event is called");
  });

document
  .getElementById("formInput")
  .addEventListener("focus", function onFocusHandler() {
    console.log("Input focus event is called");
  });

document
  .getElementById("formInput")
  .addEventListener("blur", function onBlurHandler() {
    console.log("Input blur event is called");
  });
