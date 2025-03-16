"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aria = {
    'hokkaido': ['北海道'],
    'touhoku': ['青森県', '岩手県', '宮城県'],
    'kanto': ['東京都',],
};
console.table(aria);
for (let area_name in aria) {
    console.log(area_name);
    for (let prefecture of aria[area_name]) {
        console.log('-' + prefecture);
    }
}
