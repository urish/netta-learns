const letter = document.getElementById("letter")!;
const success = document.getElementById("success")!;

// const abc = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const abc = "0123456789".toUpperCase();
const successFigures = ["🦄", "😫"];
let currentLetter;

function nextLetter() {
  currentLetter = abc[Math.floor(Math.random() * abc.length)];
  letter.innerText = currentLetter;
}

document.onkeydown = (e) => {
  if (e.key.toUpperCase() === currentLetter) {
    success.innerText =
      successFigures[Math.floor(Math.random() * successFigures.length)];
    success.style.opacity = "1";
    nextLetter();
    setTimeout(() => {
      success.style.opacity = "0";
    }, 3000);
  }
};

nextLetter();
