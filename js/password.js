"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeds = [
    'A', 'B', 'C',
    'a', 'b', 'c',
    '1', '2', '3',
    '!', '#', '@',
];
const password_length = Number(process.argv[2]);
let password = '';
let randam;
for (let i = 0; i < password_length; i++) {
    let randam = Math.floor(Math.random() * seeds.length);
    password += seeds[randam];
}
console.log(password);
