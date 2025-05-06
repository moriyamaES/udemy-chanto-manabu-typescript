function doublePromise(n: number): Promise<number>{
  return new Promise((resolve) => {
    setTimeout(() => {resolve(n * 2)}, 100)
  })
}

(async function() {
  console.log( await doublePromise(2))
})()

