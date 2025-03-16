interface Item {
  name: string
  price: number
  getTaxPrice(): number
}

interface Size {
  width: number
  height: number
}

interface FoodItem extends Item {
  limit_date: number
}

class Food implements FoodItem {
  name: string = ''
  price: number = 0
  limit_date: number = 0
  getTaxPrice(): number {
    return this.price * 1.08
  }
}

class Stationary implements Item, Size {
  name: string = ''
  price: number = 0
  width: number = 0
  height: number = 0
  getTaxPrice(): number {
    return this.price * 1.1
  }
}

const peach = new Food()
peach.name = 'もも'
peach.price = 70
console.log(peach.getTaxPrice())

