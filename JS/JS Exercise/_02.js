const maximum = (arr) => {
    return arr.reduce((acc,current) => {
        if(acc.age < current.age) {
           return acc = current
        }
        return acc;
    },arr[0])
}

let arr = [
    { "name": "John", "age": 25 },
    { "name": "Mary", "age": 32 },
    { "name": "Bob", "age": 45 }
];
console.log(maximum(arr));


