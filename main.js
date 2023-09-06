//letters
const letters = "abcdefghijklmnopqrstuvxyz";
//get array from letters by Array.from()
let letterArray = Array.from(letters);
//select letters container
let lettersContainer = document.querySelector(".letters");
//generate letters

letterArray.forEach((letter) => {
  //create span
  let span = document.createElement("span");
  //create letter text node
  let theLetter = document.createTextNode(letter);
  //appenfd the letter to span
  span.appendChild(theLetter);
  //add class on span
  span.className = `letter-box`;
  //append span to the letters container
  lettersContainer.appendChild(span);
});
// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
let allKeys = Object.keys(words);
//random number depend on keys lenght
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
//category
let randomPropName = allKeys[randomPropNumber]; // programming OR movies OR people OR countries
//random value group
let randomPropValue = words[randomPropName];
//random number depend on value group lenght
randomValueNumber = Math.floor(Math.random() * randomPropValue.length); // random numbers of keys values lenght
//spesific value from the group value (the choosen word)
let randomValueValue = randomPropValue[randomValueNumber];
// console.log(randomPropName);
// console.log(randomPropValue);
// console.log(randomValueValue);
//set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName; // innerText OR innerHTML are the same
// SELECT letters guess div
let lettersGuessCotainer = document.querySelector(".letters-guess");
//aray from choosen value (randomvaluevalue)
let lettersAndSpace = Array.from(randomValueValue);

//create spans depend on words lenght
lettersAndSpace.forEach((letter) => {
  //craete empty span
  let emptySpan = document.createElement("span");
  //if letter has space
  if (letter === " ") {
    //add class to this span
    emptySpan.className = "with-space";
  }
  //append the span in letter-guess div
  lettersGuessCotainer.appendChild(emptySpan);
});
//select guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");
//set wromg attenpets
let wrongAttempts = 0;
//selesct draw elements
let theDraw = document.querySelector(".hangman-draw");

//set the choose status
let theStatus = false;
let theTrue = 0;
//set the chose status
//############to be continued from her (1:07)############
// handle clicking on letters
document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    //get the letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    //the choosen word
    //  console.log(lettersAndSpace)
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    theChosenWord.forEach((wordLetter, wordindex) => {
      //هاتلي الحرف و الاندكس بتاعه
      //لو اللي دوسنا عليه بيساوي حاجة من حروف الكلمة بتاع اللعبة
      if (theClickedLetter == wordLetter) {
        //set status so correct
        theStatus = true;
        guessSpans.forEach((span, spanindex) => {
          if (spanindex === wordindex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    //outside the lop
    if (theStatus !== true) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      if (wrongAttempts == 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
      if (wrongAttempts == 3) {
        // document.getElementById("fail-3").play();
      } else if (wrongAttempts == 5) {
        // document.getElementById("fail-3").play();
      } else {
        // document.getElementById("fail").play();
      }
    } else {
      // document.getElementById("success").play();
    }
  }
});
//wordletter حرف من الكلمة اللي تم اختيارها من اللعة
//clicked letter دااللي دسنا عليها
//endgame function
function endGame() {
  //create  popup
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `You Lost Here! But You Won My Heart The Word Was: ${randomValueValue}`
  );
  //append text
  div.appendChild(divText);
  //add class on div
  div.className = `popup`;
  //append to the body
  document.body.appendChild(div);
}
