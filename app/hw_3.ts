import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';
import jsonTestCase3_1 from './data/testcase_3_1.json';
import jsonTestCase3_2 from './data/testcase_3_2.json';
import jsonTestCase3_3 from './data/testcase_3_3.json';
import jsonTestCase3_4 from './data/testcase_3_4.json';
const _ = require('lodash');
const sampleTransactions: Transaction[] = jsonSampleTransactions as Transaction[];
const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];
const testCase1 = jsonTestCase3_1 as Transaction[];
const testCase2 = jsonTestCase3_2 as Transaction[];
const testCase3 = jsonTestCase3_3 as Transaction[];
const testCase4 = jsonTestCase3_4 as Transaction[];

console.log('HW_3 - Application start!');
console.time('Process time');

const maxSubArray = (nums:any) => {
    let maxSoFar = 0, maxEndingHere = 0;
    let startIndex = -1;
    let endIndex = -1;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > maxEndingHere + nums[i]) {
            startIndex = i;
            maxEndingHere = nums[i];
        } else {
            maxEndingHere = maxEndingHere + nums[i];
        }

        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            endIndex = i;
        }

    }

    const newArr = nums.slice(startIndex, endIndex + 1);
    const sum = newArr.reduce((a:any, b:any) => a + b, 0);
    const total_arr = newArr.length

    // return
    return  {maxEndingHere,newArr,sum,total_arr}
};

const a:any = testCase1.map((x:any) => x.profit);
const b = testCase2.map((x:any) => x.profit);
const c = testCase3.map((x:any) => x.profit);
const d = testCase4.map((x:any) => x.profit);
const e = realTransactions.map((x:any) => x.profit);
const test = sampleTransactions.map((x:any) => x.profit);

// console.log(maxSubArray(test))
// console.log(maxSubArray(a))
// console.log(maxSubArray(b))
// console.log(maxSubArray(c))
// console.log(maxSubArray(d))
console.log(maxSubArray(e))
// Your code here

console.timeEnd('Process time');
