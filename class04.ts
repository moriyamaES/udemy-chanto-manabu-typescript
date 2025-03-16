abstract class Item {
  name: string = ''
  price: number = 0
  abstract getTaxPrice(): number
}

class Food extends Item {
  getTaxPrice(): number {
    return this.price * 1.08
  }
}

class Stationary extends Item {
  getTaxPrice(): number {
    return this.price * 1.1
  }
}

const peach = new Food()
peach.name = 'もも'
peach.price = 70
console.log(peach.name)
console.log(peach.getTaxPrice())

const pencile = new Stationary()

