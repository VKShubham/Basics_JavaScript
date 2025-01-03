function insertObject(arr, position, obj) {
    arr[position[0]].splice(position[1],0, obj)
    return arr
}


let nestedArray = [
    [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 }
    ],
    [
    { name: "Samantha", age: 35 },
    { name: "David", age: 40 },
    { name: "Emily", age: 25 }
    ]
];
console.log(insertObject(nestedArray, [0, 1], { name: "Mike", age: 28 }));