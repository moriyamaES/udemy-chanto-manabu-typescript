"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    constructor() {
        this.name = '';
        this.price = 0;
        this.limit_date = 0;
    }
    getTaxPrice() {
        return this.price * 1.08;
    }
}
class Stationary {
    constructor() {
        this.name = '';
        this.price = 0;
        this.width = 0;
        this.height = 0;
    }
    getTaxPrice() {
        return this.price * 1.1;
    }
}
const peach = new Food();
peach.name = 'もも';
peach.price = 70;
console.log(peach.getTaxPrice());
