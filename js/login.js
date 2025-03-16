"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const user_name = 'moriyama';
const passwoerd = '12345';
if (!(user_name === 'moriyama' && passwoerd === '12345')) {
    console.log('ログインに失敗しました');
    (0, process_1.exit)(1);
}
console.log('ログインしました');
(0, process_1.exit)(0);
