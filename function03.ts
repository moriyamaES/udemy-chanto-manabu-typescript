function getRandomChar(...chars: string[]) :string {
  const index = Math.floor(Math.random() * chars.length)
  return chars[index]
}

console.log(getRandomChar("A","B","C","D"))
