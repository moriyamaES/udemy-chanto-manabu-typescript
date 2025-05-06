function doublePromise(n: number): Promise<number>{
  return new Promise((resolve) => {
    setTimeout(() => {resolve(n * 2)}, 100)
  })
}

(async function() {
  const numbers = [1, 2, 3]
  const double = await Promise.all(numbers.map(doublePromise))
  console.log(await double)
})()

