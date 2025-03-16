function getDice(max: number = 6, min: number = 1): number {
  console.log(min)
  console.log(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getDice(3,4))

// for (let i=0; i<100; i++) {
//   console.log(getDice(3))
// }
