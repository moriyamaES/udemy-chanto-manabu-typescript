"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_sum(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++)
        sum += score[i];
    return sum;
}
// function get_avarage(score: number[]): number {
//   return get_sum(score) / score.length
// }
const get_avarage = (score) => get_sum(score) / score.length;
const score = [];
process.argv.slice(2).forEach(s => score.push(Number(s)));
// for (let i=2; i< process.argv.length; i++){
//   score.push(Number(process.argv[i]))
// }
console.table(score);
console.log('人数：' + score.length);
console.log('最高点：' + Math.max(...score));
console.log('最高点：' + Math.min(...score));
console.log('合計点：' + get_sum(score));
console.log('平均点：' + get_avarage(score));
