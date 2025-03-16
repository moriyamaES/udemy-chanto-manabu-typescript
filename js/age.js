"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Gest extends Person {
}
class Member extends Person {
    constructor(name, birth) {
        super(name);
        this._birth = birth;
    }
    get birth() {
        return this._birth;
    }
    set birth(value) {
        this._birth = value;
    }
    getAge() {
        const now = new Date();
        let age = now.getFullYear() - this.birth.getFullYear();
        const thisBirth = new Date(now.getFullYear(), this.birth.getMonth(), this.birth.getDay());
        if (now < thisBirth)
            age--;
        return age;
    }
}
const taro = new Gest('太郎');
const yosiko = new Member('良子', new Date(2000, 1, 3));
console.log(taro.name);
console.log(yosiko.name);
console.log(yosiko.getAge());
