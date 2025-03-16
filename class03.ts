import { pseudoRandomBytes } from "crypto"

class Item {
  name: string = ''
  price: number = 0

  getTaxPrice(): number {
    return this.price * 1.1
  }
}

class Food extends Item {
  limit_date: number = 0

  getTaxPrice(): number {
    return this.price * 1.08
  }
}

const pencile = new Item()
pencile.name = '鉛筆'
pencile.price = 80
console.log(pencile.getTaxPrice())

const peach = new Food()
peach.name = 'もも'
peach.price = 70
peach.limit_date = 10
console.log(peach.getTaxPrice())


