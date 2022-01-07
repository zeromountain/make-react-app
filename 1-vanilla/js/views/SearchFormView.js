import View from './View.js';
import { qs } from '../helpers';

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, 'constructor');
    super(qs('#search-form-view')); // View를 상속받아 this.element에 돔 요소를 추가

    this.inputElement = qs('[type=text]', this.element);
    this.resetElement = qs('[type=reset]', this.element);
    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? 'block' : 'none';
  }

  bindEvent() {
    on(this.inputElement, 'keyup', () => this.handleKeyUp()); // 키보드에서 손을 땠을 때 발생하는 이벤트
  }

  handleKeyUp() {
    console.log(tag, 'handleKeyUp');
  }
}
