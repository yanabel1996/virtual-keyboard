class KeybordBuilder {
  constructor() {
    this.textarea = this.initTextarea();
    this.keyboardContainer = this.initKeyboardContainer();
    this.keys = this.initKeyboardKeys();
    this.language = localStorage.getItem('lang') || 'english';
    this.isCapsLock = false;
    this.isShift = false;
    this.textareaString = '';
    this.keyRusData = KEYS__RUS;
    this.keyEngData = KEYS__ENG;
    this.specialKeys = specialKeys;
    this.lettersEngKeyboard = lettersEngKeyboard;
    this.lettersRusKeyboard = lettersRusKeyboard;
    this.flag = false;

  }

  init() {
    this.initTextarea();
    this.initKeyboardContainer();
    this.initKeyboard();
    this.initKeyboardKeys();
  }

  initKeyboard = () => {
    if (this.language === 'english') {
      this.initKeyboardKeys(this.KEYS__ENG, this.lettersEngKeyboard);
    } else if (this.language === 'russian') {
      this.initKeyboardKeys(this.KEYS__RUS, this.lettersRusKeyboard);
    }
  }

  initTextarea = () => {
    let textSpace = document.createElement("textarea");
    textSpace.classList = "textarea";
    document.body.appendChild(textSpace);
  }

  initKeyboardContainer() {
    let keyboardConainer = document.createElement("div");
    keyboardConainer.id = "keyboard";
    document.body.appendChild(keyboardConainer);
  }

  initKeyboardKeys = (object, array) => {
    for (let key in object) {
      let keyKeyboard = document.createElement("div");
      keyKeyboard.classList.add("key");
      keyKeyboard.classList.add(`${key}`);
      keyKeyboard.dataset.id = `${key}`;

      if (this.specialKeys.includes(String(key))) {
        keyKeyboard.innerHTML = String(object[key][0]);
      } else if (array.includes(String(key))) {
        keyKeyboard.innerHTML = String(object[key][0]);
        keyKeyboard.classList.add("letter");
      } else {
        keyKeyboard.innerHTML = `<span>${String(object[key][1])}</span>` + `<span>${String(object[key][0])}</span>`;
      }

      this.keyboardConainer.append(keyKeyboard);
    }

  }

  shiftDown = (ev, buttons) => {
    if ((ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') && !this.isShift) {
      this.isShift = true;
      buttons.forEach(function (elem) {
        if (!(elem.dataset.id === 'CapsLock')) {
          elem.classList.add('shifted');
        }
      })
    }
  }

  shiftUp = (ev, buttons) => {
    if ((ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') && this.isShift) {
      this.isShift = false;
      buttons.forEach(function (elem) {
        if (!(elem.dataset.id === 'CapsLock')) {
          elem.classList.remove('shifted');
        }
      })
    }
  }

  capsLock = (button, ev, key) => {
    if (ev.code === 'CapsLock') {
      if (!this.isCapsLock) {
        key.forEach(function (elem) {
          elem.classList.add('uppercase');
        });
        button.classList.add('CapsLock--active');
        this.isCapsLock = true;
      } else {
        button.classList.remove('CapsLock--active');
        key.forEach(function (elem) {
          elem.classList.remove('uppercase');
        })
        this.isCapsLock = false;
      }
    }
  }

  eventsKeyboard = () => {
    let keyCapsLock = document.querySelector('.CapsLock');
    let letter = document.querySelectorAll('.letter');

    document.addEventListener('keydown', (event) => {
      // switch lang
      if (event.code === 'AltLeft') this.lag = true;
      if (event.code === 'ShiftLeft' && this.language === 'english' && this.flag) {
        this.language = 'russian';
        keyboardConainer.innerHTML = '';
        this.initKeyboard();
        this.flag = false;
      }
      if (event.code === 'ShiftLeft' && this.language === 'russian' && this.flag) {
        this.language = 'english';
        this.keyboardConainer.innerHTML = '';
        this.initKeyboard();
        this.flag = false;
      }
      localStorage.setItem('lang', this.language);

      this.textarea.focus();
      this.shiftDown(event, this.keys);
      this.capsLock(keyCapsLock, event, letter);
      document.querySelector('#keyboard .key[data-id="' + event.code + '"]').classList.add('active');
    })

    document.addEventListener('keyup', (event) => {
      shiftUp(event, this.keys);
      this.keys.forEach(function (elem) {
        elem.classList.remove('active')
      })
    })
  }

}



window.addEventListener('DOMContentLoaded', () => {
  let keyboard = new KeybordBuilder;
  keyboard.init();
})