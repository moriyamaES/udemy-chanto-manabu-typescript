"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_strintg = '{"name": "いちご","price": 150';
try {
    const item = JSON.parse(item_strintg);
    console.table(item);
}
catch (e) {
    console.log('JSON形式が正しくありません');
    console.log(e.message);
}
