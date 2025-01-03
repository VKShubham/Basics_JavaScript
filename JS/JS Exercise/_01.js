function getUniqueValues(arrays) {
    if (arrays.length === 0) {
        return [];
    }
    
    const [firstArr, ...restArrs] = arrays;

    const uniqueRest = getUniqueValues(restArrs);
    return [...new Set([...firstArr, ...uniqueRest])];
}

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let arr3 = [5, 6, 7, 8];

let result = getUniqueValues([arr1, arr2, arr3]);
console.log(result);  
