import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';
const _ = require('lodash');
const sampleTransactions: Transaction[] = jsonSampleTransactions as Transaction[];
const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];

console.log('HW_1 - Application start!');
console.time('Process time');
const map = _.map(realTransactions, (item:any) => item.name);
const setNewArr = [...new Set(map)].length;
console.log(setNewArr)
console.timeEnd('Process time');
