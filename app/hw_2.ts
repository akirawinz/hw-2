import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';
import jsonRealQuery from './data/real_query.json';
import {createDiffieHellman} from "crypto";
const _ = require('lodash');
const sampleTransactions: Transaction[] = jsonSampleTransactions as Transaction[];
const sampleQuery = ['Alfred', 'Susan', 'Emilie', 'Susan'];

const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];
const realQuery: string[] = jsonRealQuery as string[];

console.log('HW_2 - Application start!');

console.time('Process time');

// Your code here
// method 1
const filter = _.filter(realTransactions, (s:any) => {
    return _.some(realQuery, (v:any) =>s.name.indexOf(v) >= 0 );
});
const b = filter.reduce( (acc:any, obj:any)=> acc + obj.profit, 0);
console.log(b)
// method 2
// let sum = 0;
// for (const {name, profit} of realTransactions) {
//     for (const keyword of realQuery) {
//         if (name.indexOf(keyword) >= 0) {
//             sum += profit;
//             break;
//         }
//     }
// }
// console.log(sum)

// method
// let sum = 0;
// let productsLength = realTransactions.length;
// let keywordsLength = realQuery.length;
// let pIndex, kIndex;
// for (pIndex = 0; pIndex < productsLength; ++pIndex) {
//     const {name, profit} = realTransactions[pIndex];
//     for (kIndex = 0; kIndex < keywordsLength; ++kIndex) {
//         if (name.indexOf(realQuery[kIndex]) >= 0) {
//             sum += profit;
//             break;
//         }
//     }
// }
// console.log(sum ,'53.700s - 54')
console.timeEnd('Process time');
