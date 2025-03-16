let tax: number = 1.1
let add_tax = (price: number) : number => {
  tax = 1.2
  console.log(tax)
  return Math.floor(price * tax)
}

console.log(tax)
console.log(add_tax(100))
