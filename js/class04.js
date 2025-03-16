"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = '';
        this.price = 0;
    }
}
class Food extends Item {
    getTaxPrice() {
        return this.price * 1.08;
    }
}
class Stationary extends Item {
    getTaxPrice() {
        return this.price * 1.1;
    }
}
const peach = new Food();
peach.name = 'もも';
peach.price = 70;
console.log(peach.name);
console.log(peach.getTaxPrice());
const pencile = new Stationary();
