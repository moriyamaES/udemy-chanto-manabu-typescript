class Item {
  private _name: string = ''
  private _stock: number = 0

  constructor(name: string, stock: number) {
    this.name = name
    this.stock = stock
  }

  set name(value: string) {
    this._name
  }

  get name() {
    return this._name
  }

  set stock(value: number){
    if (value >= 0){
      this._stock = value
      return
    }
    this._stock = 0
  }

  get stock(): number {
    return this._stock
  }
}

let peach: Item = new Item('もも', -3)
console.log(peach.stock)
