let myGuess;
const rangeMin = 0;
const rangeMax = 25;
let counter = 0;
let maxTries = 4;


myGuess = Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;


function myFunction() {
  const person = prompt("Vul hier je naam in", "");
  if (person !== null) {
    document.getElementById("name").innerHTML = "Hallo " + person + ", welkom bij Guess The Number.";
  }
}

function myNumber() {
  while (number !== myGuess) {
    const number = prompt("Vul hier je nummer in", "");
    counter += 1;
    alert("Je gok is " + number);
    if (counter > maxTries) {
      alert("Helaas, je hebt het niet binnen het maximaal aantal beurten geraden. Het juiste nummer is " + myGuess + ". Klik op Ctrl + R (Windows) of Command + R (Mac) om het nogmaals te proberen.");
      break
    } else if (number > myGuess) {
      alert(number + " is te hoog. Probeer het nog eens.");
    } else if (number < myGuess) {
      alert(number + " is te laag. Probeer het nog eens.");
    } else if (number == myGuess) {
      alert(number + " is het juiste nummer, gefeliciteerd! Je hebt het nummer in " + counter + " beurten geraden. Klik op Ctrl + R (Windows) of Command + R (Mac) om het spel nogmaals te spelen.");
      break
    }

  }
}

