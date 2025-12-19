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
/*   Dieser Code ist da das beim Starten der Webseite ein Countdown gezählt wird um zu zeigen wie lang man auf der Webseite ist das funktionier folgendermasen: Das javaskript sucht nach der Id Star auf dem Index. Dann beginnt der Count bei 0 wie man ganz oben sieht. Beim dem code document.addEventListener passiert folgendes wenn und titleElement.addEventListener sagt wenn etwas Bestimmtes passiert soll es die Folgende funktion ausführen. Dann steht increase dafür da es es immer + 1 dazu zählen soll. Diese Funktion wird bei Starten der Webseite gestartet. Mit setInterval ist die geschwindigkeit mit dem der Counter zählt. ( 1s) */

function changeColor(color) {
  document.documentElement.style.setProperty("--section-color", color);
}
/* Mit diesem Javaskript ändert sich die Farbe bei klicken auf dem Index, die Farbe der Seite . Sie nimmt das color und setz diesen Wert auf die CSS im root für das ganze Dokument  auf eine Farbe. Dadurch ändert sich alle Elemente die in CSS var (--section-color) verwendet werden automatisch auf die gewählte Farbe  */
