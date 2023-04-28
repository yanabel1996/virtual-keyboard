import { KEYS__RUS, KEYS__ENG, specialKeys, lettersKeyboard } from './keys.js';

window.addEventListener('DOMContentLoaded', () => {
  language = 'english';
})

let language = '';

let textSpace = document.createElement("textarea");
textSpace.classList = "textarea";
document.body.appendChild(textSpace);

let keyboardConainer = document.createElement("div");
keyboardConainer.id = "keyboard";
document.body.appendChild(keyboardConainer);

export function init() {
  if (language === 'english') {
    initEnglishKeyboard();
  }
  if(language === 'russian') {
    initRussianKeyboard();
  }
}

function initRussianKeyboard() {
  for (let key in KEYS__RUS) {
    if (specialKeys.includes(String(key))) {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key", `${key}`);
      keyboardConainer.append(keyKeyboard);
      keyKeyboard.innerHTML = String(KEYS__ENG[key][0]);
    } else if (lettersKeyboard.includes(String(key))) {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key");
      keyboardConainer.append(keyKeyboard);
      keyKeyboard.innerHTML = String(KEYS__ENG[key][0]);
    } else {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key", `${key}`);
      keyboardConainer.append(keyKeyboard);
      keyKeyboard.innerHTML = String(KEYS__ENG[key][1]) + String(KEYS__ENG[key][0]);
    }
  }
}

function initEnglishKeyboard() {
  for (let key in KEYS__ENG) {
    if (specialKeys.includes(String(key))) {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key", `${key}`);
      keyKeyboard.dataset.id = `${key}`;
      keyboardConainer.append(keyKeyboard);
      keyKeyboard.innerHTML = String(KEYS__ENG[key][0]);
    } else if (lettersKeyboard.includes(String(key))) {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key");
      keyKeyboard.dataset.id = `${key}`;
      keyboardConainer.append(keyKeyboard);
      keyKeyboard.innerHTML = String(KEYS__ENG[key][0]);
    } else {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key", `${key}`);
      keyKeyboard.dataset.id = `${key}`;
      keyboardConainer.append(keyKeyboard);
      keyKeyboard.innerHTML = String(KEYS__ENG[key][1]) + String(KEYS__ENG[key][0]);
    }
  }
}

document.addEventListener('keydown', event => {
  textSpace.focus();
  document.querySelector('#keyboard .key[data-id="' + event.code + '"]').classList.add('active');
})

document.addEventListener('keyup', () => {
  document.querySelectorAll('#keyboard .key').forEach(function (elem) {
    elem.classList.remove('active')
  })
})

document.querySelectorAll('#keyboard .key').forEach(function (element) {
  element.tabIndex = '';
})

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft') {
    if (event.code === 'ShiftLeft' && language === 'english') {
      keyboardConainer.innerHTML = '';
      language === 'russian';
      initRussianKeyboard();
      return console.log('djkfvbi');
    }
  } else if (event.code === 'ShiftLeft') {
    if (event.code === 'AltLeft' && language === 'english') {
      keyboardConainer.innerHTML = '';
      language === 'russian';
      initRussianKeyboard();
      return console.log('hi');
    }
  } else {
    keyboardConainer.innerHTML = '';
    language === 'english';
    initEnglishKeyboard();
  }
})