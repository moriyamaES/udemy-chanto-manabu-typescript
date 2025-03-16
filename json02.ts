const item_strintg = '{"name": "いちご","price": 150}'
const item: any = JSON.parse(item_strintg)

console.table(item)

const item_strintg2 = JSON.stringify(item)
console.table(item_strintg2)


