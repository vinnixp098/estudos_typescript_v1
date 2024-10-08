export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // get data(): Date {
    //   return this._data;
    // }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // máscara de data para não ser alterada por setDate(), parte da programação defensiva
        return data;
    }
}
