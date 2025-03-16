"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
const add2 = function (a, b) {
    return a + b;
};
console.log(add2(1, 3));
const add3 = (a, b) => a + b;
console.log(add3(1, 4));
