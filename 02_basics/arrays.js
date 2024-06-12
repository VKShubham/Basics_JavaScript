const arr = [1,2,3,4,5]
const myHero = ["MARVEL","DC"]

const arr1 = new Array(1,2,3);
console.log(arr[0]);

// Array Methods
arr.push(6)
// console.log(arr);
arr.pop()

arr.unshift(-1)
// console.log(arr); // it adds at start and rearrange all
// console.log(arr.includes(1)); 
// console.log(arr.indexOf(-1));

//slice , splice

const newarr = arr.slice(1,3);
console.log(newarr);

const newarr2 = arr.splice(1,3);
console.log(newarr2);

// main difference between slice and splice is that slice only copy the indicate 
// input it not remove from original array while in splice it will cut it from original array 