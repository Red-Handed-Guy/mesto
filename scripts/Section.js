export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItemStart(element) {
    this._container.prepend(element);
  }

  addItemEnd(element) {
    this._container.append(element);
  }


  renderItems() {
    this._renderedItems.forEach(item => {
      this.addItemEnd(this._renderer(item))
    });
  }


  newItem(item) {
    this.addItemStart(this._renderer(item))
  }
}

