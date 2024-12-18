export default class Section {
    constructor ({ items, renderer }, containerSelector ) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //método público que renderiza todos los elementos en una página
    renderItems() {
        this._renderedItems.forEach ((item) => this._renderer(item));
    }

    //toma elemento del DOM y lo agrega al contenedor
    addItems(element) {
        this._container.prepend(element);
    }
}