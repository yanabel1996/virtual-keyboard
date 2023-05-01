const KEYS__ENG = {
  Backquote: ['`', '~'],
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
  Backquote: ['ё', 'Ё'],
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

const lettersEngKeyboard = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA',
  'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];

const lettersRusKeyboard = ['Backquote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA',
  'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'BracketLeft',
  'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];

let language = '';
let isCapsLock = '';
let isShift = '';
let textareaString = '';
let flag = false;

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

function shiftDown(ev, buttons, leter) {
  if ((ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') && !isShift) {
    isShift = true;
    buttons.forEach(function (elem) {
      if (!(elem.dataset.id === 'CapsLock')) {
        elem.classList.add('shifted');
      }
    })
    leter.forEach(function (elem) {
      if (!(elem.dataset.id === 'CapsLock')) {
        elem.classList.add('uppercase');
      }
    })
  }

}

function shiftUp(ev, buttons, leter) {
  if ((ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') && isShift) {
    isShift = false;
    buttons.forEach(function (elem) {
      if (!(elem.dataset.id === 'CapsLock')) {
        elem.classList.remove('shifted');
      }
    })

    leter.forEach(function (elem) {
      if (!(elem.dataset.id === 'CapsLock')) {
        elem.classList.remove('uppercase');
      }
    })
  }
}

function capsLock(button, ev, key) {
  if (ev.code === 'CapsLock') {
    if (!isCapsLock) {
      key.forEach(function (elem) {
        elem.classList.add('uppercase');
      });
      button.classList.add('CapsLock--active');
      isCapsLock = true;
    } else {
      button.classList.remove('CapsLock--active');
      key.forEach(function (elem) {
        elem.classList.remove('uppercase');
      })
      isCapsLock = false;
    }
  }
}

function tab(ev) {
  if (ev.code === 'Tab') {
    ev.preventDefault();
    textSpace.focus();
    textSpace.value += "    ";
  }

} 

function init() {
  if (language === 'english') {
    initKeyboard(KEYS__ENG, lettersEngKeyboard);
  } else if (language === 'russian') {
    initKeyboard(KEYS__RUS, lettersRusKeyboard);
  }

  document.querySelectorAll('.key').forEach(function (element) {
    element.addEventListener('click', () => {
      textSpace.focus();
      if (language === 'english' && !specialKeys.includes(element.dataset.id)) {
        if (!isShift) {
          if (lettersEngKeyboard.includes(element.dataset.id)) {
            textSpace.value += element.innerHTML;
          } else {
            textSpace.value += element.childNodes[1].innerHTML;
          }
        } else {
          if (lettersEngKeyboard.includes(element.dataset.id)) {
            textSpace.value += element.innerHTML;
          } else {
            textSpace.value += element.childNodes[0].innerHTML;
          }
        }
      } else if (language === 'russian' && !specialKeys.includes(element.dataset.id)) {
        if (!isShift) {
          if (lettersRusKeyboard.includes(element.dataset.id)) {
            textSpace.value += element.innerHTML;
          } else {
            textSpace.value += element.childNodes[1].innerHTML;
          }
        } else {
          if (lettersRusKeyboard.includes(element.dataset.id)) {
            textSpace.value += element.innerHTML;
          } else {
            textSpace.value += element.childNodes[0].innerHTML;
          }
        }
      }
    })
  })

  document.querySelector('.ShiftLeft').addEventListener('mousedown', () => {
    document.querySelectorAll('.letter').forEach(function (elem) {
      elem.classList.add('uppercase');
    })

    document.querySelectorAll('.digit').forEach(function (elem) {
      elem.classList.add('shifted');
    })
  })

  document.querySelector('.ShiftLeft').addEventListener('mouseup', () => {
    document.querySelectorAll('.letter').forEach(function (elem) {
      elem.classList.remove('uppercase');
    })

    document.querySelectorAll('.digit').forEach(function (elem) {
      elem.classList.remove('shifted');
    })
  })

  document.querySelector('.ShiftRight').addEventListener('mousedown', () => {
    document.querySelectorAll('.letter').forEach(function (elem) {
      elem.classList.add('uppercase');
    })

    document.querySelectorAll('.digit').forEach(function (elem) {
      elem.classList.add('shifted');
    })
  })

  document.querySelector('.ShiftRight').addEventListener('mouseup', () => {
    document.querySelectorAll('.letter').forEach(function (elem) {
      elem.classList.remove('uppercase');
    })

    document.querySelectorAll('.digit').forEach(function (elem) {
      elem.classList.remove('shifted');
    })
  })

  document.querySelector('.CapsLock').addEventListener('click', () => {
    if (!isCapsLock) {
      document.querySelectorAll('.letter').forEach(function (elem) {
        elem.classList.add('uppercase');
      });
      document.querySelector('.CapsLock').classList.add('CapsLock--active');
      isCapsLock = true;
    } else {
      document.querySelector('.CapsLock').classList.remove('CapsLock--active');
      document.querySelectorAll('.letter').forEach(function (elem) {
        elem.classList.remove('uppercase');
      })
      isCapsLock = false;
    }
  })

  document.querySelector('.Backspace').addEventListener('click', () => {
    textSpace.value = textSpace.value.substring(0, textSpace.value.length - 1);
  })

  document.querySelector('.Del').addEventListener('click', () => {
    const start = textSpace.selectionStart;
    const end = textSpace.selectionEnd;
    if (start === end && end < textSpace.value.length) {
      textSpace.value = textSpace.value.slice(0, start) + textSpace.value.slice(start + 1);
    } else {
      textSpace.value = textSpace.value.slice(0, start) + textSpace.value.slice(end);
    }
    textSpace.selectionStart = textSpace.selectionEnd = start;
    textSpace.focus();
  })

  document.querySelector('.Tab').addEventListener('click', () => {
    textSpace.value += "    ";
  })

  document.querySelector('.Space').addEventListener('click', () => {
    textSpace.value += "";
  })

  document.querySelector('.Enter').addEventListener('click', () => {
    textSpace.value += "\n";
  })

  document.querySelector('.ArrowLeft').addEventListener('click', () => {
    textSpace.selectionStart -= 1;
    textSpace.selectionEnd = textSpace.selectionStart;
  }, true)

  document.querySelector('.ArrowRight').addEventListener('click', () => {
    textSpace.selectionStart += 1;
    textSpace.selectionEnd = textSpace.selectionStart;
  }, true)

  document.querySelector('.MetaLeft').addEventListener('click', (ev) => {
    ev.preventDefault();
  })

}

function initKeyboard(object, array) {
  for (let key in object) {
    let keyKeyboard = document.createElement("div");
    keyKeyboard.classList.add("key");
    keyKeyboard.classList.add(`${key}`);
    keyKeyboard.dataset.id = `${key}`;

    if (specialKeys.includes(String(key))) {
      keyKeyboard.innerHTML = String(object[key][0]);
    } else if (array.includes(String(key))) {
      keyKeyboard.innerHTML = String(object[key][0]);
      keyKeyboard.classList.add("letter");
    } else {
      keyKeyboard.innerHTML = `<span>${String(object[key][1])}</span>` + `<span>${String(object[key][0])}</span>`;
      keyKeyboard.classList.add("digit");
    }

    keyboardConainer.append(keyKeyboard);
  }
}

document.addEventListener('keydown', (event) => {
  textSpace.focus();
  tab(event);
  shiftDown(event, document.querySelectorAll('.key'), document.querySelectorAll('.letter'));
  capsLock(document.querySelector('.CapsLock'), event, document.querySelectorAll('.letter'));
  document.querySelector('#keyboard .key[data-id="' + event.code + '"]').classList.add('active');
})

document.addEventListener('keyup', (event) => {
  shiftUp(event, document.querySelectorAll('.key'), document.querySelectorAll('.letter'));
  document.querySelectorAll('.key').forEach(function (elem) {
    elem.classList.remove('active')
  })
})

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
