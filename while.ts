let dice: number = 0

while (dice !== 1){
  dice = Math.floor(Math.random() * 6 + 1)
  console.log(dice)
}

do {
  dice = Math.floor(Math.random() * 6 + 1)
  console.log(dice)
} while (dice !== 1)