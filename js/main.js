import { KEYS__RUS, KEYS__ENG } from './keys.js';

let textSpace = document.createElement("textarea");
textSpace.classList = "textarea";
document.body.appendChild(textSpace);

let keyboardConainer = document.createElement("div");
keyboardConainer.id = "keyboard";
document.body.appendChild(keyboardConainer);

document.addEventListener("keydown", function (e) {
  console.log(e)
})

