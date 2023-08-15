import master from '../img/Mastercard_icon-icons.com_60554.png';
import mir from '../img/mir-logo_norm.png';
import visa from '../img/visa-curved.png';
import americanexpress from '../img/americanexpress.png';
import dinersclub from '../img/dinersclub.png';
import discover from '../img/discover.png';
import JCB from '../img/JCB.png';
import paySystemRecognizer from './paySystemRecognizer';
import validateCardNumber from './validator';

export default class CardWidget {
  constructor(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get markup() {
    return `
        <div class="card-widget">
            <div class="icons-container">
                <img src="${mir}" alt="ff" class="mir gray">
                <img src="${visa}" alt="ff" class="visa gray">
                <img src="${master}" alt="ff" class="mastercard gray">
                <img src="${americanexpress}" alt="ff" class="americanexpress gray">
                <img src="${dinersclub}" alt="ff" class="dinersclub gray">
                <img src="${discover}" alt="ff" class="discover gray">
                <img src="${JCB}" alt="ff" class="jcb gray">
            </div>
            <div class="form-container">
                <form class="widget-form">
                <input class="input" type="text">
                <button class="submit">Click to Validate</button>
                </form>
            </div>
        </div>`;
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.submit';
  }

  static get formSelector() {
    return '.widget-form';
  }

  static get iconsSelector() {
    return '.icons-container';
  }

  bindToDom() {
    this.container.innerHTML = CardWidget.markup;

    this.form = this.container.querySelector(CardWidget.formSelector);
    this.input = this.form.querySelector(CardWidget.inputSelector);
    this.submit = this.form.querySelector(CardWidget.submitSelector);
    this.icons = this.container.querySelector(CardWidget.iconsSelector);

    this.form.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onInput);
  }

  onInput() {
    if (this.timeOut)(clearTimeout(this.timeOut));
    this.timeOut = setTimeout(() => {
      this.showPaySystem(this.input.value);
    }, 300);

    this.input.classList.remove('red', 'green');
  }

  onSubmit(e) {
    e.preventDefault();
    if (validateCardNumber(this.input.value)) {
      this.input.classList.add('green');
    } else {
      this.input.classList.add('red');
    }
  }

  static getPaySysSelector(name) {
    return `.${name}`;
  }

  showPaySystem(number) {
    const paySys = paySystemRecognizer(number);
    if (paySys) {
      this.selectPaySystemCard(CardWidget.getPaySysSelector(paySys));
    } else {
      this.deselctAll();
    }
  }

  selectPaySystemCard(selector) {
    const icon = this.icons.querySelector(selector);
    icon.classList.remove('gray');
  }

  deselctAll() {
    for (const icon of this.icons.children) {
      if (!icon.classList.contains('gray')) {
        icon.classList.add('gray');
      }
    }
  }
}
