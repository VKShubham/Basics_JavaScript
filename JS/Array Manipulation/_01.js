function revrseNestedArray(arr) {
    arr.map(newArr => newArr.reverse());
    return arr;
}

arr = [[1,2,3,4],[5,6,7,8],[9,10]];
console.log(revrseNestedArray(arr));
