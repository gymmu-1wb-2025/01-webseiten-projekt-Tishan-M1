console.log("Meine Webseite");
let counter = 0;

function increaseCount() {
  let newElement = document.querySelector("#counter");

  counter = counter + 1;
  newElement.textContent = counter;
}
