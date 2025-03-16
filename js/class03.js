"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = '';
        this.price = 0;
    }
    getTaxPrice() {
        return this.price * 1.1;
    }
}
class Food extends Item {
    constructor() {
        super(...arguments);
        this.limit_date = 0;
    }
    getTaxPrice() {
        return this.price * 1.08;
    }
}
const pencile = new Item();
pencile.name = '鉛筆';
pencile.price = 80;
console.log(pencile.getTaxPrice());
const peach = new Food();
peach.name = 'もも';
peach.price = 70;
peach.limit_date = 10;
console.log(peach.getTaxPrice());
