const prefecture: {[key: string]: string} = {
  'hokkaido': '北海道',
  'aomori': '青森県',
  'iwate': '岩手県',
  'miyagi': '宮城県',
  'tokyo': '東京都',
}

for (let key in prefecture) {
  console.log(prefecture[key])
}

