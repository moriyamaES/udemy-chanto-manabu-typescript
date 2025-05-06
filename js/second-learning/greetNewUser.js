"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetNewUser(func) {
    console.log(func("ご新規"));
}
function hello(name) {
    return `こんにちは！${name}さん！！`;
}
function goodMorning(name) {
    return `おはようございます！${name}さん！！`;
}
// こんにちは！ご新規さん!!
greetNewUser(hello);
// おはようございます！ご新規さん!!
greetNewUser(goodMorning);
