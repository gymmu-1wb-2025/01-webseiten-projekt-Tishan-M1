let titleElement = document.querySelector("#Start");

let originalTitle = titleElement.textContent;

let count = 0;

function increaseCount() {
  count = count + 1;

  titleElement.textContent = originalTitle + " (" + count + ")";
}

document.addEventListener("keydown", increaseCount);

titleElement.addEventListener("click", increaseCount);

setInterval(increaseCount, 1000);
