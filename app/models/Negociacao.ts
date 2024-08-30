export class Negociacao {
  constructor(
    private _data: Date,
    public readonly _quantidade: number,
    public readonly _valor: number
  ) {}

  // get data(): Date {
  //   return this._data;
  // }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): Number {
    return this._valor;
  }

  get volume(): Number {
    return this._quantidade * this._valor;
  }

	get data():  Date {
		const data = new  Date(this._data.getTime()); // máscara de data para não ser alterada por setDate(), parte da programação defensiva
		return data;
	}
}
 