function sumofTwolargestno(arr) {
    arr = arr.sort((a,b) => a - b);
    return (arr[arr.length - 1] + arr[arr.length - 2]);
}

console.log(sumofTwolargestno([1, 8, 3, 4, 5]));
