// -----Mouse Event -----
document.getElementById("clickButton").onclick = function clickHandler() {
  console.log("Click event is called");
};

document.getElementById("doubleClickButton").ondblclick =
  function dblClickHandler() {
    console.log("Double click event is called");
  };

document.getElementById("hoverDiv").onmouseover =
  function onMouseOverHandler() {
    console.log("Mouse over event is called");
  };

document.getElementById("hoverDiv").onmouseout = function onMouseOutHandler() {
  console.log("Mouse out event is called");
};

// -----Keyboard Event -----
document.getElementById("keyInput").onkeydown = function onKeyDownHandler() {
  //   console.log("Key down event is called");
};

document.getElementById("keyInput").onkeyup = function onKeyUpHandler() {
  //   console.log("Key up event is called");
};

document.getElementById("keyInput").onkeyup = function onKeyPressHandler() {
  console.log("Key press event is called");
};

// -----Form Event -----
document.getElementById("myForm").onsubmit = function onSubmitHandler() {
  console.log("Form submit event is called");
};

document.getElementById("formInput").onfocus = function onFocusHandler() {
  console.log("Input focus event is called");
};

document.getElementById("formInput").onblur = function onBlurHandler() {
  console.log("Input blur event is called");
};
