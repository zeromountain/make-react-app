const tag = '[Controller]';
export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, 'Controller');
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView
      .on('@submit', (e) => this.search(e.detail))
      .on('@reset', () => this.reset());
  }

  search(keyword) {
    console.log(tag, keyword);
  }

  reset() {
    console.log(tag, 'reset');
  }
}
