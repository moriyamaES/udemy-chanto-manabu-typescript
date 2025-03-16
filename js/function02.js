"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDice(max = 6, min = 1) {
    console.log(min);
    console.log(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getDice(3, 4));
// for (let i=0; i<100; i++) {
//   console.log(getDice(3))
// }
