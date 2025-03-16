"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = '';
        this.stock = 0;
    }
    buy(count) {
        if (count <= this.stock) {
            this.stock -= count;
            return true;
        }
        return false;
    }
}
let peach = new Item();
peach.name = 'もも';
peach.stock = 3;
console.log(peach.name);
console.log(peach.stock);
console.log(peach.buy(2));
console.log(peach.buy(3));
let grapes = new Item();
grapes.name = 'ぶどう';
grapes.stock = 5;
console.log(grapes.name);
console.log(grapes.stock);
