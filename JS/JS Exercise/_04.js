function pairs(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return "Not Possible";
    }
    let ans = [];
    for(let i=0; i<arr1.length; i++) {
        ans.push([arr1[i],arr2[i]]);
    }
    return ans;
}

let arr1 = [1, 2, 3]; 
let arr2 = ['a', 'b', 'c'];

console.log(pairs(arr1,arr2));