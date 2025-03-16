"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tax = 1.1;
let add_tax = (price) => {
    tax = 1.2;
    console.log(tax);
    return Math.floor(price * tax);
};
console.log(tax);
console.log(add_tax(100));
