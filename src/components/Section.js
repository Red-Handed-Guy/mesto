export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this.addItem(this._renderer(item))
    })
  }

  addItem(item, position) {
    switch (position) {
      case 'prepend':
        this._container.prepend(item)
        break
      case 'append':
        this._container.append(item)
        break
      default:
        this._container.append(item)
    }
  }
}