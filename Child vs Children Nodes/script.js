// Fetch the element with id="parent"
const parentEl = document.getElementById("parent");
// console.log(parentEl.childNodes);
// parentEl.childNodes.forEach((node) => console.log(node.nodeType));

// console.log(parentEl.children);

const convertedHTMLCollection = Array.from(parentEl.children);
convertedHTMLCollection.forEach((el) => console.log(el));
