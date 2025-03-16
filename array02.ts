const items = ["イチゴ", "りんご", "バナナ"]
items.push("みかん")
items.unshift("ぶどう")
items[0] = 'オレンジ'
console.table(items)

items.shift()
console.table(items)

items.pop()
console.table(items)

console.log(items.slice(1,3))
