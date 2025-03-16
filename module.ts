import baseItem, {tax} from './item.js'

console.log(tax)

class Food extends baseItem {
  getTaxPrice(): number {
    return this.price * 1.08
  }
}

const peach = new Food()
peach.name = 'もも'
peach.price = 70
console.log(peach.getTaxPrice())
