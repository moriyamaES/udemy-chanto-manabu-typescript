class Item {
  name: string = ''
  stock: number = 0

  buy(count: number): boolean{
    if (count <= this.stock) {
      this.stock -= count
      return true
    }
    return false
  }
}

let peach: Item = new Item()
peach.name = 'もも'
peach.stock = 3

console.log(peach.name)
console.log(peach.stock)
console.log(peach.buy(2))
console.log(peach.buy(3))

let grapes: Item = new Item()
grapes.name = 'ぶどう'
grapes.stock = 5

console.log(grapes.name)
console.log(grapes.stock)