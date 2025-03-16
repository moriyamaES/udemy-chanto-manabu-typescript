const item_strintg = '{"name": "いちご","price": 150'

try {
  const item: any = JSON.parse(item_strintg)
  console.table(item)
} catch (e: any) {
  console.log('JSON形式が正しくありません')
  console.log(e.message)
}

