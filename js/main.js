// import { initRussianKeyboard, initEnglishKeyboard, language } from './keyboardsinit.js'

// window.addEventListener('DOMContentLoaded', () => {
//   initEnglishKeyboard();
//   language = 'english';
// })

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'AltLeft') {
//     if (event.code === 'ShiftLeft' && language === 'english') {
//       keyboardConainer.innerHTML = '';
//       language === 'russian';
//       initRussianKeyboard();
//       return console.log('djkfvbi');
//     }
//   } else if (event.code === 'ShiftLeft') {
//     if (event.code === 'AltLeft' && language === 'english') {
//       keyboardConainer.innerHTML = '';
//       language === 'russian';
//       initRussianKeyboard();ommit
//       return console.log('hi');
//     }
//   } else {
//     keyboardConainer.innerHTML = '';
//     language === 'english';
//     initEnglishKeyboard();
//   }
// })
const KEYS__ENG = {
  Backquote: ['`', `~`],
  Digit1: ['1', '!'],
  Digit2: ['2', '@'],
  Digit3: ['3', '#'],
  Digit4: ['4', '$'],
  Digit5: ['5', '%'],
  Digit6: ['6', '^'],
  Digit7: ['7', '&'],
  Digit8: ['8', '*'],
  Digit9: ['9', '('],
  Digit0: ['0', ')'],
  Minus: ['-', '_'],
  Equal: ['=', '+'],
  Backspace: ['Backspace', 'Backspace'],
  // 
  Tab: ['Tab', 'Tab'],
  KeyQ: ['q', 'Q'],
  KeyW: ['w', 'W'],
  KeyE: ['e', 'E'],
  KeyR: ['r', 'R'],
  KeyT: ['t', 'T'],
  KeyY: ['y', 'Y'],
  KeyU: ['u', 'U'],
  KeyI: ['i', 'I'],
  KeyO: ['o', 'O'],
  KeyP: ['p', 'P'],
  BracketLeft: ['[', '{'],
  BracketRight: [']', '}'],
  Backslash: ['\\', '|'],
  Del: ['Del', 'Del'],
  // 
  CapsLock: ['CapsLock', 'CapsLock'],
  KeyA: ['a', 'A'],
  KeyS: ['s', 'S'],
  KeyD: ['d', 'D'],
  KeyF: ['f', 'F'],
  KeyG: ['g', 'G'],
  KeyH: ['h', 'H'],
  KeyJ: ['j', 'J'],
  KeyK: ['k', 'K'],
  KeyL: ['l', 'L'],
  Semicolon: [';', ':'],
  Quote: ['\'', '"'],
  Enter: ['Enter', 'Enter'],
  // 
  ShiftLeft: ['Shift', 'Shift'],
  KeyZ: ['z', 'Z'],
  KeyX: ['x', 'X'],
  KeyC: ['c', 'C'],
  KeyV: ['v', 'V'],
  KeyB: ['b', 'B'],
  KeyN: ['n', 'N'],
  KeyM: ['m', 'M'],
  Comma: [',', '<'],
  Period: ['.', '>'],
  Slash: ['/', '?'],
  ArrowUp: ['↑', '↑'],
  ShiftRight: ['Shift', 'Shift'],
  // 
  ControlLeft: ['Ctrl', 'Ctrl'],
  MetaLeft: ['Win', 'Win'],
  AltLeft: ['Alt', 'Alt'],
  Space: [' ', ' '],
  AltRight: ['Alt', 'Alt'],
  ArrowLeft: ['←', '←'],
  ArrowDown: ['↓', '↓'],
  ArrowRight: ['→', '→'],
  ControlRight: ['Ctrl', 'Ctrl'],
}

const KEYS__RUS = {
  Backquote: ['ё', `Ё`],
  Digit1: ['1', '!'],
  Digit2: ['2', '"'],
  Digit3: ['3', '№'],
  Digit4: ['4', ';'],
  Digit5: ['5', '%'],
  Digit6: ['6', ':'],
  Digit7: ['7', '?'],
  Digit8: ['8', '*'],
  Digit9: ['9', '('],
  Digit0: ['0', ')'],
  Minus: ['-', '_'],
  Equal: ['=', '+'],
  Backspace: ['Backspace'],
  // 
  Tab: ['Tab'],
  KeyQ: ['й', 'Й'],
  KeyW: ['ц', 'Ц'],
  KeyE: ['у', 'У'],
  KeyR: ['к', 'К'],
  KeyT: ['е', 'Е'],
  KeyY: ['н', 'Н'],
  KeyU: ['г', 'Г'],
  KeyI: ['ш', 'Ш'],
  KeyO: ['щ', 'Щ'],
  KeyP: ['з', 'З'],
  BracketLeft: ['х', 'Х'],
  BracketRight: ['ъ', 'Ъ'],
  Backslash: ['\\', '/'],
  Del: ['Del', 'Del'],
  // 
  CapsLock: ['CapsLock', 'CapsLock'],
  KeyA: ['ф', 'Ф'],
  KeyS: ['ы', 'Ы'],
  KeyD: ['в', 'В'],
  KeyF: ['а', 'А'],
  KeyG: ['п', 'П'],
  KeyH: ['р', 'Р'],
  KeyJ: ['о', 'О'],
  KeyK: ['л', 'Л'],
  KeyL: ['д', 'Д'],
  Semicolon: ['ж', 'Ж'],
  Quote: ['э', 'Э'],
  Enter: ['Enter', 'Enter'],
  // 
  ShiftLeft: ['Shift', 'Shift'],
  KeyZ: ['я', 'Я'],
  KeyX: ['ч', 'Ч'],
  KeyC: ['с', 'С'],
  KeyV: ['м', 'М'],
  KeyB: ['и', 'И'],
  KeyN: ['т', 'Т'],
  KeyM: ['ь', 'Ь'],
  Comma: ['б', 'Б'],
  Period: ['ю', 'Ю'],
  Slash: ['.', ','],
  ArrowUp: ['↑', '↑'],
  ShiftRight: ['Shift', 'Shift'],
  // 
  ControlLeft: ['Ctrl', 'Ctrl'],
  MetaLeft: ['Win', 'Win'],
  AltLeft: ['Alt', 'Alt'],
  Space: [' ', ' '],
  AltRight: ['Alt', 'Alt'],
  ArrowLeft: ['←', '←'],
  ArrowDown: ['↓', '↓'],
  ArrowRight: ['→', '→'],
  ControlRight: ['Ctrl', 'Ctrl']
}

const specialKeys = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft',
  'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight',
  'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Del'];

const lettersKeyboard = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA',
  'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];

const lettersRusKeyboard = ['Backquote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA',
  'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'BracketLeft',
  'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];

let language = '';
let isCapsLock = '';
let isShift = '';
let textareaString = '';

let textSpace = document.createElement("textarea");
textSpace.classList = "textarea";
document.body.appendChild(textSpace);

let keyboardConainer = document.createElement("div");
keyboardConainer.id = "keyboard";
document.body.appendChild(keyboardConainer);

window.addEventListener('DOMContentLoaded', () => {
  language = localStorage.getItem('lang') || 'english';
  isCapsLock = false;
  isShift = false;
  textareaString = '';
  init();
})

function printByMouse(elem, obj, string) {
  textSpace.focus();
  if (obj === KEYS__ENG && !isCapsLock && !(specialKeys.includes(elem.dataset.id))) {
    string += obj[elem.dataset.id][0];
  } else if (obj === KEYS__ENG && isCapsLock && !(specialKeys.includes(elem.dataset.id))) {
    if (lettersKeyboard.includes(elem.dataset.id)) {
      string += obj[elem.dataset.id][1];
    } else {
      string += obj[elem.dataset.id][0];
    }
  }
  if (obj === KEYS__RUS && !isCapsLock && !(specialKeys.includes(elem.dataset.id))) {
    string += obj[elem.dataset.id][0];
  } else if (obj === KEYS__RUS && isCapsLock && !(specialKeys.includes(elem.dataset.id))) {
    if (lettersRusKeyboard.includes(elem.dataset.id)) {
      string += obj[elem.dataset.id][1];
    } else {
      string += obj[elem.dataset.id][0];
    }
  }
  textSpace.value = string;
}

function shiftDown(ev, buttons) {
  if ((ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') && !isShift) {
    isShift = true;
    buttons.forEach(function (elem) {
      if (!(elem.dataset.id === 'CapsLock')) {
        elem.classList.add('shifted');
      }
    })
  }

}

function shiftUp(ev, buttons) {
  if ((ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') && isShift) {
    isShift = false;
    buttons.forEach(function (elem) {
      if (!(elem.dataset.id === 'CapsLock')) {
        elem.classList.remove('shifted');
      }
    })
  }
}

function capsLock(ev, button) {
  if (ev.code === 'CapsLock' && !isCapsLock) {
    isCapsLock = true;
    button.classList.add('CapsLock--active');
  } else {
    isCapsLock = false;
    button.classList.remove('CapsLock--active');
  }
}

function capsLockActive(obj, button) {
  if (obj === KEYS__ENG && !isCapsLock) {
    if (!specialKeys.includes(button.dataset.id)) {
      button.forEach(elem => {
        elem.classList.add('uppercase');
      })
    }
  }
  if (obj === KEYS__RUS && !isCapsLock) {
    if (!specialKeys.includes(button.dataset.id)) {
      button.forEach(elem => {
        elem.classList.add('uppercase');
      })
    }

  }
}

function capsLockPassive(button) {
  if (isCapsLock) {
    button.forEach(elem => {
      elem.classList.remove('uppercase');
    })
  }
}

function init() {
  if (language === 'english') {
    initEngKeyboard(KEYS__ENG);
  }
  if (language === 'russian') {
    initRusKeyboard(KEYS__RUS);
  }

}

function initEngKeyboard(object) {
  for (let key in object) {
    let keyKeyboard = document.createElement("div");
    keyKeyboard.classList.add("key");
    keyKeyboard.classList.add(`${key}`);
    keyKeyboard.dataset.id = `${key}`;
    if (specialKeys.includes(String(key))) {
      keyKeyboard.innerHTML = String(object[key][0]);
    } else if (lettersKeyboard.includes(String(key))) {
      if ((isShift && !isCapsLock) || (!isShift && isCapsLock)) {
        keyKeyboard.innerHTML = String(object[key][1]);
      } else if ((!isShift && !isCapsLock) || (isShift && isCapsLock)) {
        keyKeyboard.innerHTML = String(object[key][0]);
      }
    } else {
      keyKeyboard.innerHTML = `<span>${String(object[key][1])}</span>` + `<span>${String(object[key][0])}</span>`;
    }
    keyboardConainer.append(keyKeyboard);
  }

  let keyCapsLock = document.querySelector('.CapsLock');
  let keys = document.querySelectorAll('.key');

  document.addEventListener('keydown', (event) => {
    textSpace.focus();
    capsLock(event, keyCapsLock);
    shiftDown(event, keys);
    capsLockActive(object, keys);
    document.querySelector('#keyboard .key[data-id="' + event.code + '"]').classList.add('active');
  })

  document.addEventListener('keyup', (event) => {
    shiftUp(event, keys);
    capsLockPassive(keys);
    keys.forEach(function (elem) {
      elem.classList.remove('active')
    })
  })

  keys.forEach(function (element) {
    element.addEventListener('click', printByMouse(element, object, textareaString))
  })

}

function initRusKeyboard(object) {
  for (let key in object) {
    let keyKeyboard = document.createElement("div");
    keyKeyboard.classList.add("key");
    keyKeyboard.classList.add(`${key}`);
    keyKeyboard.dataset.id = `${key}`;
    if (specialKeys.includes(String(key))) {
      keyKeyboard.innerHTML = String(object[key][0]);
    } else if (lettersRusKeyboard.includes(String(key))) {
      if ((isShift && !isCapsLock) || (!isShift && isCapsLock)) {
        keyKeyboard.innerHTML = String(object[key][1]);
      } else if ((!isShift && !isCapsLock) || (isShift && isCapsLock)) {
        keyKeyboard.innerHTML = String(object[key][0]);
      }
    } else {
      keyKeyboard.innerHTML = `<span>${String(object[key][1])}</span>` + `<span>${String(object[key][0])}</span>`;
    }
    keyboardConainer.append(keyKeyboard);
  }

  document.addEventListener('keydown', (event) => {
    textSpace.focus();
    capsLock(event);
    document.querySelector('#keyboard .key[data-id="' + event.code + '"]').classList.add('active');
  })

  document.querySelectorAll('.key').forEach(function (element) {
    let textareaString = '';
    element.addEventListener('click', printByMouse(element, object, textareaString))
  })
}



document.addEventListener('keyup', () => {
  document.querySelectorAll('#keyboard .key').forEach(function (elem) {
    elem.classList.remove('active')
  })
})

let flag = false;

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft') flag = true;
  if (event.code === 'ShiftLeft' && language === 'english' && flag) {
    language = 'russian';
    keyboardConainer.innerHTML = '';
    init();
    flag = false;
  }
  if (event.code === 'ShiftLeft' && language === 'russian' && flag) {
    language = 'english';
    keyboardConainer.innerHTML = '';
    init();
    flag = false;
  }
  localStorage.setItem('lang', language);
})
