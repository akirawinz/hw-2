import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';
import jsonRealQuery from './data/real_query.json';
import {createDiffieHellman} from "crypto";
const _ = require('lodash');
const sampleTransactions: Transaction[] = jsonSampleTransactions as Transaction[];
const sampleQuery = ['Alfred', 'Susan'];

const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];
const realQuery: string[] = jsonRealQuery as string[];

console.log('HW_2 - Application start!');

console.time('Process time');

const a =_.reduce(realQuery, function(obj:any, item:any) {
    obj[item] = item
    return obj
}, {});

const data = _.sumBy(realTransactions, function(o:any) {
    const  name = o.name.split(' ')[0]
    if(a[name]) {
        return o.profit
    }
});

console.log(data)

console.timeEnd('Process time');
