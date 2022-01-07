import View from './View.js';
import { on, qs } from '../helpers.js';

const tag = '[SearchFormView]';

export default class SearchFormView extends View {
  constructor() {
    super(qs('#search-form-view')); // View를 상속받아 this.element에 돔 요소를 추가

    this.inputElement = qs('[type=text]', this.element); // scope → 어떤 하위 요소인지
    this.resetElement = qs('[type=reset]', this.element);

    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? 'block' : 'none';
  }

  bindEvent() {
    on(this.inputElement, 'keyup', () => this.handleKeyUp());
    on(this.element, 'submit', (e) => this.handleSubmit(e));
    on(this.resetElement, 'click', () => this.handleReset());
  }

  handleKeyUp() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);

    if (value.length <= 0) {
      this.handleReset();
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { value } = this.inputElement;
    this.emit('@submit', { value }); // 커스텀 이벤트
  }

  handleReset() {
    this.emit('@reset');
  }
}
