export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this.addItem(item)
    })
  }

  addItem(item, position) {
    switch (position) {
      case 'prepend':
        this._container.prepend(this._renderer(item))
        break
      case 'append':
        this._container.append(this._renderer(item))
        break
      default:
        this._container.append(this._renderer(item))
    }
  }
}