const words = [
  "Frontend Designer",
  "Web Designer",
  "UI/UX Designer",
  "Web Developer",
  "Software Tester"
];

let wordIndex = 0;
let letterIndex = 0;
const spanElement = document.querySelector(".text-animation span");

function typeText() {
  if (letterIndex < words[wordIndex].length) {
    spanElement.textContent += words[wordIndex][letterIndex];
    letterIndex++;
    setTimeout(typeText, 150); // Typing speed
  } else {
    setTimeout(eraseText, 2000); // Pause before erasing
  }
}

function eraseText() {
  if (letterIndex > 0) {
    spanElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(eraseText, 100); // Erasing speed
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeText, 500); // Pause before next word
  }
}

typeText();
